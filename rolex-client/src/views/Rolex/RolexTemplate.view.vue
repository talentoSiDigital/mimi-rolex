<script setup>
import RolexNavbar from '../../components/global-components/RolexNavbar.vue'

import SliderNavigationRolex from '../../components/global-components/SliderNavigationRolex.vue'
import RolexFooter from '../../components/global-components/RolexFooter.vue'  


</script>

<template>
    <div id="rolex-main-content">
        <RolexNavbar />

        <slot name="content">


        </slot>
        <SliderNavigationRolex  /> 
        


    </div>
</template>

<style scoped></style>

