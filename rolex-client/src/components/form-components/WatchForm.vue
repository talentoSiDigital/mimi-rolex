<script setup>
import DashboardCard from '../dashboard/admin/DashboardCard.vue';

</script>

<template>
    <section class="fixed h-screen w-full flex justify-center items-center z-[99] top-0 bg-white">
        <DashboardCard class="w-1/3 max-h-[600px]">
            <template #title>
                <div class="flex justify-between">

                    <font-awesome-icon @click="modal = false" :icon="['fas', 'xmark']"
                        class="absolute right-3 top-3 cursor-pointer" />
                    <h2 class="text-4xl">Agregar reloj</h2>
                </div>
            </template>
            <template #content>

                <div class="w-full">
                    <div class="flex flex-col gap-2">
                        <label for="watches" class="font-bold">Listado de relojes:</label>
                        <textarea v-model="list" name="watches" id="watches" placeholder="Insertar lista..."
                            class="min-h-[250px] h-[250px] max-h-[250px] p-1 border border-rolex-green rounded"></textarea>
                        <button @click="checkUpdate"
                            class="bg-rolex-green  text-white rounded w-full py-2 text-center border border-rolex-green duration-200 hover:bg-white hover:text-rolex-green">Verificar</button>
                    </div>

                </div>


            </template>
        </DashboardCard>
    </section>
</template>

<style scoped></style>