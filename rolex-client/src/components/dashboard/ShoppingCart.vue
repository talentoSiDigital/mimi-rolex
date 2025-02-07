<script setup>
import {
  useAsyncState,
  useWindowSize,
  useNavigatorLanguage,
} from "@vueuse/core";
import axios from "axios";
import { ref, watch } from "vue";
import router from "../../router";
import paymentDataServices from "../../services/paymentDataServices";
import StoreDataService from "../../services/storeDataService";
import { auth } from "../../store/auth.module";
import CartProductCard from "../cards/CartProductCard.vue";
import DashboardCards from "../cards/DashboardCards.vue";
import ConfirmationModal from "../modals/ConfirmationModal.vue";
import ChallengeAuth from "../payout-components/ChallengeAuth.vue";
import DDCIframe from "../payout-components/DDCIframe.vue";
import PayoutForm from "../payout-components/PayoutForm.vue";
import { useRouter } from "vue-router";
import uuid from "uuid-random";
const { width, height } = useWindowSize();
const { language } = useNavigatorLanguage();
const code = ref(randomStr());
const active = ref(false);
const piniaStore = auth();
const user = piniaStore.$state.user.id;

const totalAmount = ref(0);
const paymentStatus = ref("");
const checkResponse = ref("");
const challengeResponse = ref();
const accessToken = ref("");
const referenceId = ref();
const checkStep = ref(false);
const challenge = ref(false);
const orgID = "k8vif92e";
const ddci = ref(false);

function getPrice(product) {
  let total = 0;
  for (let index = 0; index < product.length; index++) {
    let amount = String(product[index].precio);
    console.log(amount)
    amount = amount.replace("$", "");
    console.log(amount)
    amount = amount.replace(".", "");
    console.log(amount)
    amount = parseFloat(amount) * product[index].quantity;
    console.log(amount)
    total = total + amount;
  }
  return total;
}

const { state, isReady } = useAsyncState(
  StoreDataService.getCartByUser(user).then((d) => {
    return d.data;
  })
);

function randomStr() {
  let ans = uuid();
  let array = ans.split("-");
  return array[array.length - 1].toUpperCase();
}

const dataObject = ref({
  total: "0",
  firstName: "",
  lastName: "",
  email: piniaStore.$state.user.email,
  phone: piniaStore.$state.user.phone,
  documentId: "",
  address: "",
  country: "VE",
  cardNumber: "",
  cardExpirationMonth: "",
  cardExpirationYear: "",
  region: "",
  cvn:"",
  code: code.value,
  deviceFingerPrintID: code.value,
});


let externalScript = document.createElement("script");
externalScript.setAttribute(
  "src",
  `https://h.online-metrix.net/fp/tags.js?org_id=${orgID}&session_id=bc_5808459559${dataObject.value.deviceFingerPrintID}`
);

document.head.appendChild(externalScript);

axios.get("https://api.ipify.org").then((response) => {
  dataObject.value.ip = response.data;
});

function detectBrowser() {
  var userAgent = navigator.userAgent;
  if (userAgent.indexOf("Edg") > -1) {
    return "Microsoft Edge";
  } else if (userAgent.indexOf("Chrome") > -1) {
    return "Chrome";
  } else if (userAgent.indexOf("Firefox") > -1) {
    return "Firefox";
  } else if (userAgent.indexOf("Safari") > -1) {
    return "Safari";
  } else if (userAgent.indexOf("Opera") > -1) {
    return "Opera";
  } else if (
    userAgent.indexOf("Trident") > -1 ||
    userAgent.indexOf("MSIE") > -1
  ) {
    return "Internet Explorer";
  }

  return "Unknown";
}

function showOffset() {
  // Date object
  let date = new Date();

  // Offset variable will store
  // timezone offset between
  // UTC and your local time
  let offset = date.getTimezoneOffset();

  return offset.toString();
}

function deleteItemInCart(id) {
  StoreDataService.deleteProductInCart(id, user).then((d) => {
    router.go();
  });
}

function activateModal() {
  paymentStatus.value = "";
  dataObject.value.total = getPrice(state.value);
  return (active.value = !active.value);
}

function sendPayment() {
  paymentDataServices
    .step1(dataObject.value, user)
    .then((d) => {
      paymentStatus.value = d.data;
      

      referenceId.value =
        paymentStatus.value.consumerAuthenticationInformation.referenceId;
      accessToken.value =
        paymentStatus.value.consumerAuthenticationInformation.accessToken;

      if (paymentStatus.value.status == "COMPLETED") {
        ddci.value = true;
        checkStep.value = true;
      } else {
      }
    })
    .catch((e) => {});
}

