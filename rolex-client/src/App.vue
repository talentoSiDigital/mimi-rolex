<script setup>
import { RouterView, useRoute } from 'vue-router'
import Navbar from './components/global-components/Navbar.vue'
import Footer from './components/global-components/Footer.vue'
import Cookies from './components/cards/Cookies.vue'
import ShoppingPop from './components/payout-components/ShoppingPop.vue';  
import { storeToRefs } from 'pinia';
import { auth } from './store/auth.module';
const piniaStore = auth()
const isUserLogged = storeToRefs(piniaStore)
console.log();
const route = useRoute()




</script>   

<template>
  <div id="app-main">
    <Navbar/>
    
    <Cookies/>
    <ShoppingPop v-if="route.path !== '/carrito' && isUserLogged.status.value.loggedIn"/>
    <RouterView :key="route.fullPath"/>
    <Footer/>

    
    
  </div>
</template>

<style scoped></style>
