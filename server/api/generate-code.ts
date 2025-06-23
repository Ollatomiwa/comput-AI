import type { H3Event } from 'h3';

interface CodeGenerationResult {
  code: string;
  language: string;
}

export default defineEventHandler(async (event: H3Event): Promise<CodeGenerationResult> => {
  const { prompt } = await readBody(event);
  const HF_API_KEY = process.env.HF_API_KEY;

  // 1. Format prompt for CodeLlama
  const formattedPrompt = `[INST] Generate ONLY code for: ${prompt}\nRequirements:\n- No explanations\n- Proper indentation\n[/INST]\n\n`;

  // 2. Try Hugging Face first
  try {
    const hfResponse = await fetch(
      "https://api-inference.huggingface.co/models/codellama/CodeLlama-7b-instruct-hf",
      {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${HF_API_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          inputs: formattedPrompt,
          parameters: {
            max_new_tokens: 200,
            temperature: 0.2
          }
        }),
        signal: AbortSignal.timeout(30000) // 30s timeout
      }
    );

    if (!hfResponse.ok) {
      const error = await hfResponse.json();
      throw new Error(error.error || `HTTP ${hfResponse.status}`);
    }

    const [result] = await hfResponse.json();
    return {
      code: cleanCode(result.generated_text),
      language: detectLanguage(result.generated_text)
    };

  } catch (hfError) {
    console.error('Hugging Face failed:', hfError);

    // 3. Fallback to Ollama with proper connection check
    try {
      // First verify Ollama is running
      await $fetch("http://localhost:11434/api/tags", {
        timeout: 2000
      });

      // If reachable, try generation
      const ollamaResponse = await $fetch("http://localhost:11434/api/generate", {
        method: "POST",
        body: {
          model: "codellama:7b-instruct",
          prompt: formattedPrompt,
          stream: false
        },
        timeout: 30000
      }) as any; // Temporary type assertion

      return {
        code: cleanCode(ollamaResponse.response),
        language: detectLanguage(ollamaResponse.response)
      };

    } catch (ollamaError) {
      console.error('Ollama unavailable:', ollamaError);
      
      // 4. Final fallback
      return {
        code: getFallbackCode(prompt),
        language: detectLanguage(getFallbackCode(prompt))
      };
    }
  }
});

// Helper functions
function cleanCode(raw: string): string {
  return raw
    .replace(/```[a-z]*/g, '')
    .replace(/\[INST\].*?\[\/INST\]/gs, '')
    .trim();
}

function detectLanguage(code: string): string {
  if (!code) return '';
  if (code.includes('def ')) return 'Python';
  if (code.includes('function ')) return 'JavaScript';
  if (code.includes('<?php')) return 'PHP';
  return '';
}

function getFallbackCode(prompt: string): string {
  const lowerPrompt = prompt.toLowerCase();
  if (lowerPrompt.includes('python')) {
    return `# Example fallback\ndef example():\n    return "Service unavailable"`;
  }
  return `// Code generation failed\n// Try again later`;
}