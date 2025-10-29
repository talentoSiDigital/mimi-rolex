import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import './style.css'

import { createHead } from '@unhead/vue/client'
import { createPinia } from 'pinia'
import VueLazyLoad from 'vue3-lazyload'






/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import {
    faAngleDown,
    faAngleUp,
    faArrowDownZA,
    faArrowLeft,
    faArrowRight,
    faArrowsRotate,
    faArrowUpAZ,
    faArrowUpRightFromSquare,
    faCartShopping,
    faChevronLeft,
    faChevronRight,
    faCircleCheck,
    faCircleInfo,
    faCircleXmark,
    faComment,
    faEnvelope,
    faFilter,
    faGear,
    faLocationArrow,
    faLocationDot,
    faMagnifyingGlass,
    faMinus,
    faPenToSquare,
    faPhone,
    faPlus,
    faSortDown,
    faSortUp,
    faSpinner,
    faSquareMinus,
    faSquarePlus,
    faTrashCan,
    faXmark
} from '@fortawesome/free-solid-svg-icons'

import { faFacebookF, faInstagram, faPinterest, faWhatsapp, faXTwitter } from '@fortawesome/free-brands-svg-icons'


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
    faSortDown,
    faSortUp,
    faCartShopping,
    faSpinner,
    faComment,
    faMagnifyingGlass,
    faXmark,
    faMinus,
    faPlus,
    faArrowUpRightFromSquare,
    faFilter,
    faArrowUpAZ,
    faArrowDownZA
)
// Defining pinia
const pinia = createPinia()
const head = createHead()

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .use(router) 
    .use(pinia)
    .use(head)
    .use(VueLazyLoad)
    .mount('#app')