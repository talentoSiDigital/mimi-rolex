<script setup>
import { storeToRefs } from 'pinia';
import { computed } from 'vue';
import { RouterView } from 'vue-router';
import { auth } from '../../store/auth.module';


const piniaStore = auth()
const userInfo = storeToRefs(piniaStore)

const isAdmin = computed(() => {
    return userInfo.user.value.roles[0] === 'ROLE_ADMIN'
})


if (isAdmin.value == false) {
    window.location.href = '/';
}





</script>

<template>
     <header class="py-2 border font-montserrat text-center">
            <h2 class="font-bold text-2xl">Bienvenido al panel de control</h2>
            <p class="text-xl">Que deseas hacer?</p>
        </header>
    <main class="flex">

        
        <router-view />
    </main>

</template>

<style scoped></style>
