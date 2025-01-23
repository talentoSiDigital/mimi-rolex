<script setup>
import { useRoute } from "vue-router";
import RolexFooter from "../../components/navigation-components/RolexFooter.vue";
import RolexNavbar from "../../components/navigation-components/RolexNavbar.vue";
import SliderNavigationRolex from "../../components/navigation-components/SliderNavigationRolex.vue";
import BreadCrumb from "../../components/navigation-components/BreadCrumb.vue";
</script>

<template>
  <div id="rolex-main-content">
    <RolexNavbar />
    <BreadCrumb v-if="useRoute().name != 'busqueda'" />

    <slot name="content"></slot>

    <SliderNavigationRolex />
    <RolexFooter />
  </div>
</template>



