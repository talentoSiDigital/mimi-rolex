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
    faPhone,
    faLocationDot,
    faAngleUp,
    faCircleInfo,
    faArrowRight
} from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faInstagram, faXTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons'


library.add(
    faFacebookF,
    faInstagram,
    faXTwitter,
    faWhatsapp, 
    faPhone,
    faLocationDot,
    faAngleUp,
    faCircleInfo,
    faArrowRight
)



createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .use(router) 
    .component('vue-cookie-accept-decline', VueCookieAcceptDecline)
    .mount('#app')