import { createRouter, createWebHistory } from 'vue-router'

import Home from './views/Home.view.vue'
// ROLEX COMPONENTS
import Rolex from './views/Rolex/Rolex.view.vue'
import RolexNewModels from './views/Rolex/RolexNewModels.view.vue'
import RolexMantenimiento from './views/Rolex/RolexMantenimiento.view.vue'
import RolexHistoria from './views/Rolex/RolexHistoria.view.vue'
import RolexShowroom from './views/Rolex/RolexShowroom.view.vue'
import RolexWatchmaking from './views/Rolex/RolexWatchmaking.view.vue'
import RolexContacto from './views/Rolex/RolexContacto.view.vue'
import RolexAll from './views/Rolex/RolexAll.view.vue'

import RolexWatchCollection from './views/Rolex/RolexWatchCollection.view.vue'
import RolexWatchDetail from './views/Rolex/RolexWatchDetail.view.vue'



// MIMI SHOWCASE COMPONENTS
import Tudor from './views/Mimi/Tudor.view.vue'
import Relojeria from './views/Mimi/Relojeria.view.vue'
import Joyeria from './views/Mimi/Joyeria.view.vue'
import SobreMimi from './views/Mimi/SobreMimi.view.vue'
import Contacto from './views/Mimi/Contacto.view.vue'
import NotFound404 from './views/404.view.vue'



// MIMI STORE COMPONENTS

import StoreJoyeria from './views/Tienda/StoreJoyeria.view.vue'
import StoreRelojeria from './views/Tienda/StoreRelojeria.view.vue'
import StoreJoyeriaDetail from './views/Tienda/StoreJoyeriaDetail.view.vue'
import StoreRelojeriaDetail from './views/Tienda/StoreRelojeriaDetail.view.vue'

// MIMI ADMIN COMPONENTS
import Login from './views/Admin/Login.view.vue'
import Register from './views/Admin/Register.view.vue'


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
      path: "/contacto",
      name: "contacto",
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
    // ****************
    // ****************
    // ROLEX WATCHES VIEW 
    {
      path: "/coleccion-rolex",
      name: "coleccion-rolex",
      component: RolexAll,
      meta: {
        title: 'Coleccion Rolex | Distribuidor Oficial Rolex'
      }
    },
    {
      path: "/coleccion/:id",
      name: "coleccion",
      component: RolexWatchCollection,
      meta: {
        title: 'Coleccion Rolex - Mimi Joyería | Distribuidor Oficial Rolex'
      }
    },
    {
      path: "/relojes/:id",
      name: "relojes",
      component: RolexWatchDetail,
      meta: {
        title: 'Modelos de Rolex - Mimi Joyería | Distribuidor Oficial Rolex'
      }
    }
    // ****************
    // ****************
    // MIMI STATIC ROUTES
    ,
    {
      path: "/relojeria",
      name: "relojeria",
      component: Relojeria,
      meta: {
        title: 'Relojeria - Mimi Joyería | Distribuidor Oficial Rolex'
      }
    }
    ,
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
    ,
    {
      path: "/contactenos",
      name: "contactenos",
      component: Contacto,
      meta: {
        title: 'Contáctenos  - Mimi Joyería | Distribuidor Oficial Rolex'
      }
    }
    ,
    // ****************
    // ****************
    // MIMI STORE ROUTES

    {
      path: "/joyeria/:id",
      name: "joyas",
      component: StoreJoyeria,
      meta: {
        title: '  Mimi Joyería | Distribuidor Oficial Rolex'
      },

    }

    ,
    {
      path: "/relojeria/:id",
      name: "reloj",
      component: StoreRelojeria,
      meta: {
        title: '  Mimi Joyería | Distribuidor Oficial Rolex'
      },

    }
    ,
    {
      path: "/relojeria/:serie/:id",
      name: "relojProducto",
      component: StoreRelojeriaDetail,
      meta: {
        title: '  Mimi Joyería | Distribuidor Oficial Rolex'
      },

    }
    ,
    {
      path: "/joyeria/:serie/:id",
      name: "joyeriaProducto",
      component: StoreJoyeriaDetail,
      meta: {
        title: '  Mimi Joyería | Distribuidor Oficial Rolex'
      },

    }
    ,
    {
      path: "/:notFound",
      name: "notFound",
      component: NotFound404,
      meta: {
        title: 'Pagina no encontrada -  Mimi Joyería | Distribuidor Oficial Rolex'
      },

    }
    // ****************
    // ****************
    // ADMIN ROUTES
    ,
    {
      path: "/login",
      name: "login",
      component: Login,
      meta: {
        title: '  - Mimi Joyería | Distribuidor Oficial Rolex'
      }
    }
    ,
    
    {
      path: "/registrar",
      name: "registrar",
      component: Register,
      meta: {
        title: '  - Mimi Joyería | Distribuidor Oficial Rolex'
      }
    }
    ,
    // ,
    // {
    //   path: "/",
    //   name: "",
    //   component: Rolex,
    //   meta: {
    //     title: '  - Mimi Joyería | Distribuidor Oficial Rolex'
    //   }
    // }
    // ,

  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        top: 10,
        behavior: 'smooth'
      }
    }
    return { top: 0, behavior: 'smooth', }

  },

})


router.beforeEach((to, from, next) => {

  // window.document.title = toRoute.meta && toRoute.meta.title ? toRoute.meta.title : 'Home';
  // Get the page title from the route meta data that we have defined
  // See further down below for how we setup this data
  const title = to.meta.title
  //Take the title from the parameters
  const titleFromParams = to.params.id;

  // If the route has a title, set it as the page title of the document/page
  if (title) {
    document.title = title
  }
  // If we have a title from the params, extend the title with the title
  // from our params
  if (titleFromParams) {
    const parsedTitleFromParams = titleFromParams.charAt(0).toUpperCase() + titleFromParams.slice(1)

    document.title = `${parsedTitleFromParams.replaceAll("-", " ")} - ${title}`;
  }

  // Continue resolving the route
  next()
})

export default router