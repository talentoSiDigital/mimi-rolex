<script setup>
import { useAsyncState } from '@vueuse/core';
import axios from "axios";
import { ref, watch } from "vue";
import router from '../../router';
import paymentDataServices from '../../services/paymentDataServices';
import StoreDataService from '../../services/storeDataService';
import { auth } from '../../store/auth.module';
import CartProductCard from '../cards/CartProductCard.vue';
import DashboardCards from '../cards/DashboardCards.vue';
import ConfirmationModal from '../global-components/ConfirmationModal.vue';
import ChallengeAuth from '../payout-components/ChallengeAuth.vue';
import DDCIframe from '../payout-components/DDCIframe.vue';
import PayoutForm from '../payout-components/PayoutForm.vue';
import { useRouter } from 'vue-router';

const code = ref(randomStr())
const active = ref(false)
const piniaStore = auth()
const user = piniaStore.$state.user.id
console.log(piniaStore.$state.user);

const totalAmount = ref(0)
const paymentStatus = ref("")
const checkResponse = ref("")
const challengeResponse = ref()
const accessToken = ref("")
const referenceId = ref()
const checkStep = ref(false)
const challenge = ref(false)
const orgID = '1snn5n9w'


function getPrice(product) {
    let total = 0
    for (let index = 0; index < product.length; index++) {
        let amount = String(product[index].precio)
        amount = amount.replace('$', "")
        amount = amount.replace(',', "")
        amount = parseInt(amount) * product[index].quantity
        total = total + amount
    }
    return total
}

const { state, isReady } = useAsyncState(
    StoreDataService.getCartByUser(user)
        .then(d => {
            return d.data
        })

)

function randomStr() {
    let ans = crypto.randomUUID()
    let array = ans.split('-')
    return array[array.length - 1].toUpperCase();
}

const dataObject = ref({
    "total": "0",
    "firstName": "Manuel",
    "lastName": "Zorrilla",
    "email": piniaStore.$state.user.email,
    "phone": piniaStore.$state.user.phone,
    "documentId": "27515094",
    "address": "Ciudad Center, boleita",
    "country": "VE",
    "cardNumber": "",
    "cardExpirationMonth": "12",
    "cardExpirationYear": "2027",
    "region": "",
    "code": code.value,
    "deviceFingerPrintID": code.value


})


let externalScript = document.createElement('script')
externalScript.setAttribute('src', `https://h.online-metrix.net/fp/tags.js?org_id=${orgID}&session_id=bc_5808459559${dataObject.value.deviceFingerPrintID}`)

document.head.appendChild(externalScript)

axios.get('https://api.ipify.org')
    .then(response => {
        dataObject.value.ip = response.data
    })


function deleteItemInCart(id) {
    StoreDataService.deleteProductInCart(id, user).then(
        d => {
            router.go()
        }
    )
}

function activateModal() {
    paymentStatus.value = ""
    dataObject.value.total = getPrice(state.value)
    return active.value = !active.value
}

function sendPayment() {


    paymentDataServices.step1(dataObject.value, user).then((d) => {
        paymentStatus.value = d.data
        referenceId.value = paymentStatus.value.consumerAuthenticationInformation.referenceId
        accessToken.value = paymentStatus.value.consumerAuthenticationInformation.accessToken
        if (paymentStatus.value.status == "COMPLETED") {

            checkStep.value = true

        }
    }).catch((e) => {
    })
}


watch(checkResponse, () => {
    dataObject.value.referenceId = referenceId.value
    dataObject.value.clientId = user

    paymentDataServices.step2(dataObject.value, user).then((d) => {
    
        paymentStatus.value = d.data
        console.log(d.data);
    
        if (paymentStatus.value.status == "PENDING_AUTHENTICATION") {
            challenge.value = true
            checkStep.value = false
            return
        }
        if (paymentStatus.value.status == "AUTHENTICATION_SUCCESSFUL") {


            dataObject.value.transactionId = d.data.consumerAuthenticationInformation.authenticationTransactionId
            dataObject.value.signedPares = paymentStatus.value.consumerAuthenticationInformation.paresStatus
            dataObject.value.cavv = paymentStatus.value.consumerAuthenticationInformation.cavv
            dataObject.value.xid = paymentStatus.value.consumerAuthenticationInformation.xid
            dataObject.value.eciRaw = paymentStatus.value.consumerAuthenticationInformation.eciRaw
            dataObject.value.ecommerceIndicator = paymentStatus.value.consumerAuthenticationInformation.ecommerceIndicator
            dataObject.value.ucafCollectionIndicator = paymentStatus.value.consumerAuthenticationInformation.ucafCollectionIndicator
            dataObject.value.ucafAuthenticationData = paymentStatus.value.consumerAuthenticationInformation.ucafAuthenticationData
            dataObject.value.veresEnrolled = paymentStatus.value.consumerAuthenticationInformation.veresEnrolled
            dataObject.value.directoryServerTransactionId = paymentStatus.value.consumerAuthenticationInformation.directoryServerTransactionId
            dataObject.value.transactionToken = paymentStatus.value.consumerAuthenticationInformation.token
            paymentDataServices.generateToken(dataObject.value).then((d)=>{
              dataObject.value.customerTokenId= "1CC24E660B4F153DE063AF598E0AAD8A"
              dataObject.value.customerShippingAddressId= "1CC25B61F55B3EE2E063AF598E0A0D0B"
              dataObject.value.instrumentIdentifierId= "7032770000053652701"
              dataObject.value.paymentInstrumentId= "1CC24E660B56153DE063AF598E0AAD8A"
              console.log(dataObject.value);
                paymentDataServices.payWithTokens(dataObject.value).then((d)=>{
                    console.log(d.data);
                })
            })

            // paymentDataServices.payWithData(dataObject.value, user).then((d) => {
            //     // router.push(`/checkout/`)
            //     console.log(d.data);
            // })
        }


    }).catch((e) => {
    })
})


