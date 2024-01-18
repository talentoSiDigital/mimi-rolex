<script setup>
import OverlaySection from '../../components/cards/OverlaySection.vue'
import PageBanner from '../../components/banners-components/PageBanner.vue'
</script>

<template>
    <div id="relojeria">
        <PageBanner type="relojeria"/>

        <OverlaySection img-src="relojeria/longines.webp" alt-text="reloj-longines-azul" type="normal">
            <template #title>
                COLECCIÓN LONGINES
            </template>
            <template #text>
                Longines, es una marca afianzada en la gran tradición relojera, goza de una historia larga y próspera. Una historia jalonada de innovaciones técnicas y estéticas.
            </template>
            <template #button>
                Ver más
            </template>
        </OverlaySection>

        <OverlaySection img-src="relojeria/tissot.webp" alt-text="reloj-tissot-rojo" type="reverse">
            <template #title>
                COLECCIÓN TISSOT
            </template>
            <template #text>
                Tissot es una marca de espíritu innovador tanto en su tecnología como en el diseño de sus relojes.
            </template>
            <template #button>
                Ver más
            </template>
        </OverlaySection>

        <OverlaySection img-src="relojeria/victorinox.webp" alt-text="reloj-victorinox-negro" type="normal">
            <template #title>
                COLECCIÓN VICTORINOX
            </template>
            <template #text>
                El legado de la marca Victorinox va más allá de sus productos, ya que representan calidad, funcionalidad, innovación y diseño icónico.            
            </template>
            <template #button>
                Ver más
            </template>
        </OverlaySection>
    </div>
</template>

<style scoped>

</style>


