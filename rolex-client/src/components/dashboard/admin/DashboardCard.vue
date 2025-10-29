<script setup>
import { useSlots } from 'vue';
import { RouterLink } from 'vue-router';
const slots = useSlots()
const hasSlot = (name) => {
    return !!slots[name];
}
</script>

<template>
    <div class="border-2 border-main-green bg-dashboard-green text-rolex-green rounded-xl py-3 px-3 ">
        <div class="font-bold text-2xl ">
            <slot name="title"></slot>
        </div>
        <hr v-if="hasSlot('title')" class="border-white my-2">
        
        <slot name="content"></slot>
        
        <hr v-if="hasSlot('button')" class="border-white my-2">


        <div v-if="hasSlot('button')" class="flex justify-end">
            <slot name="button"></slot>

        </div>
    </div>
</template>

<style scoped></style>
