<script setup>
import { ref, computed } from "vue";
import { RouterLink } from "vue-router";
import router from "../../router";

import { auth } from "../../store/auth.module";
import { Form, Field, ErrorMessage } from "vee-validate";
import Loading from '../global-components/Loading.vue'
import * as yup from "yup";
const piniaStore = auth();

const message = ref("");
const successful = ref(false);
const loading = ref(false);

const schema = yup.object().shape({
  email: yup.string().required("La dirección de correo es obligatoria!"),
  password: yup.string().required("La contraseña es obligatoria!"),
});


const errorList = {
  "User Not found.":"Este usuario no existe",
  "Invalid Password!":"Clave inválida"
}

function handleLogin(user) {
  console.log("user: ",user.email)
  if (user.email != "" && user.password != "") {
    loading.value = true;
    piniaStore.login(user).then(
      (data) => {
        console.log(data)
        router.push("/");
      },
      (error) => {
        loading.value = false;
        message.value =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
      }
    );
  }
}
</script>

<template>
  <div 
    class="flex flex-col items-center justify-center py-8 w-full mx-auto lg:py-0"
  >
  <img src="/assets/mimi-logo.png" alt="logo" />
   
    <div v-if="!loading" class="w-full rounded-lg md:mt-0 md:w-11/12 xl:p-0">
      <div class="py-4">
        <h1
          class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl"
        >
          Iniciar sesión
        </h1>
        <h2 class="font-light py-1">
          Necesitas tener una cuenta para poder ordenar
        </h2>
        <Form @submit="handleLogin" :validation-schema="schema" >
          <div v-if="!successful" class="space-y-4 md:space-y-6">
            <div>
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900"
                >Dirección de correo</label
              >
              <Field
                type="text"
                name="email"
                placeholder="correo@example.com"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                
              />
              <ErrorMessage name="email" class="text-red-700" />
            </div>

            <div>
              <label
                for="password"
                class="block mb-2 text-sm font-medium text-gray-900 "
                >Contraseña</label
              >
              <Field
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
              
              />
              <ErrorMessage name="password" class="text-red-700" />
            </div>

            <button
              
              class="w-full border border-main-green text-white bg-main-green hover:bg-white hover:text-main-green font-medium rounded-lg text-sm px-5 py-2.5 text-center duration-200 mt-0"
            >
              Iniciar sesión
            </button>
          </div>
        </Form>
        <div v-if="message != ''" class="font-bold">
          <p
            :class="successful ? 'text-rolex-green' : 'text-red-700'"
            class="pb-4"
          >
            {{ errorList[message] }}
          </p>
       
        </div>
        <div class="flex pt-4">
          <p class="w-10/12 flex items-center text-sm">¿No tienes una cuenta?</p>
          <RouterLink
            to="/registrar"
            class="w-10/12 border border-neutral-400 text-white bg-neutral-400 hover:bg-white hover:text-main-green font-medium rounded-lg text-sm px-5 py-2.5 text-center duration-200 mt-0"
          >
            Registrar</RouterLink
          >
        </div>
      </div>
    </div>
    <Loading v-else/>
  </div>
</template>


