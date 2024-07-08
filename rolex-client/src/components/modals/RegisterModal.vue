<script setup>
import { RouterLink } from "vue-router";
import DashboardCards from '../cards/DashboardCards.vue'

const { emit } = defineEmits(['activate-modal'])

</script>

<template>
    <section class=" z-50 fixed h-screen top-0 w-full flex  items-center justify-center ">
        <div class="h-fit w-full flex items-center justify-center">
            <DashboardCards class=" w-1/3">

                <h2 class="text-2xl font-bold ">Registrate</h2>
                <h2 class="text-xl font-light ">Necesitas tener una cuenta para poder ordenar, registrate ahora o inicia
                    sesion para continuar</h2>
                <h2 class="text-xl font-light "></h2>


                <div class="flex flex-col w-full gap-2">
                    <RouterLink to="/registrar"
                        class="w-full border border-main-green text-white bg-main-green hover:bg-white hover:text-main-green font-medium rounded-lg text-sm px-5 py-2.5 text-center duration-200 ">
                        Registrar
                    </RouterLink>
                    <RouterLink to="/login"
                        class="w-full border border-main-green text-white bg-main-green hover:bg-white hover:text-main-green font-medium rounded-lg text-sm px-5 py-2.5 text-center duration-200 mt-0">
                        Iniciar sesion
                    </RouterLink>
                    <button @click="$emit('activate-modal')"
                        class="w-full border border-main-green text-white bg-main-green hover:bg-white hover:text-main-green font-medium rounded-lg text-sm px-5 py-2.5 text-center duration-200 mt-0">
                        Cancelar
                    </button>
                </div>

            </DashboardCards>
        </div>

    </section>
</template>

<style scoped></style>
