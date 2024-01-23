<script setup>
import { ref } from "vue";
import authDataService from '../../services/auth/authDataService'

const data = ref({
    "user":"",
    "email":"",
    "password":""
})

const handleForm = ()=>{
    authDataService.register(data.value)
}

</script>

<template>
    <section class="bg-gray-50 ">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <img src="../../assets/mimi-logo.png" alt="logo">
            <div class="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0  ">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                        registrar
                    </h1>
                    <form class="space-y-4 md:space-y-6" @submit.prevent="handleForm">
                        <div>
                            <label for="user" class="block mb-2 text-sm font-medium text-gray-900 ">Usuario</label>
                            <input type="text" name="user"
                                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                                placeholder="Usuario" v-model="data.user">
                        </div>
                        <div>
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">Email</label>
                            <input type="email" name="email"
                                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                                placeholder="nombre@example.com" v-model="data.email">
                        </div>
                        <div>
                            <label for="password"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contraseña</label>
                            <input type="password" name="password" id="password" placeholder="••••••••"
                                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                                v-model="data.password">
                        </div>

                        <button type="submit"
                            class="w-full border border-main-green text-white bg-main-green hover:bg-white hover:text-main-green font-medium rounded-lg text-sm px-5 py-2.5 text-center duration-200">Sign in</button>

                    </form>
                </div>
            </div>
        </div>
    </section>
</template>


