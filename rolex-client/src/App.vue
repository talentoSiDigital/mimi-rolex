<script setup>
import { RouterView, useRoute } from 'vue-router'
import Navbar from './components/global-components/Navbar.vue'
import Footer from './components/global-components/Footer.vue'

const route = useRoute()

</script> 

<template>
  <div id="app-main">
    <Navbar/>
    
    <RouterView :key="route.fullPath"/>
    <Footer/>
    
  </div>
</template>

<style scoped></style>
