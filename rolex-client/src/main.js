import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import VueTelInput from 'vue-tel-input';
import 'vue-tel-input/vue-tel-input.css';


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
    faArrowLeft
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
    faArrowLeft, faPinterest
)

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .use(router) 
    .use(VueTelInput)
    .component('vue-cookie-accept-decline', VueCookieAcceptDecline)
    .mount('#app')