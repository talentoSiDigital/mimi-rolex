<script setup>
import OverlaySection from '../../components/cards/OverlaySection.vue'
import PageBanner from '../../components/banners-components/PageBanner.vue'
</script>

<template>
    <div id="relojeria">
        <PageBanner type="relojeria"/>

        <OverlaySection img-src="relojeria/longines" alt-text="reloj-longines-azul" type="normal">
            <template #title>
                COLECCIÓN LONGINES
            </template>
            <template #text>
                Longines, es una marca afianzada en la gran tradición relojera, goza de una historia larga y próspera. Una historia jalonada de innovaciones técnicas y estéticas.
            </template>
            <template #button>
                <router-link to="/relojeria/longines" class="mt-10 bg-[#818a91] text-lg text-white py-3 px-10 shadow-lg rounded-sm hover:scale-110 duration-200">
                    Ver más
                </router-link>
            </template>
        </OverlaySection>

     

        <OverlaySection img-src="relojeria/victorinox" alt-text="reloj-victorinox-negro" type="reverse">
            <template #title>
                COLECCIÓN VICTORINOX
            </template>
            <template #text>
                El legado de la marca Victorinox va más allá de sus productos, ya que representan calidad, funcionalidad, innovación y diseño icónico.            
            </template>
            <template #button>
                <router-link to="/relojeria/victorinox" class="mt-10 bg-[#818a91] text-lg text-white py-3 px-10 shadow-lg rounded-sm hover:scale-110 duration-200">
                    Ver más
                </router-link>
            </template>
        </OverlaySection>
    </div>
</template>

<style scoped>

</style>


