<script setup>
import { RouterView, useRoute } from 'vue-router'
import Navbar from './components/global-components/Navbar.vue'
import Footer from './components/global-components/Footer.vue'
import Cookies from './components/cards/Cookies.vue'
import ShoppingPop from './components/payout-components/ShoppingPop.vue';  

const route = useRoute()
console.log(route.path);

</script>   

<template>
  <div id="app-main">
    <Navbar/>
    
    <Cookies/>
    <ShoppingPop v-if="route.path !== '/carrito'"/>
    <RouterView :key="route.fullPath"/>
    <Footer/>

    
    
  </div>
</template>

<style scoped></style>
