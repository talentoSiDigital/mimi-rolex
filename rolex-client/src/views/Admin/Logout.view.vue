<script setup>
import router from '../../router'
import { auth } from '../../store/auth.module'

const piniaStore = auth()

if (!piniaStore.$state.status.loggedIn) {
    router.push("/login")
}

function handleLogout() {
    piniaStore.logout()
    // router.push("/")
    window.location.href = '/';
}
handleLogout()

</script>

<template>
    <div class=" flex flex-col items-center justify-center h-[80vh]">
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
</template>
