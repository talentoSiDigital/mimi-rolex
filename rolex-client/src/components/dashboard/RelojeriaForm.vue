<script setup>
import { ref, computed } from "vue";
import router from '../../router'
import { auth } from '../../store/auth.module'
import storeDataService from '../../services/storeDataService'
import { RouterLink } from 'vue-router'
import Loading from '../global-components/Loading.vue'
import { defineRule } from 'vee-validate';
import { integer } from '@vee-validate/rules';
defineRule('integer', integer);



import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";

import { useAsyncState } from '@vueuse/core'

const loadingState = ref(false)
const images2send = ref(1)
const tableRows = ref(1)

const piniaStore = auth()
if (!piniaStore.$state.status.loggedIn) {
    router.push("/login")
}
const schema = yup.object().shape({
    serie: yup.string().required("El nombre del producto es obligatorio!"),
    name: yup.string().required("El nombre del producto es obligatorio!"),
    title: yup.string().required("El titulo del producto es obligatorio!"),
    price: yup.string().required("El precio es obligatorio!"),
    collection: yup.string().required("La coleccion es obligatoria!"),

});


function sendValues(values) {
    loadingState.value = true

    storeDataService.postNewRelojeria(values)

}


</script>

<template>
    <section class="flex flex-col items-center justify-center my-10">
        <RouterLink to="/dashboard"
            class="w-1/3 border border-main-green text-white bg-main-green hover:bg-white hover:text-main-green font-medium rounded-lg text-sm px-5 py-2.5 text-center duration-200 mt-0">
            <font-awesome-icon :icon="['fas', 'arrow-left']" />
            Volver
        </RouterLink>

        <Form v-if="!loadingState" @submit="sendValues" class="w-1/2 bg-white p-10 rounded-md mt-10 shadow-md space-y-4"
            enctype="multipart/form-data" :validation-schema="schema">
            <h2 class="text-3xl font-montserrat font-bold text-center">Agregar nuevo reloj</h2>
            <div>
                <label for="serie" class="block mb-2 text-sm font-medium text-gray-900 ">
                    Serie del producto
                </label>

                <Field type="text" name="serie"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " />
                <ErrorMessage name="serie" class="text-red-700" />
            </div>
            <div>
                <label for="name" class="block mb-2 text-sm font-medium text-gray-900 ">
                    Nombre del producto
                </label>

                <Field type="text" name="name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " />
                <ErrorMessage name="name" class="text-red-700" />
            </div>
            <div>
                <label for="title" class="block mb-2 text-sm font-medium text-gray-900 ">
                    Pequeña descripción
                </label>

                <Field type="text" name="title"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " />
                <ErrorMessage name="title" class="text-red-700" />
            </div>
            <div>
                <h2 class="block mb-2 text-sm font-medium text-gray-900">Imagenes a agregar</h2>
                <div class="flex gap-4">
                    <font-awesome-icon v-if="images2send == 1" :icon="['fas', 'square-minus']" class="text-2xl opacity-0" />
                    <font-awesome-icon v-if="images2send > 1" @click="images2send--" :icon="['fas', 'square-minus']"
                        class="text-2xl text-main-green hover:text-[#8d958d] duration-100 cursor-pointer" />
                    <h2>{{ images2send }}</h2>
                    <font-awesome-icon v-if="images2send < 8" @click="images2send++" :icon="['fas', 'square-plus']"
                        class="text-2xl text-main-green hover:text-[#8d958d] duration-100 cursor-pointer" />
                    <font-awesome-icon v-if="images2send == 8" :icon="['fas', 'square-plus']" class="text-2xl opacity-0" />
                </div>
            </div>
            
            <div v-for="index in images2send" :key="index">
                <div>
                    <label :for="`imagen${index}`" class="block mb-2 text-sm font-medium text-gray-900 ">Agregar
                        imagen</label>

                    <Field type="file" :name="`imagen${index}`"
                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " />
                </div>
            </div>
            <div class="bg-neutral-100 py-2 space-y-4">
                <h3 class="block mb-2 text-md font-medium text-gray-900">Contenido de la tabla</h3>

                <div v-for="index in tableRows" :key="index">
                    <div class="flex gap-2 ">
                        <div class="w-1/3">
                            <label :for="`header${index}`"
                                class="block mb-2 text-sm font-medium text-gray-900">Cabecera</label>
                            <Field type="text" :name="`header${index}`"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 " />
                        </div>
                        <div class="w-2/3">
                            <label :for="`content${index}`"
                                class="block mb-2 text-sm font-medium text-gray-900">Contenido</label>
                            <Field type="text" :name="`content${index}`"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 " />
                        </div>


                    </div>
                </div>
                <div v-if="tableRows < 8" class="flex justify-end gap-2 text-right w-full">
                    <h2 class="block mb-2 text-sm font-medium text-gray-900">
                        Agregar fila
                    </h2>
                    <font-awesome-icon @click="tableRows++" :icon="['fas', 'square-plus']"
                        class="text-2xl text-main-green hover:text-[#8d958d] duration-100 cursor-pointer" />

                </div>
            </div>
            <div>
                <label for="collection" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Seleccionar
                    Colección</label>
                <Field as="select" name="collection"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 ">

                    <option selected="selected" value="Tissot">Tissot</option>
                    <option value="Longines">Longines</option>
                    <option value="Victorinox">Victorinox</option>
                    <option value="Tudor">Tudor</option>
                </Field>
                <ErrorMessage name="collection" class="text-red-700" />

            </div>
            <div>
                <label for="price" class="block mb-2 text-sm font-medium text-gray-900 ">
                    Precio del producto
                </label>

                <Field type="text" name="price"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    placeholder="$" />
                <ErrorMessage name="price" class="text-red-700" />
            </div>


            <Field type="hidden" rules="integer" name="quantity" v-model="images2send"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " />
            <Field type="hidden" rules="integer" name="tableRows" v-model="tableRows"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " />

            <div>
                <button
                    class="w-1/3 border border-main-green text-white bg-main-green hover:bg-white hover:text-main-green font-medium rounded-lg text-sm px-5 py-2.5 text-center duration-200 mt-0">

                    Subir producto
                </button>
            </div>
        </Form>
        <Loading v-else />


    </section>
</template>


