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


const currentUser = computed(() => {
    return piniaStore.$state.user
})


function handleLogout() {
    piniaStore.logout()
}
// handleLogout()



</script>

<template>
    <main class="bg-neutral-100">
        <div id="debugger">
            {{ currentUser }}

        </div>
        <PageBanner type="joyeria" />
        

        <RouterView>
            
        </RouterView>





        <div class="flex items-center justify-center py-8">
            <RouterLink to="/logout"
                class="w-1/3 border border-main-green text-black bg-main-green hover:bg-white  font-medium rounded-lg text-sm px-5 py-2.5 text-center duration-200 mt-0">
                Cerrar Sesión
            </RouterLink>
        </div>
    </main>
</template>

<style scoped></style>

