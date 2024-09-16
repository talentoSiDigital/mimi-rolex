
<template>

    <footer class="bg-main-green rounded-lg shadow relative z-40">
        <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
            <div class="flex flex-col md:flex-row items-center justify-center md:justify-between">
                <router-link to="/" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                    <img src="/assets/mimi-logo.png" class="h-14" alt="Mimi joyeria Logo" />
                </router-link>
                <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-800 sm:mb-0 ">
                    <li>
                        <router-link to="/rolex" class="hover:underline me-4 md:me-6">
                            Rolex
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/tudor" class="hover:underline me-4 md:me-6">
                            Tudor
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/relojeria" class="hover:underline me-4 md:me-6">
                            Relojería
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/joyeria" class="hover:underline me-4 md:me-6">
                            Joyería
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/sobre-mimi" class="hover:underline me-4 md:me-6">
                            Sobre Mimi
                        </router-link>
                    </li>


                    <li>
                        <router-link to="/contacto" class="hover:underline ">
                            Contacto
                        </router-link>
                    </li>

                </ul>
            </div>
            <hr class="my-6 border-gray-200 sm:mx-auto lg:my-8" />
            <div class="flex flex-col md:flex-row items-center justify-center md:justify-between">
                <h3 class="text-sm text-gray-800 sm:text-center ">© 2023 Mimi Joyería™. Todos los derechos reservados.
                </h3>
                <div class="flex mt-4 sm:justify-center sm:mt-0">
                    <a href="https://www.facebook.com/inversionesmimijoyeria/"
                        class="text-gray-800 hover:text-gray-900 dark:hover:text-white">
                        <font-awesome-icon :icon="['fab', 'facebook-f']" />
                        <span class="sr-only">Facebook</span>
                    </a>
                    <a href="https://www.instagram.com/mimijoyeria/?hl=es"
                        class="text-gray-800 hover:text-gray-900 dark:hover:text-white ms-5">
                        <font-awesome-icon :icon="['fab', 'instagram']" />

                        <span class="sr-only">Instagram</span>
                    </a>
                    <a href="https://wa.link/4544sg"
                        class="text-gray-800 hover:text-gray-900 dark:hover:text-white ms-5">
                        <font-awesome-icon :icon="['fab', 'whatsapp']" />
                        <span class="sr-only">Whatsapp</span>
                    </a>

                </div>
            </div>
        </div>
    </footer>



</template>
