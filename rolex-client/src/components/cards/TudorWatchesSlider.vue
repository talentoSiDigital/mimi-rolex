<script setup>
import { useAsyncState } from "@vueuse/core";

import StoreDataService from "../../services/storeDataService";
import TudorShowcaseCard from "./TudorShowcaseCard.vue";
import { ref } from "vue";

const { isLoading, state, isReady, execute } = useAsyncState(
    StoreDataService.getRelojeriaPrincipal()
        .then(d => { return d.data })
)


</script>

<template>
    <div class="flex items-center justify-center">


        <section v-if="isReady"
            class="w-11/12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  place-content-center gap-10">

            <div v-for="item in state" :key="item.id">
                <TudorShowcaseCard :items="item" />
            </div>


        </section>

    </div>
</template>
