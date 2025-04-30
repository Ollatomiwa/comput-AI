<script setup lang="ts">
import { ref, onMounted } from 'vue';

// Refs for elements
const herotext = ref<HTMLElement | null>(null);
const subtext = ref<HTMLElement | null>(null);


// Load GSAP only on the client
onMounted(async () => {
  if (process.client) {
    const gsap = (await import('gsap')).gsap;

    // Hero Text Animation
    if (herotext.value && subtext.value) {
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
    }

    
  }
});
</script>

<template>
  <div>
    <main>
      <section class="bg-[#070707ec] h-screen flex items-center">
        <div
          class="container flex flex-col lg:flex-row items-center lg:py-20 py-10 gap-10"
        >
          <div
            class="flex-1 sm:order-1 lg:order-1 text-center lg:text-left lg:ml-10 md:mr-6"
          >
            <h1
              class="text-4xl lg:text-6xl font-extrabold mb-6 text-white"
              ref="herotext"
            >
              Welcome to <span class="text-orange-500">COMPUT </span>
              <span class="text-dodgeroll-gold">AI</span>
            </h1>
            <p class="text-xl lg:text-2xl mb-8 text-white" ref="subtext">
              Create an AI Brain for your business based on a combination of all
              the available state-of-the-art LLMs with Comput AI.
            </p>
            <a
              href="/blog"
              class="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-dodgeroll-gold transition duration-900 inline-block"
            >
              Explore Blog
            </a>
          </div>
          <div class="flex-1 order-2 lg:order-2">
            <NuxtImg
              sizes="xs:100vw sm:900px"
              src="herogirl.png"
              format="webp"
              alt="Hero Page"
              densities="x1"
            />
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
