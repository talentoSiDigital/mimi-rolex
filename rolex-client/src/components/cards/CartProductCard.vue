<script setup>
defineProps({
    product:Object
})

const {emit} = defineEmits(['delete-item'])



</script>

<template>
    <section class="flex items-center border rounded-md my-4 p-2 w-full bg-main-green text-white shadow-lg">
        <img :src="product.img" :alt="product.serie"
            class="w-1/5 border bg-white rounded-md">
        <header class=" h-24 w-1/3 ml-5 flex flex-col justify-center ">
            <h3 class="text-xl">{{ product.nombre }} {{ product.id }}</h3>
            <h3 class="text-lg">{{ product.coleccion }}</h3>
            <h3 class="text-xl font-bold">{{product.precio}}</h3>
        </header>

        <header class=" h-24 w-2/6 ml-5 flex flex-col justify-center items-end ">
            <button @click="$emit('delete-item', product.id)" class=" hover:scale-125 duration-200 ease-in-out">
                <font-awesome-icon :icon="['fas', 'trash-can']" class="text-4xl" />

            </button>
        </header>

    </section>
</template>
