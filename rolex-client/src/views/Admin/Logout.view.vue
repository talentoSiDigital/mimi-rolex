<script setup>
import router from '../../router'
import { auth } from '../../store/auth.module'

const piniaStore = auth()

if (!piniaStore.$state.status.loggedIn) {
    router.push("/login")
}

function handleLogout() {
    piniaStore.logout()
    router.push("/")
    // window.location.href = 'http://www.google.com';
}
handleLogout()

</script>

<template>
    
</template>


