<script setup>
import { ref, computed } from "vue";
import router from "../../router";
import { auth } from "../../store/auth.module";
import { RouterLink, RouterView } from "vue-router";

import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";

import HeaderSlider from "../../services/headerSliderDataServices";
import { useAsyncState } from "@vueuse/core";

const piniaStore = auth();
if (!piniaStore.$state.status.loggedIn) {
  router.push("/login");
}

const item = ref();
item.value = null;

const { isLoading, state, isReady, execute } = useAsyncState(
  HeaderSlider.getAll().then((d) => d.data)
);

const currentUser = computed(() => {
  return piniaStore.$state.user;
});

const schema = yup.object().shape({
  username: yup.string().required("El nombre de usuario es obligatorio!"),
  password: yup.string().required("La contraseña es obligatoria!"),
});

function sendChanges(values) {
  // let form = new FormData();
  // form.append('file')
  HeaderSlider.updateSlider(values).then(() => {
    router.push("/dashboard/");
  });
}

function setNewState(value) {
  item.value = state.value[value];
}
</script>

<template>
  <section class="flex flex-col items-center justify-center my-10">
    <RouterLink
      to="/dashboard"
      class="w-1/3 border border-main-green text-white bg-main-green hover:bg-white hover:text-main-green font-medium rounded-lg text-sm px-5 py-2.5 text-center duration-200 mt-0"
    >
      <font-awesome-icon :icon="['fas', 'arrow-left']" />
      Volver
    </RouterLink>
    <h2 class="text-3xl font-montserrat font-bold text-center my-8">
      Cambiar imagenes del banner
    </h2>
    <div v-if="isReady">
      <div v-if="item == null">
        <h2 class="text-3xl font-montserrat font-bold text-center my-8">
          Que posicion quieres cambiar?
        </h2>
        <div
          v-for="(item, index) in state"
          :key="index"
          class="flex justify-center w-full"
        >
          <div
            class="w-full flex gap-10 justify-center items-center rounded-lg bg-neutral-200 p-10 m-8"
          >
            <h2 class="text-xl">Banner {{ index + 1 }}</h2>
            <img :src="item.path" :alt="`banner-${item}`" class="w-32" />
            <img :src="item.mobilePath" :alt="`banner-${item}`" class="w-32" />
            <button
              @click="setNewState(index)"
              class="bg-main-green py-4 px-8 rounded"
            >
              Actualizar
            </button>
          </div>
        </div>
      </div>

      <Form
        v-else
        @submit="sendChanges"
        enctype="multipart/form-data"
        class="flex flex-col gap-6 items-center justify-center"
      >
        <div
          class="w-10/12 flex gap-10 items-center rounded-lg bg-neutral-200 p-10"
        >
          <p class="text-2xl font-montserrat font-semibold">
            Actualizar Banner
          </p>
          <div class="flex gap-4">
            <img :src="item.path" alt="banner-preview" class="w-32" />

            <div>
              <label
                for="desktop"
                class="block mb-2 text-sm font-medium text-gray-900"
                >Imagen Desktop</label
              >

              <Field
                type="file"
                name="desktop"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
              />
              <ErrorMessage name="file" class="error-feedback" />
            </div>
          </div>
          <div class="flex gap-4">
            <Field
              type="hidden"
              name="id"
              :value="item.id"
              class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
            />
          </div>
          <div class="flex gap-4">
            <img
              :src="item.mobilePath"
              alt="banner-mobile-preview"
              class="w-24"
            />

            <div>
              <label
                for="mobile"
                class="block mb-2 text-sm font-medium text-gray-900"
                >Imagen Mobile</label
              >

              <Field
                type="file"
                name="mobile"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
              />

              <ErrorMessage name="file" class="error-feedback" />
            </div>
          </div>
        </div>

        <button
          class="rounded-lg bg-neutral-200 w-10/12 py-4 font-semibold hover:bg-neutral-300"
        >
          Guardar cambios
        </button>
      </Form>
    </div>
  </section>
</template>

