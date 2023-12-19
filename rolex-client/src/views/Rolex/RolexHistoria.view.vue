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

            </template>
        </RolexTemplate>

    </div>
</template>
