<script setup>
import { RouterLink } from "vue-router";
import DashboardCards from '../cards/DashboardCards.vue'


</script>

<template>
    <section class="bg-[rgba(0,0,0,0.8)] z-50 fixed h-screen top-0 w-full flex  items-center justify-center ">
        <DashboardCards class="h-1/2 w-1/3">

            <h2 class="text-2xl font-bold ">Registrate</h2>
            <h2 class="text-xl font-light ">Necesitas tener una cuenta para poder ordenar, registrate ahora o inicia sesion para continuar</h2>
            <h2 class="text-xl font-light "></h2>


            <RouterLink to="/login"
                class="w-full border border-main-green text-white bg-main-green hover:bg-white hover:text-main-green font-medium rounded-lg text-sm px-5 py-2.5 text-center duration-200 ">
                Registrar
            </RouterLink>
            <RouterLink to="/login"
                class="w-full border border-main-green text-white bg-main-green hover:bg-white hover:text-main-green font-medium rounded-lg text-sm px-5 py-2.5 text-center duration-200 mt-0">
                Iniciar sesion
            </RouterLink>

        </DashboardCards>
        <!-- <div class="flex flex-col bg-white h-1/2 w-1/3 p-4 rounded-lg items-center justify-center">
            <h2 class="text-2xl text-center">Necesitas tener una cuenta para poder ordenar</h2>
            <RouterLink to="/login"
                class="w-full border border-main-green text-white bg-main-green hover:bg-white hover:text-main-green font-medium rounded-lg text-sm px-5 py-2.5 text-center duration-200 ">
                Iniciar sesion
            </RouterLink>
            <p>Ya tienes una cuenta?</p>
            <RouterLink to="/login"
                class="w-full border border-main-green text-white bg-main-green hover:bg-white hover:text-main-green font-medium rounded-lg text-sm px-5 py-2.5 text-center duration-200 mt-0">
                Iniciar sesion</RouterLink>
        </div> -->

    </section>
</template>

<style scoped></style>
