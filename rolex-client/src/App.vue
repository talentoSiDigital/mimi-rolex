<script setup>
import { useWindowScroll } from "@vueuse/core";
import { storeToRefs } from "pinia";
import { computed } from 'vue';
import { RouterView, useRoute } from "vue-router";
import Cookies from "./components/cards/Cookies.vue";
import Footer from './components/navigation-components/Footer.vue';
import Navbar from './components/navigation-components/Navbar.vue';
import ShoppingPop from "./components/payout-components/ShoppingPop.vue";
import { auth } from "./store/auth.module";

const route = useRoute()
const { y} = useWindowScroll()
const checkLoad = computed(()=>{
  return y.value > 800? true : false
})


const piniaStore = auth();
const isUserLogged = storeToRefs(piniaStore);


</script>   

<template>
  <div id="app-main">
    <Navbar />

    <Cookies />
    <ShoppingPop
      v-if="route.path !== '/carrito' && isUserLogged.status.value.loggedIn"
    />
    <RouterView :key="route.fullPath" />
    <div v-if="!checkLoad && route.path == '/'" class="h-[200vh] block "></div>

    <Footer />
  </div>
</template>

<style scoped></style>
