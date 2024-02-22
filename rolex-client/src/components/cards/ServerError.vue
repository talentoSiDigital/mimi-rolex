<script setup>
import router from '../../router'

function reload() {
    router.go()
}



</script>

<template>
    <main class="w-full flex flex-col justify-center items-center gap-6 my-4 h-fit py-4">
        <h1 class="text-3xl font-bold">500</h1>
        <h2 class="text-xl">Error en busqueda</h2>
        <img src="/assets/mimi-logo.png" alt="logo-mimi">
        <p>El servidor arrojó el error 500, el cual significa que la página a la cual intentas acceder, tuvó un error al cargar. </p>
        <p>Pulsa el botón para intentarlo de nuevo </p>

        <button
            class="uppercase border border-black py-4 px-10 text-neutral-600 bg-white hover:text-white hover:bg-neutral-600 duration-100 group "
            @click="reload()">
            <font-awesome-icon :icon="['fas', 'arrows-rotate']" class="group-hover:animate-spin"/>
            <span class="pl-2">Intentar de nuevo</span>
        </button>
    </main>
</template>

