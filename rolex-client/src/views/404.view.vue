<script setup>
import router from '../router'

function goBack() {
    router.go(-1)
}



</script>

<template>
    <main class="w-full flex flex-col justify-center items-center gap-6 my-4 h-fit py-4">
        <h1 class="text-3xl font-bold">404</h1>
        <h2 class="text-xl">Pagína no encontrada</h2>
        <img src="../assets/mimi-logo.png" alt="logo-mimi">
        <p>El servidor arrojó el error 404, el cual significa que la página a la cual intentas acceder no existe. </p>

        <button
            class="uppercase border border-black py-4 px-10 text-neutral-600 bg-white hover:text-white hover:bg-neutral-600 duration-100 "
            @click="goBack()">
            <font-awesome-icon :icon="['fas', 'arrow-left']" />
            <span class="pl-2">Volver</span>
        </button>
    </main>
</template>

