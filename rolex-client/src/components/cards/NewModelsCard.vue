<script setup>
const {name} = defineProps(["name"])

const refLinks = {
    "cosmograph-daytona":"https://www.rolex.com/watches/new-watches/new-cosmograph-daytona?cmpid=www.mimijoyeria.com_watchgrid-new_watches_corner",
    "1908":"https://www.rolex.com/watches/new-watches/new-1908?cmpid=www.mimijoyeria.com_watchgrid-new_watches_corner",
    "yatch-master-42":"https://www.rolex.com/watches/new-watches/new-yacht-master-42?cmpid=www.mimijoyeria.com_watchgrid-new_watches_corner",
    "sky-dweller":"https://www.rolex.com/watches/new-watches/new-sky-dweller?cmpid=www.mimijoyeria.com_watchgrid-new_watches_corner",
    "gmt-master-ii":"https://www.rolex.com/watches/new-watches/new-gmt-master-ii?cmpid=www.mimijoyeria.com_watchgrid-new_watches_corner",
    "explorer-40":"https://www.rolex.com/watches/new-watches/new-explorer-40?cmpid=www.mimijoyeria.com_watchgrid-new_watches_corner",
    "oyster-perpetual":"https://www.rolex.com/watches/new-watches/new-oyster-perpetual?cmpid=www.mimijoyeria.com_watchgrid-new_watches_corner",
    "day-date":"https://www.rolex.com/watches/new-watches/new-day-date-36?cmpid=www.mimijoyeria.com_watchgrid-new_watches_corner"
}
</script>

<template>
    <div id="new-model-card" class="w-[95%]">
        <a :href="refLinks['cosmograph-daytona']" target="_blank">
            <img :src="'/src/assets/routes-assets/nuevos-modelos/' + name+ '-cover.webp'" :alt="`${name}-cover`" class="w-full">
        <h3 class="text-neutral-700 font-bold uppercase my-4 w-1/2">{{ name }}</h3>
        </a>
    </div>
</template>

<style scoped>

</style>

