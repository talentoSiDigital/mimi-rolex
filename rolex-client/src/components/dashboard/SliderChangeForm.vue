<script setup>
import { ref, computed } from "vue";
import router from '../../router'
import { auth } from '../../store/auth.module'
import { RouterLink, RouterView } from 'vue-router'

import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";

import HeaderSlider from '../../services/headerSliderDataServices'
import { useAsyncState } from '@vueuse/core'
const piniaStore = auth()
if (!piniaStore.$state.status.loggedIn) {
    router.push("/login")
}

const { isLoading, state, isReady, execute } = useAsyncState(
    HeaderSlider.getAll()
        .then(d => d.data)
)

const currentUser = computed(() => {
    return piniaStore.$state.user
})

// const bannerState = ref({
//     1 : {
//         "main":{},
//         "mobile":{},
//     },
//     2 : {
//         "main":{},
//         "mobile":{},
//     },
//     3 : {
//         "main":{},
//         "mobile":{},
//     },
//     4 : {
//         "main":{},
//         "mobile":{},
//     },
//     5 : {
//         "main":{},
//         "mobile":{},
//     },
//     6 : {
//         "main":{},
//         "mobile":{},
//     }
// })



function sendChanges(values){
    console.log(values)  
    for (const key in values) {
        console.log(values[key])

    }
    // let itemsChanged = []
    
    // for (const key in bannerState.value) {
    //   if(bannerState.value[key].mobile != ''){

    //   }
    // }
}


</script>

<template>
    <section>
        <h2 class="text-3xl font-montserrat font-bold text-center my-8">Cambiar imagenes del banner</h2>
        <div v-if="isReady">

            <Form  @submit="sendChanges" class="flex flex-col gap-6 items-center justify-center">
                <div v-for="(item,index) in state" class="w-10/12 flex gap-10 items-center rounded-lg bg-neutral-200 p-10" :key="index">
                    <p class="text-2xl font-montserrat font-semibold">Banner {{ index +1 }}</p>
                    <div class="flex gap-4">

                        <img :src="item.path" :alt="`banner-${index+1}`" class="w-32">
                        <div>
                            <label :for="`file${item+1}`" class="block mb-2 text-sm font-medium text-gray-900 ">Imagen Desktop</label>

                            <Field type="file" :name="`file${index+1}`"
                                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " />

                            <ErrorMessage name="file1Mobile" class="error-feedback" />
                        </div>
                    </div>
                    <div class="flex gap-4">

                        <img :src="item.mobilePath" :alt="`banner-${index+1}-mobile`" class="w-24">


                        <div>

                            <label :for="`file${index+1}Mobile`" class="block mb-2 text-sm font-medium text-gray-900 ">Imagen
                                Mobile</label>

                            <Field type="file" :name="`file${index+1}Mobile`"
                                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " />

                            <ErrorMessage name="file1Mobile" class="error-feedback" />
                        </div>
                    </div>
                </div>

                <button class="rounded-lg bg-neutral-200 w-10/12 py-4 font-semibold hover:bg-neutral-300" >Guardar cambios</button>

            </Form>


        </div>
    </section>
</template>

