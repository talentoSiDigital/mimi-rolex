import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

import { createPinia } from 'pinia'
import vueCountryRegionSelect from 'vue3-country-region-select'


// Defining pinia
const pinia = createPinia()


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
  faCartShopping,
  faCircleExclamation,
  faSpinner,faSortDown,
  faSortUp,
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
  faCartShopping,
  faCircleExclamation,
  faSpinner,faSortDown,
  faSortUp,
)

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .use(router)
  .use(pinia)
  .use(vueCountryRegionSelect)
  .mount('#app')