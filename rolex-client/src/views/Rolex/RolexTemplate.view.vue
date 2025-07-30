<script setup>
import { useRoute } from "vue-router";
import RolexFooter from "../../components/navigation-components/RolexFooter.vue";
import RolexNavbar from "../../components/navigation-components/RolexNavbar.vue";
import SliderNavigationRolex from "../../components/navigation-components/SliderNavigationRolex.vue";
import BreadCrumb from "../../components/navigation-components/BreadCrumb.vue";
import { useLoaderStore } from "../../store/loaderState";
import { computed, ref } from "vue";
import { useHead } from '@unhead/vue'
const route = useRoute();
const loader = useLoaderStore();
const checkIfFamily = computed(() => {
  return route.meta.pageFamily ? true : false;
});
const checkIfModel = computed(() => {
  return route.meta.pageType === "model page" ? true : false;
});

const digitalDataLayerTemplate = {
  environment: {
    environmentVersion: "V7",
    coBrandedVersion: "Bespoke",
  },
  page: {
    pageType: route.meta.pageType,
  },
};

const digitalDataLayerFamily = ref(digitalDataLayerTemplate);
digitalDataLayerFamily.value.page.pageFamilyName = route.meta.pageFamily;

const digitalDataLayer = computed(()=>{
  if(checkIfFamily.value==true){
    return digitalDataLayerFamily.value
  }
  if(checkIfModel.value==false){
    return digitalDataLayerTemplate
  }
})
// const digitalDataLayerModel = ref(digitalDataLayerTemplate);
// digitalDataLayerModel.value.page.pageFamilyName = route.meta.pageFamily;
// digitalDataLayerModel.value.products = {};
// digitalDataLayerModel.value.products.productRMC = route.meta.pageFamily;
if(checkIfModel.value==false){
  useHead({
    script:[`var digitalDataLayer = ${JSON.stringify(digitalDataLayer.value)}; `]
  })
}
</script>

<template>
  <div id="rolex-main-content" class="relative">
   
    <div>
      <RolexNavbar />
      <BreadCrumb v-if="route.name != 'busqueda'" />
      <main>
        <slot name="content"></slot>

      </main>

      <SliderNavigationRolex />
      <RolexFooter />
    </div>
  </div>
</template>



