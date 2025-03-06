<script setup lang="ts">
import { ref } from 'vue';

const isMobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};
//to close button menu if a link is clicked
const closeMobileMenu = () => {
  isMobileMenuOpen.value  = false;
};
</script>

<template>
  <header class="py-4 border-6 bg-[#070707ec]">
    <nav
      class="block w-full max-w-screen-xl px-4 py-2 mx-auto  bg-opacity-90 sticky top-5 shadow lg:px-8 lg:py-3 backdrop-blur-lg backdrop-saturate-150 z-[9]"
    >
      <div class="container flex flex-wrap items-center justify-between mx-auto text-slate-800">
        <a href="#" class="mr-4 block cursor-pointer py-1.5 text-xl font-extrabold text-orange-500">
          Comput <span class="text-dodgeroll-gold">AI</span> 
        </a>

        <!-- Desktop Menu -->
        <ul class="hidden lg:flex lg:flex-row lg:gap-6">
          <li class="p-2 text-sm text-white font-bold">
            <NuxtLink to="/" class="flex items-center">Home</NuxtLink>
          </li>
          <li class="p-2 text-sm text-white font-bold">
            <NuxtLink to="/blog" class="flex items-center">Blog</NuxtLink>
          </li>
          <li class="p-2 text-sm text-white font-bold">
            <NuxtLink to="/about" class="flex items-center">About</NuxtLink>
          </li>
          <li class="p-2 text-sm text-white font-bold">
            <NuxtLink to="#contact" class="flex items-center">Contact</NuxtLink>
          </li>
        </ul>

        <!-- Mobile Menu Button -->
        <button @click="toggleMobileMenu"
          class="bg-orange-500 relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle text-xs font-medium uppercase text-inherit transition-all lg:hidden"
          type="button"
        >
          <span class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </span>
        </button>
      </div>

      <!-- Mobile Menu Positioned Under the Button -->
      <div 
        v-show="isMobileMenuOpen" 
        class="   bg-[#070707ec] shadow-md rounded-md py-4 items-right lg:hidden"
      >
        <ul class="flex flex-col gap-2">
          <li class="p-2 text-sm text-white font-bold">
            <NuxtLink @click="closeMobileMenu" to="/" class="flex items-center">Home</NuxtLink>
          </li>
          <li class="p-2 text-sm text-white font-bold">
            <NuxtLink @click="closeMobileMenu" to="/about" class="flex items-center">About</NuxtLink>
          </li>
          <li class="p-2 text-sm text-white font-bold">
            <NuxtLink @click="closeMobileMenu" to="#contact" class="flex items-center">Contact</NuxtLink>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

