<script setup>
import { computed } from 'vue';
import { RouterLink } from 'vue-router';
import DashboardCard from '../../../components/dashboard/admin/DashboardCard.vue';
import WatchListCard from '../../../components/dashboard/admin/WatchListCard.vue';
import GLOBAL_OBJECT from '../../../utils/globaj';




</script>

<template>
    <section>



        <section class="flex flex-col  w-full justify-center items-center">

            <DashboardCard class="col-span-2 w-11/12 shadow-xl">
                <template #title>
                    Relojes Tudor
                </template>
                <template #content>
                    <div class=" overflow-scroll h-[450px]">

                        <table class="w-full">
                            <thead>
                                <tr>
                                    <th class="h-10 border-2 border-white">Nombre</th>
                                    <th class="h-10 border-2 border-white w-[20%]">Serie</th>
                                    <th class="h-10 border-2 border-white w-[10%]">IMG</th>
                                    <th class="h-10 border-2 border-white w-[10%]">Precio</th>
                                    <th class="h-10 border-2 border-white w-[10%]">Disponible</th>
                                    <th class="h-10 border-2 border-white w-[20%]">Acciones</th>
                                </tr>
                            </thead>
                            <tbody>

                                <tr class="text-center" v-for="value in 10" :key="value">
                                    <td class="border-2 border-white ">Black Bay Chrono</td>
                                    <td class="border-2 border-white">m79360n-0013</td>
                                    <td class="border border-white flex justify-center"><img
                                            :src="`${GLOBAL_OBJECT.STORAGE_URL}/store-products/m79360n-0013-1.webp`"
                                            alt="" class="w-2/3"></td>
                                    <td class="border-2 border-white w-[10%]">$4,530</td>
                                    <td class="border-2 border-white w-[10%]">Disponible</td>
                                    <td class="border-2 border-white w-[20%]">
                                        <p class="underline">Desactivar</p>
                                        <p class="underline">Actualizar</p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>


                </template>

            </DashboardCard>
            <div class="w-11/12 flex gap-4 py-6">

                <DashboardCard class="w-1/2 shadow-xl">
                    <template #title>
                        Mensajes generales
                    </template>
                    <template #content>
                        <div class=" overflow-scroll h-[450px] space-y-4">
                            <div v-for="value in 10" class="border  border-main-green bg-white rounded-xl shadow p-3" :key="value">
                                <h2 class="font-bold">Manuel zorrilla</h2>
                                <p class="font-light">manuel@gmail.com (+555555555)</p>
                                <p class="font-light">04/04/2025</p>
                                <div class="border border-black h-16 w-full overflow-hidden hover:underline cursor-pointer relative">
                                    <p class="italic text-lg  w-full text-ellipsis ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet et doloremque voluptatibus porro perferendis libero? Accusantium labore, eaque quidem excepturi, quod cupiditate deserunt ea non iure natus corporis eligendi doloribus.</p>
                                    
                                </div>

                            </div>
                        </div>
                    </template>
                </DashboardCard>
                <DashboardCard class="w-1/2 shadow-xl">
                    <template #title>
                        Mensajes Rolex
                    </template>
                    <template #content>
                        asdasd
                    </template>


                </DashboardCard>
            </div>

        </section>

        <section class="fixed z-50 bottom-10 right-10">
            <DashboardCard class="w-fit">

                <template #content>
                    <div class="flex flex-col gap-2">
                        <h2 class="font-montserrat text-xl">Acciones rápidas</h2>
                        <RouterLink :to="{ name: 'agregar-reloj' }"
                            class="p-2 border-2 border-rolex-green  rounded-xl bg-rolex-green text-white duration-200 hover:bg-white hover:text-rolex-green  flex items-center gap-2 ">
                            <font-awesome-icon :icon="['fas', 'plus']" class="text-3xl" />
                            <p>Agregar reloj</p>
                        </RouterLink>
                        <RouterLink :to="{ name: 'agregar-reloj' }"
                            class="p-2 border-2 border-rolex-green  rounded-xl bg-rolex-green text-white duration-200 hover:bg-white hover:text-rolex-green  flex items-center gap-2 ">
                            <font-awesome-icon :icon="['fas', 'pen-to-square']" class="text-3xl" />
                            <p>Actualizar inventario</p>

                        </RouterLink>

                    </div>
                </template>
            </DashboardCard>
        </section>

    </section>
</template>

<style scoped></style>
