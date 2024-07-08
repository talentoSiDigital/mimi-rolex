<script setup>
defineProps({
    color: String
})
</script>

<template>
    <section class="flex justify-center" :class="color">
        <header
            class="flex flex-col md:flex-row gap-8 font-helvetica font-bold justify-between items-center md:items-start  text-rolex-brown h-fit py-24 md:py-36 md:w-10/12"
            >
            <div class="w-10/12 md:w-1/2">
                <p class="text-xl">
                    <slot name="sub">

                    </slot>
                </p>
                <h1 class="text-3xl md:text-5xl">
                    <slot name="title">

                    </slot>

                </h1>
            </div>
            <p class="w-10/12 text-xl  md:w-2/5 text-justify md:text-left font-normal">
                <slot name="text">

                </slot>


            </p>
        </header>
    </section>
</template>
