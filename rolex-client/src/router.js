import { createRouter, createWebHistory } from 'vue-router'

import Home from './views/Home.view.vue'
// ROLEX ROUTES
import Rolex from './views/Rolex/Rolex.view.vue'
import RolexNewModels from './views/Rolex/RolexNewModels.view.vue'
import RolexMantenimiento from './views/Rolex/RolexMantenimiento.view.vue'
import RolexHistoria from './views/Rolex/RolexHistoria.view.vue'
import RolexShowroom from './views/Rolex/RolexShowroom.view.vue'
import RolexWatchmaking from './views/Rolex/RolexWatchmaking.view.vue'
import RolexContacto from './views/Rolex/RolexContacto.view.vue'

import Relojeria from './views/Relojeria.view.vue'


// MIMI SHOWCASE ROUTES
import Tudor from './views/Tudor.view.vue'
import Joyeria from './views/Joyeria.view.vue'
import SobreMimi from './views/SobreMimi.view.vue'

// MIMI STORE ROUTES



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
      meta: {
        title: 'Mimi Joyería | Distribuidor Oficial Rolex - Mimi Joyería | Distribuidor Oficial Rolex'
      }
    },
    // ROLEX STATIC ROUTES
    {
      path: "/rolex",
      name: "rolex",
      component: Rolex,
      meta: {
        title: 'Rolex en Mimi Joyería  - Mimi Joyería | Distribuidor Oficial Rolex'
      }
    },
    {
      path: "/nuevos-modelos-2023",
      name: "rolex-modelos-2023",
      component: RolexNewModels,
      meta: {
        title: 'Nuevos Modelos 2023  - Mimi Joyería | Distribuidor Oficial Rolex'
      }
    },
    {
      path: "/mantenimiento-rolex",
      name: "mantenimiento-rolex",
      component: RolexMantenimiento,
      meta: {
        title: 'Mantenimiento Rolex  - Mimi Joyería | Distribuidor Oficial Rolex'
      }

    },
    {
      path: "/historia",
      name: "historia",
      component: RolexHistoria,
      meta: {
        title: 'Historia  - Mimi Joyería | Distribuidor Oficial Rolex'
      }
    },
    {
      path: "/showroom",
      name: "showroom",
      component: RolexShowroom,
      meta: {
        title: 'Showroom  - Mimi Joyería | Distribuidor Oficial Rolex'
      }
    }
    ,
    {
      path: "/watchmaking",
      name: "rolex-watchmaking",
      component: RolexWatchmaking,
      meta: {
        title: 'RolexWatchmaking  - Mimi Joyería | Distribuidor Oficial Rolex'
      }
    }
    ,
    {
      path: "/contactenos",
      name: "contactenos",
      component: RolexContacto,
      meta: {
        title: 'Contáctenos  - Mimi Joyería | Distribuidor Oficial Rolex'
      }
    },
    {
      path: "/tudor",
      name: "tudor",
      component: Tudor,
      meta: {
        title: ' Tudor - Mimi Joyería | Distribuidor Oficial Rolex'
      }
    }
    ,
    {
      path: "/relojeria",
      name: "relojeria",
      component: Relojeria,
      meta: {
        title: 'Relojeria - Mimi Joyería | Distribuidor Oficial Rolex'
      }
    },
    {
      path: "/joyeria",
      name: "joyeria",
      component: Joyeria,
      meta: {
        title: 'Joyería  - Mimi Joyería | Distribuidor Oficial Rolex'
      }
    },
    {
      path: "/sobre-mimi",
      name: "sobre-mimi",
      component: SobreMimi,
      meta: {
        title: 'Sobre Mimi- Mimi Joyería | Distribuidor Oficial Rolex'
      }
    }
    // ,
    // {
    //   path: "/",
    //   name: "",
    //   component: Rolex,
    //   meta: {
    //     title: '  - Mimi Joyería | Distribuidor Oficial Rolex'
    //   }
    // }

]})


router.beforeEach((to, from, next) => {
  // Get the page title from the route meta data that we have defined
  // See further down below for how we setup this data
  const title = to.meta.title

  //Take the title from the parameters
  const titleFromParams = to.params.pageTitle;
  // If the route has a title, set it as the page title of the document/page
  if (title) {
    document.title = title
  }
  // If we have a title from the params, extend the title with the title
  // from our params
  if (titleFromParams) {
    document.title = `${titleFromParams} - ${document.title}`;
  }
  // Continue resolving the route
  next()
})

export default router