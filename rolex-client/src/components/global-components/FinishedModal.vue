<script setup>
import { RouterLink } from "vue-router";
import DashboardCards from '../cards/DashboardCards.vue'

const emit  = defineEmits(['activate-modal','go-back'])
defineProps({
    message:String,
    icon:Boolean
})

function close(){
    emit('go-back')
    emit('activate-modal')
}

</script>

<template>
    <section class=" z-50 fixed h-screen top-0 w-full flex  items-center justify-center ">
        <div class="h-fit w-full flex items-center justify-center">
            <DashboardCards class=" w-1/3">
                <div class=" w-full h-full  flex flex-col justify-between items-center">
    
                    <h2 class="text-3xl font-bold ">{{message}}</h2>
                    <font-awesome-icon v-if="icon" :icon="['fas', 'circle-check']" class="text-6xl text-main-green py-8"/>
                    <font-awesome-icon v-if="!icon" :icon="['fas', 'circle-xmark']" class="text-6xl text-red-500 py-8"/>
    
    
    
                    <button @click="close"
                        class="w-full border border-main-green text-white bg-main-green hover:bg-white hover:text-main-green font-medium rounded text-sm px-5 py-2.5 text-center duration-200 mt-0">
                        Cerrar
                    </button>
                </div>
    
    
            </DashboardCards>

        </div>


    </section>
</template>

<style scoped></style>
