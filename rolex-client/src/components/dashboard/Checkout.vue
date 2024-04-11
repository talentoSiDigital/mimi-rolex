<script setup>
import { RouterLink } from 'vue-router';

</script>

<template>

    <main>
        <div class=" flex  items-center justify-center gap-24 h-[80vh]">
            <div class="flex flex-col items-center">
                <img src="/assets/mimi-logo.png" alt="logo-mimi">
            </div>
            <div class="w-1/2 flex flex-col items-center">
                <h2 class="text-3xl text-center font-bold">Tu compra ha sido registrada exitosamente</h2>
                <h2 class="text-xl">Toda la información referente a la misma, asi como los pasos a seguir para retirar  ha sido enviada a tu cuenta de correo</h2>
                
                <RouterLink to="/"
                    class="w-full border border-main-green text-white bg-main-green hover:bg-white hover:text-main-green font-medium rounded-lg text-sm px-5 py-2.5 text-center duration-200 mt-4">
                    Volver al inicio
                </RouterLink>

            </div>
        </div>
    </main>

</template>

<style scoped></style>