watch(checkStep, () => {
  dataObject.value.referenceId = referenceId.value;
  dataObject.value.clientId = user;
  dataObject.value.userAgent = detectBrowser();
  dataObject.value.timeDifference = showOffset();
  dataObject.value.screenWidth = width.value;
  dataObject.value.screenHeight = height.value;
  dataObject.value.colorDepth = screen.colorDepth;
  dataObject.value.browserLanguage = language.value;

  paymentDataServices
    .step2(dataObject.value, user)
    .then((d) => {
      paymentStatus.value = d.data;

      if (paymentStatus.value.status == "PENDING_AUTHENTICATION") {
        challenge.value = true;
        return;
      }
      if (paymentStatus.value.status == "AUTHENTICATION_SUCCESSFUL") {
        dataObject.value.transactionId =
          d.data.consumerAuthenticationInformation.authenticationTransactionId;
        dataObject.value.signedPares =
          paymentStatus.value.consumerAuthenticationInformation.paresStatus;
        dataObject.value.cavv =
          paymentStatus.value.consumerAuthenticationInformation.cavv;
        dataObject.value.xid =
          paymentStatus.value.consumerAuthenticationInformation.xid;
        dataObject.value.eciRaw =
          paymentStatus.value.consumerAuthenticationInformation.eciRaw;
        dataObject.value.ecommerceIndicator =
          paymentStatus.value.consumerAuthenticationInformation.ecommerceIndicator;
        dataObject.value.ucafCollectionIndicator =
          paymentStatus.value.consumerAuthenticationInformation.ucafCollectionIndicator;
        dataObject.value.ucafAuthenticationData =
          paymentStatus.value.consumerAuthenticationInformation.ucafAuthenticationData;
        dataObject.value.veresEnrolled =
          paymentStatus.value.consumerAuthenticationInformation.veresEnrolled;
        dataObject.value.directoryServerTransactionId =
          paymentStatus.value.consumerAuthenticationInformation.directoryServerTransactionId;
        dataObject.value.transactionToken =
          paymentStatus.value.consumerAuthenticationInformation.token;

        paymentDataServices.generateToken(dataObject.value).then((d) => {
          dataObject.value.customerTokenId = d.data.customerTokenId;
          dataObject.value.customerShippingAddressId =
            d.data.customerShippingAddressId;
          dataObject.value.instrumentIdentifierId =
            d.data.instrumentIdentifierId;
          dataObject.value.paymentInstrumentId = d.data.paymentInstrumentId;

          paymentDataServices
            .payWithTokens(dataObject.value, user)
            .then((d) => {
              active.value = false;
              router.push(`/checkout/`);
            })
            .catch((e) => {
              ddci.value = false;
              paymentStatus.value = {};
              paymentStatus.value.status = "INVALID_REQUEST";
              paymentStatus.value.errorInformation = {};
              paymentStatus.value.errorInformation.reason = "Tarjeta no valida";
              paymentStatus.value.errorInformation.message = e.message;
            });
        });
      }
    })
    .catch((e) => {});
});

watch(challengeResponse, () => {

  dataObject.value.authenticationTransactionId = challengeResponse.value;
  paymentDataServices
    .validation(dataObject.value, user)
    .then((d) => {
      paymentStatus.value = d.data;

      if (paymentStatus.value.status == "AUTHENTICATION_SUCCESSFUL") {
        dataObject.value.transactionId =
          d.data.consumerAuthenticationInformation.authenticationTransactionId;
        dataObject.value.signedPares =
          paymentStatus.value.consumerAuthenticationInformation.paresStatus;
        dataObject.value.cavv =
          paymentStatus.value.consumerAuthenticationInformation.cavv;
        dataObject.value.xid =
          paymentStatus.value.consumerAuthenticationInformation.xid;
        dataObject.value.eciRaw =
          paymentStatus.value.consumerAuthenticationInformation.eciRaw;
        dataObject.value.ecommerceIndicator =
          paymentStatus.value.consumerAuthenticationInformation.ecommerceIndicator;
        dataObject.value.ucafCollectionIndicator =
          paymentStatus.value.consumerAuthenticationInformation.ucafCollectionIndicator;
        dataObject.value.ucafAuthenticationData =
          paymentStatus.value.consumerAuthenticationInformation.ucafAuthenticationData;
        dataObject.value.veresEnrolled =
          paymentStatus.value.consumerAuthenticationInformation.veresEnrolled;
        dataObject.value.directoryServerTransactionId =
          paymentStatus.value.consumerAuthenticationInformation.directoryServerTransactionId;
        dataObject.value.transactionToken =
          paymentStatus.value.consumerAuthenticationInformation.token;

        paymentDataServices.generateToken(dataObject.value).then((d) => {
          dataObject.value.customerTokenId = d.data.customerTokenId;
          dataObject.value.customerShippingAddressId =
            d.data.customerShippingAddressId;
          dataObject.value.instrumentIdentifierId =
            d.data.instrumentIdentifierId;
          dataObject.value.paymentInstrumentId = d.data.paymentInstrumentId;

          paymentDataServices
            .payWithTokens(dataObject.value, user)
            .then((d) => {
              active.value = false;
              router.push(`/checkout/`);
            })
            .catch((e) => {
              ddci.value = false;
              paymentStatus.value = {};
              paymentStatus.value.status = "INVALID_REQUEST";
              paymentStatus.value.errorInformation = {};
              paymentStatus.value.errorInformation.reason = "Tarjeta no valida";
              paymentStatus.value.errorInformation.message = e.message;
            });
        });
      } else {
      }
    })
    .catch((e) => {});
});
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
          v-model="dataObject"
          @send-payment="sendPayment"
          :status="paymentStatus"
        />
      </transition>

      <DDCIframe v-if="ddci" :data="paymentStatus" v-model="checkResponse" />

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
        class="w-screen h-full flex gap-4 lg:gap-0 flex-col lg:flex-row items-center lg:items-start justify-between px-20 mb-10"
        v-if="isReady"
      >
        <div
          :class="state.length > 0 ? 'w-[90vw] lg:w-[55%]' : 'w-[90vw] md:w-full'"
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
              <h2 class="md:text-4xl">No hay productos en tu carrito</h2>
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