watch(challengeResponse, () => {

    dataObject.value.authenticationTransactionId = challengeResponse.value
    paymentDataServices.validation(dataObject.value, user).then((d) => {
        paymentStatus.value = d.data


        if (paymentStatus.value.status == "AUTHENTICATION_SUCCESSFUL") {

            dataObject.value.transactionId = d.data.consumerAuthenticationInformation.authenticationTransactionId
            dataObject.value.signedPares = paymentStatus.value.consumerAuthenticationInformation.paresStatus
            dataObject.value.cavv = paymentStatus.value.consumerAuthenticationInformation.cavv
            dataObject.value.xid = paymentStatus.value.consumerAuthenticationInformation.xid
            dataObject.value.ecommerceIndicator = paymentStatus.value.consumerAuthenticationInformation.ecommerceIndicator
            dataObject.value.ucafCollectionIndicator = paymentStatus.value.consumerAuthenticationInformation.ucafCollectionIndicator
            dataObject.value.ucafAuthenticationData = paymentStatus.value.consumerAuthenticationInformation.ucafAuthenticationData
            dataObject.value.veresEnrolled = paymentStatus.value.consumerAuthenticationInformation.veresEnrolled
            dataObject.value.directoryServerTransactionId = paymentStatus.value.consumerAuthenticationInformation.directoryServerTransactionId


            paymentDataServices.payWithData(dataObject.value, user).then((d) => {
                paymentStatus.value = d.data
                if (paymentStatus.value.status == "AUTHORIZED") {
                    router.push(`/checkout/`)
                }
            })
        } else {

        }
    }).catch((e) => {
    })

})

</script>

<template>
  <section>
    <noscript>
      <iframe
        style="
          width: 100px;
          height: 100px;
          border: 0;
          position: absolute;
          top: -50000px;
        "
        :src="`https://h.onlinemetrix.net/fp/tags?org_id=${orgID}&session_id=${sessionID}`"
      ></iframe>
    </noscript>

    <div>
      <transition name="bounce">
        <ConfirmationModal
          v-if="active"
          @activate-modal="activateModal"
          v-model:data-object="dataObject"
          @send-payment="sendPayment"
          v-model:status="paymentStatus"
        />
      </transition>

      <DDCIframe
        v-if="checkStep"
        :data="paymentStatus"
        v-model="checkResponse"
      />

      <ChallengeAuth
        v-if="challenge"
        v-model="challengeResponse"
        :data="paymentStatus"
        :access-token="accessToken"
      />

      <transition
        enter-active-class="duration-100 ease-in-out"
        enter-from-class="transform opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="duration-700 ease-in-out"
        leave-from-class="opacity-700"
        leave-to-class="transform opacity-0"
      >
        <div
          class="bg-[rgba(0,0,0,0.8)] z-30 fixed h-screen top-0 w-full"
          v-if="active"
        ></div>
      </transition>
    </div>

    <div
      class="my-10 flex flex-col md:flex-row items-center justify-center w-full"
    >
      <span class="block h-px w-1/3 md:w-1/6 bg-neutral-300"></span>
      <h1 class="text-center text-3xl tracking-widest mx-4 my-4 font-normal">
        CARRITO DE COMPRAS
      </h1>

      <span class="block h-px w-1/3 md:w-1/6 bg-neutral-300"></span>
    </div>
    <div class="min-h-[95vh] mb-10">
      <div
        class="w-full h-full flex gap-4 lg:gap-0 flex-col lg:flex-row items-center lg:items-start justify-between px-20 mb-10"
        v-if="isReady"
      >
        <div
          :class="state.length > 0 ? 'w-[90vw] lg:w-[55%]' : 'w-full'"
          class="h-[96vh] border-2 rounded-lg border-main-green p-6 lg:ml-5 -translate-x-1.5 -translate-y-1.5"
        >
          <h2 class="text-2xl pb-1">Resumen del pedido</h2>
          <section class="h-[84%] overflow-y-scroll" v-if="isReady">
            <div v-if="state.length > 0">
              <div v-for="(product, key) in state" :key="key">
                <div v-for="item in state[key].quantity" :key="item">
                  <CartProductCard
                    :product="product"
                    @delete-item="deleteItemInCart"
                  />
                </div>
              </div>
            </div>
            <div v-else class="border h-[88%] flex items-center justify-center">
              <h2 class="text-4xl">No hay productos en tu carrito</h2>
            </div>
          </section>

          <hr class="mt-2" />
          <section>
            <h2 v-if="isReady" class="text-2xl text-right py-2">
              Total: ${{ getPrice(state).toLocaleString("en-US") }}
            </h2>
          </section>
        </div>

        <DashboardCards
          class="w-[90vw] lg:w-2/5 h-full bg-white"
          v-if="state.length > 0"
        >
          <div v-if="isReady" class="w-full h-full">
            <PayoutForm
              v-model="dataObject"
              :amount="getPrice(state)"
              @activate-modal="activateModal"
            />
          </div>
        </DashboardCards>
      </div>
    </div>
  </section>
</template>

<style scoped>
.bounce-enter-active {
  animation: bounce-in 0.5s;
}

.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }

  50% {
    transform: scale(1.25);
  }

  100% {
    transform: scale(1);
  }
}
</style>
