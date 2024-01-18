<script setup>
const {imgSrc, altText,type} = defineProps(['imgSrc','altText','type'])
</script>

<template>
    <section :class="[type == 'reverse'? 'md:flex-row-reverse':'md:flex-row']" class="flex flex-col  m-10">
        <img :src="'/src/assets/routes-assets/'+ imgSrc" :alt="altText"
            class="w-full md:w-1/2 ">
        <header class="flex flex-col justify-center items-start p-10 md:p-20 w-full">

            <slot name="optional">

            </slot>
            <div id="textarea">
                <h1 class="text-3xl pb-4 text-center md:text-left ">
                    <slot name="title">


                    </slot>
                </h1>
                <p class="font-normal text-center md:text-left ">
                    <slot name="text">


                    </slot>

                </p>
            </div>
        </header>

        
     

    </section>
</template>

