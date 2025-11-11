<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import router from '../../router'
import { auth } from '../../store/auth.module'
import storeDataService from '../../services/storeDataService'
import { RouterLink, useRoute } from 'vue-router'
import Loading from '../global-components/Loading.vue'
import { defineRule } from 'vee-validate';
import { integer } from '@vee-validate/rules';

import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";

import DashboardCard from "./admin/DashboardCard.vue";
import InputField from "../form-components/InputField.vue";
import adminDataServices from "../../services/adminDataServices";

defineRule('integer', integer);

const loadingState = ref(false)
const errorCheck = ref(false)
const statusCheck = ref(200)
const errorContent = ref({
    409: {
        icon: 'circle-exclamation',
        message: 'Este reloj ya existe en la base de datos!'
    },
    500: {
        icon: 'circle-xmark',
        message: 'Hubo un error al crear este reloj'
    },
    200:{
        icon:'spinner',
        message:'Cargando'
    }
})

const checkFromParent = defineModel()
const collections = ref([])
const isReady = ref(false)

const imageCheck = ref([])

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
    brand: yup.mixed().test((value) => {
        if (value) {
            return true;
        }

        return 'Debes escoger una opcion';
    }),
    imagenes: yup
        .mixed()
        .test(
            'is-required',
            'Debes seleccionar al menos un archivo',
            (value) => value && value.length > 0
        )

        .test(
            'file-type',
            'Algún archivo no es una imagen válida (solo se aceptan .jpg, .jpeg, .png)',
            (value) => {
                if (!value) return true;

                for (let i = 0; i < value.length; i++) {
                    if (!['image/jpeg', 'image/png'].includes(value[i].type)) {
                        return false;
                    }
                }
                return true;
            }

        ).test(
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
        )
});


const handleFileChange = (event, veeValidateHandleChange) => {

    veeValidateHandleChange(event.target.files);
    const files = event.target.files
    if (files.length) {
        for (let i = 0; i < files.length; i++) {
            const file = files[i];

            // Genera la URL de vista previa
            const fileUrl = URL.createObjectURL(file);

            imageCheck.value.push({
                name: file.name,
                url: fileUrl, // Esta es la URL temporal para el <img>
                file: file,  // Opcional: mantiene el objeto File original si lo necesitas
            });
        }
    }
};






function formatTableInput(input) {
    let formatInput = input.replace(/^\s*[\r\n]/gm, ';');
    const keywords = ["Garantía de cinco años",
        "Caja",
        "Movimiento",
        "Reserva de marcha",
        "Corona",
        "Hermeticidad",
        "Bisel",
        "Esfera",
        "Cristal",
        "Brazalete"
    ]


    keywords.forEach(word => {
        const regex = new RegExp(`(${word})\\s*$`, 'gm');
        formatInput = formatInput.replace(regex, `$1: `);
    })

    formatInput = formatInput.replace(/\n/g, ' ');

    formatInput = formatInput.replace('‑', '-')

    return formatInput
}

function startOver() {
    errorCheck.value = false
    loadingState.value = false
}

function onSubmit(values) {
    // loadingState.value = true
    values.newTableContent = formatTableInput(values.tableContent);
    values.imageCount = values.imagenes.length
    values.user = piniaStore.$state.user

    const formData = new FormData()


    formData.append('serie', values.serie)
    formData.append('name', values.name)
    formData.append('description', values.description)
    formData.append('price', values.price)
    formData.append('tudorCollectionId', values.collection)
    formData.append('collection', values.brand)
    formData.append('tableContent', values.newTableContent)
    formData.append('imageCount', values.imageCount)
    formData.append('user', JSON.stringify(values.user))
    formData.append('brand', values.brand)



    if (imageCheck.value && imageCheck.value.length > 0) {

        imageCheck.value.map((file) => {
            formData.append('imagenes', file.file);

        })

    }
    console.log(values);
    adminDataServices.createWatch(formData).then((d) => {
        console.log(d.data);
        checkFromParent.value = true
    }).catch(e => {
        errorCheck.value = true
        statusCheck.value = e.status
    })

}



onMounted(() => {

    storeDataService.getTudorCollections().then((response) => {
        collections.value = response.data
    }).catch((error) => {
        console.log(error)
    })
    isReady.value = true
})

