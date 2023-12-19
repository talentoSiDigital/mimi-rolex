<script setup>

import RolexTemplate from '../Rolex/RolexTemplate.view.vue'

import RolexNavbar from '../../components/global-components/RolexNavbar.vue'
import PageBanner from '../../components/banners-components/PageBanner.vue'
import RolexHeader from '../../components/RolexHeader.vue'
import NewModelsCard from '../../components/cards/NewModelsCard.vue'
</script>

<template>
    <div id="new-models">
        <RolexTemplate>
            <template #content>

                <PageBanner type="nuevos-modelos" />
                <RolexHeader>
                    <template #sub>
                        
                    </template>
                    <template #title>
                        

                    </template>
                    <template #text>
                        
                    </template>

                </RolexHeader>

                <div id="footer-banner">
                    <img src="../../assets/routes-assets/banners/banner-2-nuevos-modelos.png" alt="banner-rolex-oro" class="w-full">
                </div>


            </template>
        </RolexTemplate>

    </div>
</template>
