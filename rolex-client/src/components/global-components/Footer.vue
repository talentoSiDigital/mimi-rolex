<script setup>
import { RouterLink } from "vue-router";


</script>

<template>


<!-- <footer class="bg-neutral-700 text-white">
    <div class="mx-auto w-full max-w-screen-xl  ">
      <div class="grid place-items-center grid-cols-1 gap-8 px-4 py-6 lg:py-8 md:grid-cols-3">
        <div>
            <h2 class="mb-6 text-sm font-semibold uppercase dark:text-white">Mimi Joyería</h2>
            <ul class=" font-light">
                <li class="mb-4">
                    <a href="#" class=" hover:underline">Inicio</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">Rolex</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">Tudor</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">Politica de privacidad</a>
                </li>
            </ul>
        </div>
        <div>
            <h2 class="mb-6 text-sm font-semibold  uppercase">Más Información</h2>
            <ul class="font-light">
                <li class="mb-4">
                    <a href="#" class="hover:underline">Relojería</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">Joyería</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">Matrimonio</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">Historia</a>
                </li>
            </ul>
        </div>
        
        <div>
            <ul class="font-light">
                <li class="mb-4">
                    <a href="#" class="hover:underline">Instagram</a>
                </li>
            </ul>
        </div>
    </div>
   
    </div>
</footer> -->



<!-- <RouterLink to="/">
</RouterLink> -->

<footer class="bg-main-green rounded-lg shadow">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="flex flex-col md:flex-row items-center justify-center md:justify-between">
            <RouterLink to="/" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img src="../../assets/mimi-logo.png" class="h-14" alt="Mimi joyeria Logo" />
            </RouterLink>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-800 sm:mb-0 ">
                <li>
                    <RouterLink to="/rolex" class="hover:underline me-4 md:me-6">
                        Rolex       
                    </RouterLink>
                </li>
                <li>
                    <RouterLink to="/tudor" class="hover:underline me-4 md:me-6">
                        Tudor
                    </RouterLink>
                </li>
                <li>
                    <RouterLink to="/relojeria" class="hover:underline me-4 md:me-6">
                        Relojería
                    </RouterLink>
                </li>
                <li>
                    <RouterLink to="/joyeria" class="hover:underline me-4 md:me-6">
                        Joyería
                    </RouterLink>
                </li>
                <li>
                    <RouterLink to="/sobre-mimi" class="hover:underline me-4 md:me-6">
                        Sobre Mimi
                    </RouterLink>
                </li>

                
                <li>
                    <RouterLink to="/" class="hover:underline ">
                        Contacto
                    </RouterLink>
                </li>

            </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <div class="flex flex-col md:flex-row items-center justify-center md:justify-between">
          <h3 class="text-sm text-gray-800 sm:text-center ">© 2023 Mimi Joyería™. Todos los derechos reservados.
          </h3>
          <div class="flex mt-4 sm:justify-center sm:mt-0">
              <a href="https://www.facebook.com/inversionesmimijoyeria/" class="text-gray-800 hover:text-gray-900 dark:hover:text-white">
                <font-awesome-icon :icon="['fab', 'facebook-f']" />
                  <span class="sr-only">Facebook</span>
              </a>
              <a href="https://www.instagram.com/mimijoyeria/?hl=es" class="text-gray-800 hover:text-gray-900 dark:hover:text-white ms-5">
                <font-awesome-icon :icon="['fab', 'instagram']" />
                  
                  <span class="sr-only">Instagram</span>
              </a>
              <a href="https://wa.link/4544sg" class="text-gray-800 hover:text-gray-900 dark:hover:text-white ms-5">
                <font-awesome-icon :icon="['fab', 'whatsapp']" />  
                <span class="sr-only">Whatsapp</span>
              </a>
            
          </div>
      </div>
    </div>
</footer>



</template>