onUnmounted(() => {
    imageCheck.value.forEach(item => {
        URL.revokeObjectURL(item.url);
    });
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
                <!--  -->
                <section class="min-h-[600px]">

                    <div v-if="errorCheck"
                        class="text-center h-[600px] flex flex-col justify-center items-center gap-3 ">
                        <font-awesome-icon :icon="['fas', errorContent[statusCheck].icon]" class="bg-white rounded-full text-9xl" />
                        <h2 class="text-2xl">{{ errorContent[statusCheck].message }}</h2>
                        <div class="flex gap-3">
                            <RouterLink to="/dashboard"
                                class="border border-rolex-green bg-rolex-green text-white duration-200 hover:bg-white hover:text-rolex-green p-2 rounded-lg cursor-pointer">
                                Volver al panel</RouterLink>
                            <button @click="startOver"
                                class="border border-rolex-green bg-rolex-green text-white duration-200 hover:bg-white hover:text-rolex-green p-2 rounded-lg cursor-pointer">Agregar
                                otro reloj </button>

                        </div>
                    </div>
                    <div v-else-if="!loadingState" class="w-full">
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
                                <label for="images" class="block mb-2 text-sm font-medium text-gray-700">
                                    Agregar imagen(es)
                                </label>

                                <Field type="file" multiple name="imagenes" rules="image"
                                    v-slot="{ handleChange, handleBlur, errorMessage }">
                                    <input type="file" name="imagenes" id="images" multiple accept=".png, .jpg"
                                        @change="e => handleFileChange(e, handleChange)" class="hidden" />

                                    <label for="images" :class="[
                                        'inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm',
                                        'cursor-pointer transition-colors duration-200 ease-in-out w-full justify-center',
                                        errorMessage
                                            ? 'bg-red-700 hover:bg-red-800 text-white border-red-700'
                                            : 'bg-rolex-green-2 hover:bg-rolex-green text-white'
                                    ]">
                                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12">
                                            </path>
                                        </svg>
                                        Seleccionar Archivos (JPG, PNG)
                                    </label>

                                </Field>

                                <ErrorMessage name="imagenes" class="mt-1 text-sm text-red-600" />

                            </div>
                            <div v-if="imageCheck.length" class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">

                                <div v-for="(image, index) in imageCheck" :key="index" class="relative group">

                                    <img :src="image.url" :alt="image.name"
                                        class="w-full h-24 object-cover rounded-lg shadow-md border-2 border-gray-300" />

                                    <div
                                        class="absolute inset-x-0 bottom-0 bg-rolex-green bg-opacity-60 text-white text-xs p-1 rounded-b-lg truncate shadow-2xl">
                                        {{ image.name }}
                                    </div>

                                </div>

                            </div>

                            <div id="form-field"
                                class="bg-neutral-100 border border-rolex-green shadow-lg px-6 pt-6 pb-8 rounded-lg space-y-4">
                                <h3 class="block mb-2 text-md font-medium text-green-900">Contenido de la tabla</h3>

                                <Field type="text" as="textarea" name="tableContent"
                                    class="bg-gray-50 border border-rolex-green text-green-900 text-sm rounded-lg  block w-full p-2.5 min-h-44 h-44" />

                                <div class="flex gap-4">
                                    <div
                                        class="flex items-center ps-4 border border-rolex-green rounded-sm dark:border-gray-700 w-1/2">
                                        <Field id="brand-1" type="radio" value="Tudor" name="brand"
                                            class="w-4 h-4  bg-gray-100 border-rolex-green " />
                                        <label for="brand-1"
                                            class="w-full py-4 ms-2 text-sm font-medium text-gray-900 ">Tudor</label>
                                    </div>
                                    <div
                                        class="flex items-center ps-4 border border-rolex-green rounded-sm dark:border-gray-700 w-1/2">
                                        <Field checked id="brand-2" type="radio" value="Novedades" name="brand"
                                            class="w-4 h-4  bg-gray-100 border-rolex-green " />
                                        <label for="brand-2"
                                            class="w-full py-4 ms-2 text-sm font-medium text-gray-900 ">Novedades</label>
                                    </div>
                                </div>
                                <ErrorMessage name="brand" class="mt-1 text-sm text-red-600" />


                            </div>


                            <button
                                class="w-full border border-rolex-green text-white bg-rolex-green hover:bg-white hover:text-rolex-green font-medium rounded-lg text-sm px-5 py-2.5 text-center duration-200 mt-0">

                                Subir producto
                            </button>



                        </Form>
                    </div>
                    <Loading v-else />


                </section>
            </template>
        </DashboardCard>



    </section>
</template>
