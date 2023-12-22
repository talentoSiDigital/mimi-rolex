<script setup>
import OverlaySection from '../components/cards/OverlaySection.vue'
import PageBanner from '../components/banners-components/PageBanner.vue'
</script>

<template>
    <div id="joyeria">
        <PageBanner type="joyeria"/>

        <OverlaySection img-src="joyeria/joyeria-1.webp" alt-text="nacimiento" type="normal">
            <template #title>
                NACIMIENTO
            </template>
            <template #text>
                Nos sumamos a la enorme felicidad de recibir una nueva vida y te acompañamos en este momento tan especial.
            </template>
            <template #button>
                Descubrir
            </template>
        </OverlaySection>

        <OverlaySection img-src="joyeria/joyeria-2.webp" alt-text="blanco" type="reverse">
            <template #title>
                BAUTIZO
            </template>
            <template #text>
                Los momentos especiales los celebramos con detalles únicos como su ternura.
            </template>
            <template #button>
                Descubrir
            </template>
        </OverlaySection>



        <OverlaySection img-src="joyeria/joyeria-3.webp" alt-text="graduacion" type="normal">
            <template #title>
                GRADUACIÓN
            </template>
            <template #text>
                El éxito en la vida no se mide por lo que logras, sino por los obstáculos que superas, es por eso que queremos acompañarte en este momento tan valioso.
            </template>
            <template #button>
                Descubrir
            </template>
        </OverlaySection>

        <OverlaySection img-src="joyeria/joyeria-4.webp" alt-text="compromiso" type="reverse">
            <template #title>
                COMPROMISO
            </template>
            <template #text>
                El inicio de una nueva etapa juntos.
            </template>
            <template #button>
                Descubrir
            </template>
        </OverlaySection>

        <OverlaySection img-src="joyeria/joyeria-5.webp" alt-text="matrimonio" type="normal">
            <template #title>
                MATRIMONIO
            </template>
            <template #text>
                Sella tu amor para toda la vida con prendas únicas especialmente diseñadas para ti.
            </template>
            <template #button>
                Descubrir
            </template>
        </OverlaySection>

        <OverlaySection img-src="joyeria/joyeria-6.webp" alt-text="regalos" type="reverse">
            <template #title>
                REGALOS
            </template>
            <template #text>
                Complementa tu brillo con joyas únicas y especiales que resalten tu lado más elegante.
            </template>
            <template #button>
                Descubrir
            </template>
        </OverlaySection>

       
    </div>
</template>

<style scoped>

</style>


