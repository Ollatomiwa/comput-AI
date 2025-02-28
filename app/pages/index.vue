<script setup lang="ts">

</script>
<template>
    <div>
      <main>
        <section class="bg-['../../public/hero.jpg'] bg-cover bg-center bg-no-repeat">
          <div
            class="container flex flex-col lg:flex-row items-center py-20 gap-10"
          >
            <div class="flex-1 order-2 lg:order-1 text-center lg:text-left ml-14">
              <h1 class="text-4xl lg:text-6xl font-extrabold mb-6 text-balance">
                Welcome to <span class="text-dodgeroll-gold">Comput AI</span> 
              </h1>
              <p class="text-xl lg:text-2xl mb-8 text-balance">
                Create an AI Brain for your business based on a combination of all the available state of the art LLMs with Comput AI
              </p>
              <button
                class="px-4 py-2 text-white self-start bg-dodgeroll-gold rounded-md text-lg cursor-pointer"
              >
               Get Started
              </button>
            </div>
            <div class="flex-1 order-1 lg:order-2">
              <NuxtImg
                sizes="xs:100vw sm:667px "
                src="#"
                format="webp"
                alt="Hero Page"
                densities="x1"
              />
            </div>
          </div>
        </section>
      </main>
      
    </div>
    <!-- ====== footer ====== -->
  
  <footer class="bg-slate-50/80 pt-16">
      <div class="mx-auto max-w-7xl px-8 md:px-6">
  
          <!-- End footer top -->
  
          <!-- footer bottom -->
          <div class="flex flex-col justify-between border-t py-8 sm:flex-row">
              <p class="text-md sm:text-sm font-semibold text-dodgeroll-gold">© Copyright 2025 <a href="#" class=""> COMPUT AI.</a> All rights reserved.</p>
              <div class="mt-4 flex items-center space-x-4 sm:mt-0">
                  <a href="#">
                      <ion-icon name="logo-facebook" class="text-2xl text-dodgeroll-gold hover:text-blue-500 duration-300"></ion-icon>
                  </a>
                  <a href="#">
                      <ion-icon name="logo-twitter" class="text-2xl text-dodgeroll-gold hover:text-blue-500 duration-300"></ion-icon>
                  </a>
                  <a href="#">
                      <ion-icon name="logo-youtube" class="text-2xl text-dodgeroll-gold hover:text-blue-500 duration-300"></ion-icon>
                  </a>
              </div>
          </div>
          <!-- End footer bottom -->
  
      </div>
  </footer>
  
  <!-- ====== END footer ====== -->
  
  </template>
  


