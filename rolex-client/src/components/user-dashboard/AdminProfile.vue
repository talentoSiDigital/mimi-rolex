<script setup>
import { ref, computed } from "vue";
import { auth } from '../../store/auth.module'
import DashboardCards from '../cards/DashboardCards.vue'
import StatsTable from '../StatsTable.vue'
import StatsInfo from '../StatsInfo.vue'

import mailDataService from '../../services/mailDataService'
import userService from '../../services/auth/userService'
import { useAsyncState } from "@vueuse/core";

const { isLoading, state, isReady, execute } = useAsyncState(
    userService.getUserListing()
        .then(d => {
            return d.data
        })

)

</script>

<template>
    <div class="flex flex-col items-center justify-center">
       

        <section class="flex w-full  justify-center my-2">
            <div class="flex w-10/12 h-96  justify-around gap-4 items-center ">
                <DashboardCards class="w-1/3 ">
                    <h2 class="text-2xl font-semibold">Usuarios Registrados</h2>
                    <div v-if="state">
                        <ul v-for="item in state.user" :key="item" class="list-disc">
                            <li class="flex gap-12 items-center justify-between w-full">
                                <p class="w-full">@{{ item.username }}</p>

                                <font-awesome-icon :icon="['fas', 'pen-to-square']"
                                    class="text-neutral-600 hover:text-neutral-900 cursor-pointer " />
                            </li>

                        </ul>

                    </div>

                </DashboardCards>

                <section class="flex flex-col h-full gap-4 w-1/3 ">
                    <DashboardCards>
                        <h2 class="text-2xl font-semibold">Actualizar Banner</h2>
                        <p class="text-sm text-center py-5">Actualización de las imagenes del banner principal
                            <br>de acuerdo a las solicitudes de Rolex y otros fabricantes
                        </p>

                        <RouterLink to="/dashboard/banner-edit"
                            class="w-full border border-main-green text-black bg-main-green hover:bg-white  font-medium rounded-lg text-sm px-5 py-2.5 text-center duration-200 mt-0">

                            <p>Editar banner principal</p>
                        </RouterLink>
                    </DashboardCards>
                    <DashboardCards>
                        <h2 class="text-2xl font-semibold">Actualizar Existencias </h2>
                        <p class="text-sm text-center py-3">Actualización de los relojes Tudor, en cuánto a cantidad
                            y datos especificos de los relojes ya registrados </p>

                        <RouterLink to="/"
                            class="w-full border border-main-green text-black bg-main-green hover:bg-white  font-medium rounded-lg text-sm px-5 py-2.5 text-center duration-200 mt-0">

                            <p>Editar Relojes</p>
                        </RouterLink>
                    </DashboardCards>
                </section>

                <DashboardCards class="w-1/3">
                    <StatsInfo />
                </DashboardCards>

            </div>
        </section>

        <section class="flex w-full h-96 justify-center my-2">
            <div class="flex w-10/12 h-full justify-center items-center gap-4 ">
                <DashboardCards class="w-3/5">
                    <h2 class="text-2xl font-semibold ">Compras Registradas</h2>
                    <StatsTable>

                    </StatsTable>

                </DashboardCards>

                <section class="flex flex-col h-full gap-4  w-2/5">
                    <DashboardCards>
                        <h2 class="text-2xl font-semibold">Agregar Joyeria</h2>
                        <p class="text-sm text-center py-5">Agrega un nueva pieza de joyeria al inventario
                        </p>

                        <RouterLink to="/dashboard/agregar-joyeria"
                            class="w-full border border-main-green text-black bg-main-green hover:bg-white  font-medium rounded-lg text-sm px-5 py-2.5 text-center duration-200 mt-0">

                            <p>Agregar Pieza</p>
                        </RouterLink>
                    </DashboardCards>
                    <DashboardCards>
                        <h2 class="text-2xl font-semibold">Agregar reloj</h2>
                        <p class="text-sm text-center py-5">Agrega un nuevo modelo de relojeria al inventario
                        </p>

                        <RouterLink to="/dashboard/agregar-relojeria"
                            class="w-full border border-main-green text-black bg-main-green hover:bg-white  font-medium rounded-lg text-sm px-5 py-2.5 text-center duration-200 mt-0">
                            <p>Agregar Pieza</p>

                        </RouterLink>
                    </DashboardCards>
                </section>



            </div>
        </section>

    
    </div>
</template>

<style scoped></style>
