<script setup lang="ts">
import { ref, onMounted } from 'vue';

// Refs for elements
const herotext = ref<HTMLElement | null>(null);
const subtext = ref<HTMLElement | null>(null);
const storytext = ref<HTMLElement | null>(null);
const probtext = ref<HTMLElement | null>(null);
const probsubtext = ref<HTMLElement | null>(null);
const soltext = ref<HTMLElement | null>(null);
const solsubtext = ref<HTMLElement | null>(null);
const howtext  = ref<HTMLElement | null>(null);
const howsubtext  = ref<HTMLElement | null>(null);

// Load GSAP only on the client
onMounted(async () => {
  if (process.client) {
    const gsap = (await import('gsap')).gsap;

    // Hero Text Animation
    if (herotext.value && subtext.value && storytext.value) {
      gsap.from(herotext.value, {
        opacity: 0,
        y: -50,
        ease: 'power3.out',
        duration: 3,
        delay: 0.5,
      });
      gsap.from(subtext.value, {
        opacity: 0,
        y: 50,
        ease: 'power3.out',
        duration: 1,
        delay: 1.5,
      });
      gsap.from(storytext.value, {
        opacity: 0,
        y: 50,
        ease: 'power3.out',
        duration: 1,
        delay: 2.5,
      });
    }
    //problem section
    if (probtext.value && probsubtext.value && soltext && solsubtext.value && howtext.value && howsubtext.value) {
      gsap.from(probtext.value, {
        opacity: 0,
        y: -50,
        ease: 'power3.out',
        duration: 2,
        delay: 2.8,
      });
      gsap.from(probsubtext.value, {
        opacity: 0,
        y: 50,
        ease: 'bounce.out',
        duration: 1.5,
        delay: 3.0,
      });
      gsap.from(soltext.value, {
        opacity: 0,
        y: 50,
        ease: 'power3.out',
        duration: 1,
        delay: 4.0,
      });
      gsap.from(solsubtext.value, {
        opacity: 0,
        y: 50,
        ease: 'bounce.out',
        duration: 1.5,
        delay: 4.4,
      });
      gsap.from(howtext.value, {
        opacity: 0,
        y: 50,
        ease: 'power3.out',
        duration: 1,
        delay: 5.2,
      });
      gsap.from(howsubtext.value, {
        opacity: 0,
        y: 50,
        ease: 'bounce.out',
        duration: 1.5,
        delay: 5.4,
      });
    }

    
  }
});

</script>
<template>
    <div class="min-h-screen bg-gray-50 text-gray-900">
      <!-- Hero Section -->
      <section class="py-20 bg-gradient-to-r from-blue-800 to-purple-400 text-white text-center">
        <div class="container mx-auto px-6">
          <h1 class="text-5xl font-bold mb-4" ref="herotext">Coding Redefined</h1>
          <p class="text-xl mb-8" ref="subtext">Harnessing the Power of LLMs with Nuxt.js</p>
          <a href="#story" class="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-dodgeroll-gold transition duration-300">Explore the Story</a>
        </div>
      </section>
      
      <!-- Story Section -->
      <section id="story" class="py-20">
        <div class="container mx-auto px-6">
          <h2 class="text-3xl font-bold text-center mb-12" ref="storytext">The Story Behind the Code</h2>
  
          <!-- Problem Section -->
          <div class="mb-16">
            <h3 class="text-2xl font-semibold mb-4" ref="probtext">The Problem</h3>
            <p class="text-lg leading-relaxed" ref="probsubtext">
              Coding can be time-consuming and challenging, especially when dealing with repetitive tasks or complex logic. Developers often spend hours debugging or searching for solutions.
            </p>
          </div>
  
          <!-- Solution Section -->
          <div class="mb-16">
            <h3 class="text-2xl font-semibold mb-4" ref="soltext">The Solution</h3>
            <p class="text-lg leading-relaxed" ref="solsubtext">
              Large Language Models (LLMs) like GPT-4 can revolutionize coding by providing intelligent code suggestions, automating repetitive tasks, and even debugging in real-time. Combined with Nuxt.js, developers can build faster, smarter, and more efficient web applications.
            </p>
          </div>
  
          <!-- How It Works Section -->
          <div class="mb-16">
            <h3 class="text-2xl font-semibold mb-4" ref="howtext">How It Works</h3>
            <p class="text-lg leading-relaxed" ref="howsubtext">
              Our project integrates LLMs directly into the Nuxt.js workflow. Whether you're generating components, optimizing code, or debugging, the AI is there to assist you every step of the way.
            </p>
          </div>
        </div>
      </section>
  
      <!-- Testimonials Section -->
      <section class="py-20 bg-gray-100">
        <div class="container mx-auto px-6">
          <h2 class="text-3xl font-bold text-center mb-12">What Developers Are Saying</h2>
          <div class="grid md:grid-cols-2 gap-8">
            <div class="bg-white p-8 rounded-lg shadow-md">
              <p class="text-lg italic mb-4">"This integration has saved me hours of work. The AI suggestions are spot-on!"</p>
              <p class="font-semibold">– Jane Doe, Full-Stack Developer</p>
            </div>
            <div class="bg-white p-8 rounded-lg shadow-md">
              <p class="text-lg italic mb-4">"Nuxt.js + LLMs is a game-changer for rapid prototyping. Highly recommend!"</p>
              <p class="font-semibold">– John Smith, Frontend Engineer</p>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Call-to-Action Section -->
      <section class="py-20 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center">
        <div class="container mx-auto px-6">
          <h2 class="text-3xl font-bold mb-4">Ready to Code Smarter?</h2>
          <p class="text-xl mb-8">Join the revolution and start building with LLMs and Nuxt.js today.</p>
          <a href="#" class="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-dodgeroll-gold transition duration-300">Get Started</a>
        </div>
      </section>
    </div>
  </template>
  