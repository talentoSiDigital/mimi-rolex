import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

/* import router from './router' */

import VueCookieAcceptDecline from 'vue-cookie-accept-decline';
import 'vue-cookie-accept-decline/dist/vue-cookie-accept-decline.css';



/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import {
    faMagnifyingGlass,
    faAngleDown,
    faIndustry,
    faHandshake,
    faAward,
    faHandsHoldingCircle,
    faCircleCheck,
    faEnvelope,
    faPhone,
    faLocationDot,
    faXmark, 
    faBackward, 
    faAngleUp
} from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faInstagram, faXTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons'


library.add(
    faMagnifyingGlass,
    faFacebookF,
    faInstagram,
    faAngleDown,
    faIndustry,
    faHandshake,
    faAward,
    faHandsHoldingCircle,
    faCircleCheck,
    faEnvelope,
    faPhone,
    faLocationDot,
    faXTwitter,
    faXmark, faWhatsapp, faBackward, faAngleUp
)



createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .use(router) 
    .component('vue-cookie-accept-decline', VueCookieAcceptDecline)
    .mount('#app')