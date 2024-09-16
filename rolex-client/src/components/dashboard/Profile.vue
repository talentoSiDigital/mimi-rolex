<script setup>
import { ref, computed } from "vue";
import { auth } from '../../store/auth.module'
import AdminProfile from '../user-dashboard/AdminProfile.vue'
import UserProfile from '../user-dashboard/UserProfile.vue'


import mailDataService from '../../services/mailDataService'
import userService from '../../services/auth/userService'
const piniaStore = auth()

function testEmail(){
    mailDataService.testMail().then(
        data => console.log('email sended')
    ).catch(
        error => console.log(error)
    )
}



const currentUser = computed(() => {
    return piniaStore.$state.user
})

</script>

<template>
    <section>
        <div>
            <h2 class="text-center text-3xl font-montserrat font-bold py-4 my-4">Bienvenido al panel de control,
                @{{ currentUser.username }}</h2>
                
                <h2 class="text-center text-4xl font-montserrat font-semibold py-4 my-4">
            ¿Qué deseas hacer?
        </h2>
        </div>

        <UserProfile  :info="currentUser.id"/>

        

    </section>
</template>
