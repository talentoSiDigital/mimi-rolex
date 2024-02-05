<script setup>
import RolexFooter from '../../components/global-components/RolexFooter.vue'
import RolexNavbar from '../../components/global-components/RolexNavbar.vue'
import SliderNavigationRolex from '../../components/global-components/SliderNavigationRolex.vue'

import { ref, watch } from 'vue'




</script>

<template>
    <div id="rolex-main-content">
        <RolexNavbar />

        <slot name="content">


        </slot>
        <SliderNavigationRolex />
        <RolexFooter />



    </div>
</template>



