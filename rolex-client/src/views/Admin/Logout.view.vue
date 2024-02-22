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
}
handleLogout()

</script>

<template>
    
</template>


