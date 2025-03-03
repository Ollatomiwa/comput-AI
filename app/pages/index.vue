<script setup lang="ts">

</script>
<template>
    <div>
      <main>
        <section class=" bg-[#070707ec]">
          <div
            class="container flex flex-col lg:flex-row items-center lg:py-20 py-10 gap-10"
          >
            <div class="flex-1 sm:order-1 lg:order-1 text-center lg:text-left lg:ml-10 md:mr-6 ">
              <h1 class="text-4xl lg:text-6xl font-extrabold mb-6 text-white">
                Welcome to <span class="text-orange-500">COMPUT </span>  <span class="text-dodgeroll-gold">AI</span>
              </h1>
              <p class="text-xl lg:text-2xl mb-8 text-white">
                Create an AI Brain for your business based on a combination of all the available state of the art LLMs with Comput AI
              </p>
              <a href="/blog" class="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-dodgeroll-gold transition duration-300">Explore Blog</a>
            </div>
            <div class="flex-1 order-2 lg:order-2">
              <NuxtImg
                sizes=" xs:100vw sm:900px "
                src="herogirl.png"
                format="webp"
                alt="Hero Page"
                densities="x1"
              />
            </div>
          </div>
        </section>
    <!-- ====== About ====== -->
        

      <!-- ====== END About ====== -->
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
  


