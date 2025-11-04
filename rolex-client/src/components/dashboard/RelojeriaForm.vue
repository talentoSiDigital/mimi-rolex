<script setup>
import { ref, computed, onMounted } from "vue";
import router from '../../router'
import { auth } from '../../store/auth.module'
import storeDataService from '../../services/storeDataService'
import { RouterLink } from 'vue-router'
import Loading from '../global-components/Loading.vue'
import { defineRule } from 'vee-validate';
import { integer } from '@vee-validate/rules';

import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";

import DashboardCard from "./admin/DashboardCard.vue";
import InputField from "../form-components/InputField.vue";


defineRule('integer', integer);

const loadingState = ref(false)
const images2send = ref(1)
const tableRows = ref(1)
const collections = ref([])
const isReady = ref(false)

const piniaStore = auth()
if (!piniaStore.$state.status.loggedIn) {
    router.push("/login")
}
const schema = yup.object().shape({
    serie: yup.string().required("El nombre del producto es obligatorio!"),
    name: yup.string().required("El nombre del producto es obligatorio!"),
    description: yup.string().required("La descripción del producto es obligatoria!"),
    price: yup.number("Solo se aceptan números").positive("El numero debe ser positivo!").required("El precio es obligatorio!"),
    collection: yup.string().required("La coleccion es obligatoria!"),
    imagenes: yup
        .mixed()
        .test(
            'is-required',
            'Debes seleccionar al menos un archivo',
            (value) => value && value.length > 0
        )
        .test(
            'file-size',
            'Algún archivo es demasiado grande (máx 10MB)',
            (value) => {
                if (!value) return true;

                for (let i = 0; i < value.length; i++) {
                    if (value[i].size > 10 * 1024 * 1024) {
                        return false;
                    }
                }
                return true;
            }
        ),
});


const handleFileChange = (event, veeValidateHandleChange) => {

    veeValidateHandleChange(event.target.files);
};




function onSubmit(values) {
    console.log(values);

}


onMounted(() => {
    storeDataService.getTudorCollections().then((response) => {
        collections.value = response.data
    }).catch((error) => {
        console.log(error)
    })
    isReady.value = true
})

</script>

<template>
    <section class="flex flex-col items-center justify-center my-10 w-full">
        <DashboardCard class="w-11/12">
            <template #title>
                <div class="flex items-center  gap-2">
                    <RouterLink to="/dashboard" class="flex items-center">
                        <font-awesome-icon @click="modal = false" :icon="['fas', 'arrow-left']"
                            class=" cursor-pointer" />
                    </RouterLink>
                    <h2 class="text-4xl">Agregar reloj</h2>
                </div>
            </template>
            <template #content>
                <div v-if="!loadingState" class="w-full">
                    <Form @submit="onSubmit" class=" space-y-4" :validation-schema="schema"
                        :initial-values="{ price: 0 }">

                        <div class="flex w-full gap-4">
                            <InputField name="serie" type="text" label="Serie del producto" class="w-1/2" />
                            <InputField name="name" type="text" label="Nombre del producto" class="w-1/2" />
                        </div>

                        <div class="flex w-full gap-4">
                            <div class="w-1/5">
                                <label for="collection"
                                    class="block mb-2 text-sm font-medium text-green-900 ">Seleccionar
                                    Colección
                                </label>
                                <Field as="select" name="collection"
                                    class="bg-gray-50 border border-rolex-green text-green-900 text-sm rounded-lg  block w-full p-2.5 "
                                    v-if="isReady">
                                    <option v-for="value in collections" :key="value.id" :value="value.id">{{
                                        value.nombre }}</option>

                                </Field>
                                <ErrorMessage name="collection" class="text-red-700" />

                            </div>
                            <InputField name="price" type="number" label="Precio del producto" class="w-1/5" />
                            <InputField name="description" type="text" label="Pequeña descripción del producto"
                                class="w-3/5" />
                        </div>

                        <div>

                            <label for="imagenes" class="block mb-2 text-sm font-medium text-green-900 ">Agregar
                                imagen</label>
                            <Field type="file" multiple name="imagenes"
                                v-slot="{ handleChange, handleBlur, errorMessage }" class="">
                                <input type="file" name="imagenes" id="images" multiple
                                    @change="e => handleFileChange(e, handleChange)"
                                    class="bg-gray-50 border border-rolex-green text-green-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5">

                            </Field>
                        </div>


                        <div>
                            
                        </div>

                        <!-- <div id="form-field"
                            class="bg-neutral-100 border border-rolex-green shadow-lg p-4 rounded-lg space-y-4">
                            <h3 class="block mb-2 text-md font-medium text-green-900">Contenido de la tabla</h3>

                            <div v-for="index in tableRows" :key="index">
                                <div class="flex gap-2 ">
                                    <div class="w-1/3">
                                        <label :for="`header${index}`"
                                            class="block mb-2 text-sm font-medium text-green-900">Cabecera</label>
                                        <Field type="text" :name="`header${index}`"
                                            class="bg-gray-50 border border-rolex-green text-green-900 text-sm rounded-lg  block w-full p-2.5 " />
                                    </div>
                                    <div class="w-2/3">
                                        <label :for="`content${index}`"
                                            class="block mb-2 text-sm font-medium text-green-900">Contenido</label>
                                        <Field type="text" :name="`content${index}`"
                                            class="bg-gray-50 border border-rolex-green text-green-900 text-sm rounded-lg  block w-full p-2.5 " />
                                    </div>


                                </div>
                            </div>
                            <div v-if="tableRows < 8" class="flex justify-end gap-2 text-right w-full">
                                <h2 class="block mb-2 text-sm font-medium text-green-900">
                                    Agregar fila
                                </h2>
                                <font-awesome-icon @click="tableRows++" :icon="['fas', 'square-plus']"
                                    class="text-2xl text-rolex-green  duration-100 cursor-pointer" />

                            </div>
                        </div> -->



                        <button
                            class="w-1/3 border border-rolex-green text-white bg-rolex-green hover:bg-white hover:text-rolex-green font-medium rounded-lg text-sm px-5 py-2.5 text-center duration-200 mt-0">

                            Subir producto
                        </button>



                    </Form>
                </div>
                <Loading v-else />
            </template>
        </DashboardCard>



    </section>
</template>
