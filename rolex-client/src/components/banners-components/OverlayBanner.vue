<script setup>
import storeCopy from '../../storeCopy.json';
const { type } = defineProps(["type"])

const items = {
    "tudor": "watch",
    "tissot": "watch",
    "longines": "watch",
    "victorinox": "watch",
    "tudor-landscape": "landscape",
    "tissot-landscape": "landscape",
    "longines-landscape": "landscape",
    "victorinox-landscape": "landscape",
    "nacimiento-y-bautizos": "otros",
    "compromiso-y-matrimonio": "otros",
    "graduacion": "otros",
    "regalos": "otros"
}


function checkType(type) {

    return items[type] == "watch" ? true : false
}

function parseString(str) {
    if (items[str] == "landscape") {

        return `COLECCIÓN ${str.replaceAll("-landscape", " ")}`
    } else {
        return str.replaceAll("-", " ")

    }
}


</script>

<template>
    <section>
        <div class="group relative h-fit overflow-hidden">
            <header class=" absolute z-10  bg-opaco w-full h-full flex flex-col justify-center items-center text-white">
                <h2 v-if="checkType(type)" class="uppercase text-3xl font-montserrat font-semibold drop-shadow-md">COLECCIÓN
                    {{ type }}</h2>
                <h2 v-else class="uppercase text-3xl font-montserrat font-semibold drop-shadow-md">{{ parseString(type) }}
                </h2>
            </header>
            <div>
                <img class="w-full" :src="'/src/assets/routes-assets/banners/banner-' + type + '.webp'" :alt="type">
            </div>


        </div>
        <div class="flex items-center justify-center py-20">
            <h2 class="w-3/4 text-center text-xl">
               {{ storeCopy[type] }}
            </h2>
        </div>
    </section>
</template>

<style scoped></style>

