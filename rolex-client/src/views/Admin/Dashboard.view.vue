<script setup>
import { ref, computed } from "vue";
import router from '../../router'
import { auth } from '../../store/auth.module'
import { RouterLink, RouterView } from 'vue-router'
import PageBanner from '../../components/banners-components/PageBanner.vue'
const piniaStore = auth()

if (!piniaStore.$state.status.loggedIn) {
    router.push("/login")
}

const logginOut = ref(false)

const currentUser = computed(() => {
    return piniaStore.$state.user
})


function handleLogout() {
    logginOut.value = true
    piniaStore.logout()
    router.push("/")

}
// handleLogout()



</script>

<template>
    <main class="bg-neutral-100">
    
        <div v-if="!logginOut">
            <PageBanner type="joyeria" />

            <RouterView>

            </RouterView>

            <div class="flex items-center justify-center py-8">
                <button @click="handleLogout"
                    class="w-1/3 border border-main-green text-black bg-main-green hover:bg-white  font-medium rounded-lg text-sm px-5 py-2.5 text-center duration-200 mt-0">
                    Cerrar Sesión
                </button>
            </div>
        </div>

        <div v-else class=" flex flex-col items-center justify-center h-[80vh]">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                style="background: none; display: block; shape-rendering: auto;" width="200px" height="200px"
                viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                <circle cx="50" cy="50" r="37" stroke-width="8" stroke="#adbaad"
                    stroke-dasharray="58.119464091411174 58.119464091411174" fill="none" stroke-linecap="round">
                    <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite"
                        dur="2.272727272727273s" keyTimes="0;1" values="0 50 50;360 50 50"></animateTransform>
                </circle>
            </svg>
            <h2 class="text-3xl">Cerrando sesión...</h2>
        </div>
    </main>
</template>

<style scoped></style>

