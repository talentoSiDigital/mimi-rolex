<script setup>

</script>

<template>
    <div class=" relative h-full ">
        <header
            class="border-2 border-main-green bg-neutral-100 rounded-md flex flex-col items-center p-4 relative z-10 -translate-x-1.5 -translate-y-1.5 h-full ">
            <slot></slot>
        </header>
        <span class="block w-full h-full absolute bg-main-green top-0 rounded-md  opacity-20"></span>
    </div>
</template>

<style scoped></style>
