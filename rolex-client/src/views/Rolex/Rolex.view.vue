<script setup>
import RolexNavbar from '../../components/global-components/RolexNavbar.vue'

import PageBanner from '../../components/banners-components/PageBanner.vue'
import RolexHeader from '../../components/RolexHeader.vue'


</script>

<template>
    <div id="rolex-main-content">
        <RolexNavbar />
        <PageBanner type="rolex" />



        <RolexHeader>
            <template #sub>
                Bienvenido a Mimi Joyería
            </template>
            <template #title>
                DISTRIBUIDOR OFICIAL DE  <br/> EN CARACAS
            </template>
            <template #text>
                Los relojes Rolex son creados a partir de las mejores materias primas y montados con escrupulosa minuciosidad. Cada componente es diseñado, desarrollado y fabricado, cumpliendo los estándares más estrictos.
            </template>

        </RolexHeader>


    </div>
</template>

<style scoped></style>

