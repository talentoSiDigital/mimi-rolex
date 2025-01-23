<script setup>
import { RouterLink } from "vue-router";


</script>

<template>



<footer class="bg-rolex-gradient border-t shadow relative z-30">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="flex flex-col md:flex-row items-center justify-center md:justify-between">
            <RouterLink to="/" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img src="/assets/mimi-logo-full-white.svg" class="h-14" alt="Mimi joyeria Logo" />
            </RouterLink>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0 ">
                <li>
                    <RouterLink to="/rolex/descubre-rolex" class="hover:underline me-4 md:me-6">
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
                    <RouterLink to="/contacto" class="hover:underline ">
                        Contacto
                    </RouterLink>
                </li>

            </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <div class="flex flex-col md:flex-row items-center justify-center md:justify-between">
          <h3 class="text-sm text-white sm:text-center ">© 2023 Mimi Joyería™. Todos los derechos reservados.
          </h3>
          <div class="flex mt-4 sm:justify-center sm:mt-0">
              <a href="https://www.facebook.com/inversionesmimijoyeria/" class="text-white hover:text-gray-900 ">
                <font-awesome-icon :icon="['fab', 'facebook-f']" />
                  <span class="sr-only">Facebook</span>
              </a>
              <a href="https://www.instagram.com/mimijoyeria/?hl=es" class="text-white hover:text-gray-900  ms-5">
                <font-awesome-icon :icon="['fab', 'instagram']" />
                  
                  <span class="sr-only">Instagram</span>
              </a>
              <a href="https://wa.me/584143092501" target="_blank" class="text-white hover:text-gray-900  ms-5">
                <font-awesome-icon :icon="['fab', 'whatsapp']" />  
                <span class="sr-only">Whatsapp</span>
              </a>
            
          </div>
      </div>
    </div>
</footer>



</template>


