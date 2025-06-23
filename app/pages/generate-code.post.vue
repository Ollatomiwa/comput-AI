<template>
  <div
    class="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-12 px-4 sm:px-6 lg:px-8"
  >
    <div class="max-w-3xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-12">
        <h1
          class="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 mb-4"
        >
          AI Code Generator
        </h1>
        <p class="text-gray-300 max-w-md mx-auto">
          Now powered by Hugging Face's StarCoder2
        </p>
      </div>

      <!-- Input Area -->
      <div
        class="bg-gray-800 rounded-xl p-6 shadow-lg mb-8 border border-gray-700"
      >
        <div class="flex items-center justify-between mb-4">
          <label for="prompt" class="block text-sm font-medium text-gray-300"
            >Your Code Request</label
          >
          <span class="text-xs text-gray-500"
            >Free Tier (30k tokens/month)</span
          >
        </div>
        <textarea
          id="prompt"
          v-model="prompt"
          rows="4"
          class="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-gray-200 placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
          placeholder="e.g., 'React hook to fetch data with error handling'"
          @keydown.shift.enter="generateCode"
        ></textarea>

        <div class="flex justify-between mt-4">
          <div class="flex space-x-2">
            <button
              v-for="example in examples"
              :key="example"
              @click="prompt = example"
              class="text-xs bg-gray-700 hover:bg-gray-600 text-gray-300 px-2 py-1 rounded transition-colors"
            >
              {{ example }}
            </button>
          </div>
          <button
            @click="generateCode"
            :disabled="loading"
            class="flex items-center justify-center ml-2 px-1 py-3 bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 rounded-lg text-white font-medium  shadow-lg hover:shadow-purple-500/20 transition-all disabled:opacity-50"
          >
            <svg
              v-if="loading"
              class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                class="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                stroke-width="4"
              ></circle>
              <path
                class="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            {{ loading ? "Generating..." : "Generate Code" }}
          </button>
        </div>
      </div>

      <!-- Output Area -->
      <div
        v-if="code"
        class="bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700 transition-all duration-300 relative"
      >
        <div class="flex items-center justify-between mb-4">
          <div class="flex items-center space-x-2">
            <h2 class="text-lg font-medium text-gray-300">Generated Code</h2>
            <span
              v-if="language"
              class="bg-blue-500 text-white text-xs px-2 py-1 rounded-full"
            >
              {{ language }}
            </span>
          </div>
          <div class="flex space-x-2">
            <button
              @click="copyToClipboard"
              class="flex items-center text-sm text-purple-400 hover:text-purple-300 transition-colors"
            >
              <svg
                class="w-5 h-5 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                ></path>
              </svg>
              Copy
            </button>
          </div>
        </div>
        <div class="relative">
          <pre
            class="p-4 overflow-x-auto bg-gray-900 rounded-lg text-gray-200 font-mono text-sm border border-gray-700"
          ><code>{{ typedCode || " " }}</code></pre>
          <div
            v-if="copied"
            class="absolute top-2 right-2 bg-gray-800 text-xs text-green-400 px-2 py-1 rounded-md"
          >
            Copied!
          </div>
        </div>
      </div>

      <!-- Empty State -->
      <div
        v-else
        class="bg-gray-800/50 rounded-xl p-12 text-center border-2 border-dashed border-gray-700"
      >
        <svg
          class="mx-auto h-12 w-12 text-gray-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          ></path>
        </svg>
        <h3 class="mt-2 text-sm font-medium text-gray-400">
          Your AI-generated code will appear here
        </h3>
      </div>
    </div>
  </div>
</template>

<script setup>
// Typewriter effect
const typedCode = ref("");
let typingInterval;

const typeCode = (newCode) => {
  clearInterval(typingInterval);
  typedCode.value = "";
  let i = 0;
  typingInterval = setInterval(() => {
    if (i < newCode.length) {
      typedCode.value += newCode[i];
      i++;
    } else {
      clearInterval(typingInterval);
    }
  }, 20);
};

// Main logic
const prompt = ref("");
const code = ref("");
const language = ref("");
const loading = ref(false);
const copied = ref(false);

const examples = [
  "Python",
  "React useState",
  "Express.js",
];

const generateCode = async () => {
  if (!prompt.value.trim()) return;

  loading.value = true;
  code.value = "";
  language.value = "";

  try {
    const response = await $fetch("/api/generate-code", {
      method: "POST",
      body: { prompt: prompt.value },
    });

    code.value = response.code;
    language.value = response.language;
    typeCode(response.code);
  } catch (error) {
    code.value = "// Error: Failed to generate code. Please try again.";
    console.error(error);
  } finally {
    loading.value = false;
  }
};

const copyToClipboard = () => {
  navigator.clipboard.writeText(code.value);
  copied.value = true;
  setTimeout(() => (copied.value = false), 2000);
};

// Clean up interval
onBeforeUnmount(() => {
  clearInterval(typingInterval);
});
</script>

<style>
/* Smooth typewriter effect */
pre {
  white-space: pre-wrap;
  word-wrap: break-word;
  font-family: "Fira Code", monospace;
}

/* Pulse animation for empty state */
.empty-pulse {
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%,
  100% {
    opacity: 0.6;
  }
  50% {
    opacity: 1;
  }
}
</style>
