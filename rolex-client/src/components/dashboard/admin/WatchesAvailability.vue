<script setup>
import { ref } from 'vue';
import DashboardCard from './DashboardCard.vue';
import adminDataServices from '../../../services/adminDataServices';
import { auth } from '../../../store/auth.module';


const piniaStore = auth()
const loader = ref(false)
const list = ref("")
const watches = ref([])
const modal = defineModel()
const isReady = ref(false)
const searchResult = ref({
    existing: [],
    nonExisting: []
})
function checkUpdate() {
    loader.value = !loader.value
    list.value = list.value.replaceAll(' ','')
    watches.value = list.value.split('\n')
  
    adminDataServices.checkAvailability(watches.value,piniaStore.$state.user)
        .then((d) => {
            console.log(d.data);
            searchResult.value.existing = d.data.existing
            searchResult.value.nonExisting = d.data.nonExisting
            updateInventory(piniaStore.$state.user)
        })

}

function updateInventory(user) {
    adminDataServices.updateAvailability(searchResult.value.existing, user)
        .then(()=>{
            loader.value = false
            isReady.value = true
        })

}
</script>

<template>
    <section class="fixed h-screen w-full flex justify-center items-center z-99 top-0 bg-white/60">
        <DashboardCard class="w-1/3 max-h-[600px]">
            <template #title>
                <div class="flex justify-between">
                    <h2 class="text-4xl">Verificar inventario</h2>
                    <div class="relative">

                        <font-awesome-icon @click="modal = false" :icon="['fas', 'xmark']"
                            class="absolute right-3 top-3 cursor-pointer" />
                    </div>
                </div>
            </template>
            <template #content>
                <div v-if="loader" class="text-center h-[350px] place-content-center">
                    <font-awesome-icon :icon="['fas', 'spinner']" class="animate-spin text-9xl" />
                    <h2>Chequeando disponibilidad...</h2>
                </div>
                <div v-else-if="isReady == true">
                    <h2 v-if="searchResult.nonExisting.length == 0" class="text-2xl text-center py-12">Todos los relojes
                        se encuentran en la base de datos</h2>
                    <div v-else class="">
                        <div class="text-2xl">Relojes por agregar:</div>
                        <ul class="list-inside list-disc">
                            <li v-for="value in searchResult.nonExisting" :key="value">{{ value }}</li>
                        </ul>

                    </div>
                </div>

                <div v-else class="w-full">
                    <div class="flex flex-col gap-2">
                        <label for="watches" class="font-bold">Listado de relojes:</label>
                        <textarea v-model="list" name="watches" id="watches" placeholder="Insertar lista..."
                            class="min-h-[250px] h-[250px] max-h-[250px] p-1 border border-rolex-green rounded-sm bg-white"></textarea>
                        <button @click="checkUpdate"
                            class="bg-rolex-green  text-white rounded-sm w-full py-2 text-center border border-rolex-green duration-200 hover:bg-white hover:text-rolex-green">Verificar</button>
                    </div>

                </div>


            </template>
        </DashboardCard>
    </section>
</template>

<style scoped></style>
