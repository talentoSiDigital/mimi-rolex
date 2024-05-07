import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import VueTelInput from 'vue-tel-input';
import 'vue-tel-input/vue-tel-input.css';
import {createPinia} from 'pinia'
import vueCountryRegionSelect from 'vue3-country-region-select'
import i18next from 'i18next';
import I18NextVue from 'i18next-vue';
i18next.init({
    lng: 'es',
    interpolation: {
      escapeValue: false
    },
    fallbackLng: false,
   
  });

// Defining pinia
const pinia = createPinia()


/* import router from './router' */

import VueCookieAcceptDecline from 'vue-cookie-accept-decline';
import 'vue-cookie-accept-decline/dist/vue-cookie-accept-decline.css';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import {
    faPhone,
    faLocationDot,
    faAngleUp,
    faCircleInfo,
    faArrowRight,
    faChevronLeft,
    faChevronRight,
    faEnvelope,
    faArrowsRotate,
    faLocationArrow,
    faAngleDown,
    faArrowLeft,
    faSquarePlus,
    faSquareMinus,
    faGear,
    faPenToSquare,
    faTrashCan,
    faCircleCheck,
    faCircleXmark,
    faCartShopping
} from '@fortawesome/free-solid-svg-icons'

import { faFacebookF, faInstagram, faXTwitter, faWhatsapp, faPinterest } from '@fortawesome/free-brands-svg-icons'


library.add(
    faFacebookF,
    faInstagram,
    faXTwitter,
    faWhatsapp, 
    faPhone,
    faLocationDot,
    faAngleUp,
    faCircleInfo,
    faArrowRight,
    faChevronLeft,
    faChevronRight,
    faEnvelope,
    faArrowsRotate,
    faLocationArrow,
    faAngleDown,
    faArrowLeft, 
    faPinterest,
    faSquarePlus,
    faSquareMinus,
    faGear,
    faPenToSquare,
    faTrashCan,
    faCircleCheck,
    faCircleXmark,
    faCartShopping
)

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .use(router) 
    .use(pinia)
    .use(VueTelInput)
    .use(vueCountryRegionSelect)
    .use(I18NextVue, {i18next})
    .component('vue-cookie-accept-decline', VueCookieAcceptDecline)
    .mount('#app')