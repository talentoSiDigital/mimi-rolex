<script setup>
import { storeToRefs } from 'pinia';
import { computed, ref } from "vue";
import { RouterView } from 'vue-router';
import PageBanner from '../../components/banners-components/PageBanner.vue';
import router from '../../router';
import { auth } from '../../store/auth.module';
const piniaStore = auth()
const isUserLogged = storeToRefs(piniaStore)


if (!isUserLogged.status.value.loggedIn) {
    router.push("/")
}
const logginOut = ref(false)

const currentUser = computed(() => {
    return isUserLogged.user.value

})




function handleLogout() {
    logginOut.value = true
    piniaStore.logout()
    router.push("/")
}



// handleLogout()



</script>

<template>
    <main class="bg-neutral-100" v-if="isUserLogged.status.value.loggedIn">

        <div v-if="!logginOut">
            <PageBanner type="joyeria" />

            <RouterView>

            </RouterView>

            <div class="flex items-center justify-center py-8">
                <a href="/logout" 
                    class="w-1/3 border border-main-green text-black bg-main-green hover:bg-white  font-medium rounded-lg text-sm px-5 py-2.5 text-center duration-200 mt-0">
                    Cerrar Sesión
                </a>
                <!-- <button @click="handleLogout"
                    class="w-1/3 border border-main-green text-black bg-main-green hover:bg-white  font-medium rounded-lg text-sm px-5 py-2.5 text-center duration-200 mt-0">
                    Cerrar Sesión
                </button> -->
            </div>
        </div>

        
    </main>
</template>

<style scoped></style>

