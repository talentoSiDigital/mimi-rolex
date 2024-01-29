<script setup>
import { ref, computed } from "vue";
import router from '../../router'
import { auth } from '../../store/auth.module'
import storeDataService from '../../services/storeDataService'
import { RouterLink } from 'vue-router'
import Loading from '../global-components/Loading.vue'

import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";

import { useAsyncState } from '@vueuse/core'

const loadingState = ref(false)

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
    type: yup.string().required("Es necesario especificar el tipo de producto!"),
    imagen1: yup.mixed().required("La imagen es obligatoria!"),
    imagen2: yup.mixed().required("La imagen es obligatoria!"),
});


function sendValues(values){
    loadingState.value = true 
    
   storeDataService.postNewJoyeria(values).then(()=>{
    router.push("/dashboard")
   })

}



</script>

<template>
    <section class="flex flex-col items-center justify-center my-10">
        <RouterLink to="/dashboard"
            class="w-1/3 border border-main-green text-white bg-main-green hover:bg-white hover:text-main-green font-medium rounded-lg text-sm px-5 py-2.5 text-center duration-200 mt-0">
            <font-awesome-icon :icon="['fas', 'arrow-left']" />
            Volver
        </RouterLink>

        <Form v-if="!loadingState" @submit="sendValues" class="w-1/2 bg-white p-10 rounded-md mt-10 shadow-md space-y-4" enctype="multipart/form-data"
            :validation-schema="schema">
            <h2 class="text-3xl font-montserrat font-bold text-center">Agregar nueva prenda</h2>
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
                <label for="price" class="block mb-2 text-sm font-medium text-gray-900 ">
                    Precio del producto
                </label>

                <Field type="text" name="price"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="$"/>
                <ErrorMessage name="price" class="text-red-700" />
            </div>

            <div>
                <label for="imagen1" class="block mb-2 text-sm font-medium text-gray-900 ">Agregar imagen</label>

                <Field type="file" name="imagen1"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " />
                <ErrorMessage name="imagen1" class="text-red-700" />
            </div>
            <div>
                <label for="imagen2" class="block mb-2 text-sm font-medium text-gray-900 ">Agregar Imagen</label>

                <Field type="file" name="imagen2"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " />
                <ErrorMessage name="imagen2" class="text-red-700" />
            </div>

            <div>
                <label for="type" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Seleccionar
                    Categoria</label>
                <Field as="select" name="type"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 ">

                    <option selected="selected" value="Anillo">Anillo</option>
                    <option value="Argolla">Argolla</option>
                    <option value="Rosario">Rosario</option>
                    <option value="Joyeria">Joyería</option>
                    <option value="Pulsera">Pulsera</option>
                </Field>
                <ErrorMessage name="type" class="text-red-700" />

            </div>
            <div>
                <label for="collection" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Seleccionar
                    Colección</label>
                <Field as="select" name="collection"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 ">

                    <option selected="selected" value="nacimiento-y-bautizos">Nacimiento y bautizos</option>
                    <option value="compromiso-y-matrimonio">Compromiso y matrimonio</option>
                    <option value="graduacion">Graduación</option>
                    <option value="regalos">Regalos</option>
                </Field>
                <ErrorMessage name="collection" class="text-red-700" />

            </div>
            <div>
                <button
                    class="w-1/3 border border-main-green text-white bg-main-green hover:bg-white hover:text-main-green font-medium rounded-lg text-sm px-5 py-2.5 text-center duration-200 mt-0">
                 
                    Subir producto
                </button>
            </div>
        </Form>
        <Loading v-else/>
        

    </section>
</template>


