<script setup>
import { Field, ErrorMessage } from "vee-validate";
const { name, type ,label} = defineProps(['name','type','label'])
</script>

<template>
    <div>
        <label :for="name" class="block mb-2 text-sm font-medium text-green-900 ">
           {{label}}
        </label>

        <Field :type="type" :name="name"
            class="bg-gray-50 border border-rolex-green text-green-900 sm:text-sm rounded-lg  block w-full p-2.5 " />
        <ErrorMessage :name="name" class="text-red-700" />
    </div>
</template>


<style scoped></style>
