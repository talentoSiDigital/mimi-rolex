<script setup>
import { RouterLink } from 'vue-router';
defineProps({
    link:String
})
</script>

<template>
    <router-link :to="link" class="bg-rolex-green text-white border w-fit border-rolex-green px-4 py-2 font-helvetica font-bold  rounded-3xl hover:bg-white hover:text-rolex-green duration-200">
        <slot></slot>
    </router-link>
</template>