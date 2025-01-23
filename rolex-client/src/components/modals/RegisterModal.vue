<script setup>
import { RouterLink } from "vue-router";
import DashboardCards from "../cards/DashboardCards.vue";
import LoginForm from "../form-components/LoginForm.vue";
import RegisterForm from "../form-components/RegisterForm.vue";

const { emit } = defineEmits(["activate-modal"]);
</script>

<template>
  <section
    class="z-50 fixed h-screen top-0 w-full flex items-center justify-center"
  >
    <div class="h-fit w-full flex items-center justify-center">
      <DashboardCards class="w-11/12 lg:w-1/2">
        <div class="w-full flex justify-center relative">
          <font-awesome-icon @click="$emit('activate-modal')"
            :icon="['fas', 'circle-xmark']"
            class="absolute right-3 text-3xl text-main-green cursor-pointer duration-200 hover:scale-125"
          />
          <LoginForm />
        </div>
        <!-- <RegisterForm/> -->

        <!-- 
                <div class="flex flex-col w-full gap-2">
                    <RouterLink to="/registrar"
                        class="w-full border border-main-green text-white bg-main-green hover:bg-white hover:text-main-green font-medium rounded-lg text-sm px-5 py-2.5 text-center duration-200 ">
                        Registrar
                    </RouterLink>
                    <RouterLink to="/login"
                        class="w-full border border-main-green text-white bg-main-green hover:bg-white hover:text-main-green font-medium rounded-lg text-sm px-5 py-2.5 text-center duration-200 mt-0">
                        Iniciar sesión
                    </RouterLink>
                    <button @click="$emit('activate-modal')"
                        class="w-full border border-main-green text-white bg-main-green hover:bg-white hover:text-main-green font-medium rounded-lg text-sm px-5 py-2.5 text-center duration-200 mt-0">
                        Cancelar
                    </button>
                </div> -->
      </DashboardCards>
    </div>
  </section>
</template>

<style scoped></style>
