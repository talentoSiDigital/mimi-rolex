import { createRouter, createWebHistory } from "vue-router"
import BreadCrumb from "./components/navigation-components/BreadCrumb.vue"
import { useLoaderStore } from './store/loaderState';
import {usePostHog} from './utils/posthog'
const router = createRouter({
  history: createWebHistory(),
  routes: [
    // Main Route

    {
      path: "/",
      name: "Home",
      component: () => import("./views/Home.view.vue"),
      meta: {
        title: "Mimi Joyería | Distribuidor Oficial Rolex",
        breadcrumb: "HomePage"
        
      }
    },
    // ROLEX STATIC ROUTES
    {
      path: "/rolex/descubre-rolex",
      name: "rolex",
      component: () => import("./views/Rolex/Rolex.view.vue"),
      meta: {
        title: "Distribuidor Oficial Rolex en Venezuela  | Mimi Joyería",
        description: "Mimi Joyería en Venezuela se enorgullece de formar parte de la red mundial de Distribuidores Oficiales Rolex, autorizados para vender y realizar el mantenimiento de los relojes Rolex.",
        breadcrumb: "DescubreRolex",
        pageType:"home page"
       
      }
    },

    {
      path: "/rolex/mantenimiento",
      name: "mantenimiento-rolex",
      component: () => import("./views/Rolex/RolexMantenimiento.view.vue"),
      meta: {
        title: "Mantenimiento Rolex  | Mimi Joyería",
        description: "Mimi Joyería se enorgullece de formar parte de la red de Distribuidores Oficiales Rolex de relojeros formados. Puede confiarnos cualquier tipo de procedimiento de mantenimiento.",
        breadcrumb: "Mantenimiento",
        pageType:"servicing your rolex page"
      }

    },
   
    {
      path: "/rolex/historia",
      name: "rolex-historia",
      component: () => import("./views/Rolex/RolexHistoria.view.vue"),
      meta: {
        title: "Historia  | Mimi Joyería ",
        breadcrumb: "Historia",
        pageType:"history page"
      }
    },

    {
      path: "/rolex/watchmaking",
      name: "rolex-watchmaking",
      component: () => import("./views/Rolex/RolexWatchmaking.view.vue"),
      meta: {
        title: "«Savoir-faire» relojero de Rolex | Mimi Joyería",
        description: "Descubra el enfoque «superlative» de Rolex al «savoir-faire» relojero y conozca más acerca de la constante búsqueda de la excelencia de Rolex en Mimi Joyería en Venezuela.",
        breadcrumb: "Watchmaking",
        pageType:"watchmaking page"

      }
    }
    ,
    {
      path: "/rolex/contacto",
      name: "rolex-contacto",
      component: () => import("./views/Rolex/RolexContacto.view.vue"),
      meta: {
        title: "Contacto Mimi Joyería en Venezuela - Distribuidor Oficial Rolex",
        meta: "Póngase en contacto con Mimi Joyería y deje que le ayudemos a escoger un Rolex o a dar respuestas a sus consultas.",
        breadcrumb: "Contacto",
        pageType:"contact page"

      }
    }
    ,
    {
      path: "/rolex/formulario-contacto",
      name: "rolex-contacto-enviar-mensaje",
      component: () => import("./views/Rolex/RolexContactMessage.view.vue"),
      meta: {
        title: "Formulario de contacto | Mimi Joyería",
        meta: "Póngase en contacto con su Distribuidor Oficial Rolex Mimi Joyería para obtener más información sobre nuestros servicios o cualquier consulta sobre Rolex que pueda tener",
        breadcrumb: "FormularioContacto",
        pageType:"article page"

      },
      props: true
    },

    // ----NEW MODELS ROLEX SECTION------
    {
      path: "/rolex/nuevos-relojes",
      name: "rolex-nuevos-modelos",
      component: () => import("./views/Rolex/RolexNewModels.view.vue"),
      meta: {
        title: "Nuevos Modelos Rolex 2025  | Mimi Joyería ",
        description: "Mimi Joyería presenta la última colección de relojes de lujo suizos de Rolex. Descubra las características únicas de los nuevos modelos de este año.",
        breadcrumb: "NuevosModelos",
        pageType:"new watches page"

      }
    },
    {
      path: "/rolex/nuevos-modelos-2025/:id",
      name: "rolex-nuevos-relojes-2025",
      component: () => import("./views/Rolex/NewModelCollection.view.vue"),
      meta: {
        title: " Nuevos Modelos 2024  | Mimi Joyería ",
        breadcrumb: "NuevosModelos",
        pageType:"family page 2025",
        pageFamily:true

      }
    },
   

    // ---------WORLD OF ROLEX SECTION ROUTES------------
    {
      path: "/rolex/world-of-rolex",
      name: "world-of-rolex-hub",
      component: () => import("./views/Rolex/RolexWORHub.view.vue"),
      meta: {
        title: "El mundo de Rolex | Mimi Joyería ",
        description: "Explore el mundo de Rolex. Descubra datos y artículos que demuestran la esencia de Rolex y manténgase al día con las últimas noticias de Rolex | Mimi Joyería",
        breadcrumb: "WorldOfRolex",
        pageType:"article hub page"
      }
    },
    {
      path: "/rolex/world-of-rolex/viaje-al-corazon-del-universo-rolex",
      name: "world-of-rolex-article-1",
      component: () => import("./views/Rolex/articles/RolexWORArticle1.view.vue"),
      meta: {
        title: "Viaje al corazón del universo Rolex - World Of Rolex | Mimi Joyería ",
        breadcrumb: "WorldOfRolex/ViajeAlCorazonDelUniversoRolex",
        pageType:"article page"
      }
    },
    {
      path: "/rolex/world-of-rolex/sail-gp",
      name: "world-of-rolex-article-2",
      component: () => import("./views/Rolex/articles/RolexWORArticle2.view.vue"),
      meta: {
        title: "Sail GP - World Of Rolex | Mimi Joyería ",
        breadcrumb: "WorldOfRolex/SailGP",
        pageType:"article page"
      }
    },
    {
      path: "/rolex/world-of-rolex/rolex-grand-slam",
      name: "world-of-rolex-article-3",
      component: () => import("./views/Rolex/articles/RolexWORArticle3.view.vue"),
      meta: {
        title: "Rolex Grand Slam - World Of Rolex | Mimi Joyería ",
        breadcrumb: "WorldOfRolex/RolexGrandSlam",
        pageType:"article page"
      }
    },
    {
      path: "/rolex/world-of-rolex/las-24-horas-de-le-mans",
      name: "world-of-rolex-article-4",
      component: () => import("./views/Rolex/articles/RolexWORArticle4.view.vue"),
      meta: {
        title: "Las 24 Horas de Le Mans - World Of Rolex | Mimi Joyería ",
        breadcrumb: "WorldOfRolex/Las24HorasDeLemans",
        pageType:"article page"
      }
    },
    {
      path: "/rolex/world-of-rolex/rolex-y-the-championships-wimbledon",
      name: "world-of-rolex-article-5",
      component: () => import("./views/Rolex/articles/RolexWORArticle5.view.vue"),
      meta: {
        title: "Rolex y The Championship, Wimbledon - World Of Rolex | Mimi Joyería ",
        breadcrumb: "WorldOfRolex/RolexYTheChampionshipsWimbledon",
        pageType:"article page"
      }
    },
    {
      path: "/rolex/world-of-rolex/rolex-y-the-amundi-evian-championship",
      name: "world-of-rolex-article-6",
      component: () => import("./views/Rolex/articles/RolexWORArticle6.view.vue"),
      meta: {
        title: "Rolex y The Amundi Evian Championship - World Of Rolex | Mimi Joyería ",
        breadcrumb: "WorldOfRolex/RolexYTheAmundiEvianChampionship",
        pageType:"article page"
      }
    },
    {
      path: "/rolex/world-of-rolex/rolex-y-the-open",
      name: "world-of-rolex-article-7",
      component: () => import("./views/Rolex/articles/RolexWORArticle7.view.vue"),
      meta: {
        title: "Rolex y The Open - World Of Rolex | Mimi Joyería ",
        breadcrumb: "WorldOfRolex/RolexYTheOpen",
        pageType:"article page"
      }
    },
    {
      path: "/rolex/world-of-rolex/rolex-y-the-us-open",
      name: "world-of-rolex-article-8",
      component: () => import("./views/Rolex/articles/RolexWORArticle8.view.vue"),
      meta: {
        title: "Rolex y The US Open - World Of Rolex | Mimi Joyería ",
        breadcrumb: "WorldOfRolex/RolexYTheUSOpen",
        pageType:"article page"
      }
    },
    {
      path: "/rolex/world-of-rolex/rolex-y-la-filarmonica-de-viena",
      name: "world-of-rolex-article-9",
      component: () => import("./views/Rolex/articles/RolexWORArticle9.view.vue"),
      meta: {
        title: "Rolex y la Filarmónica de Viena - World Of Rolex | Mimi Joyería ",
        breadcrumb: "WorldOfRolex/RolexYTheUSOpen",
        pageType:"article page"
      }
    },
    {
      path: "/rolex/world-of-rolex/resistencia",
      name: "world-of-rolex-article-10",
      component: () => import("./views/Rolex/articles/RolexWORArticle10.view.vue"),
      meta: {
        title: "Resistencia - World Of Rolex | Mimi Joyería ",
        breadcrumb: "WorldOfRolex/RolexYTheUSOpen",
        pageType:"article page"
      }
    },
    {
      path: "/rolex/world-of-rolex/sailgp-championship",
      name: "world-of-rolex-article-11",
      component: () => import("./views/Rolex/articles/RolexWORArticle11.view.vue"),
      meta: {
        title: "Rolex SailGP Championship - World Of Rolex | Mimi Joyería ",
        breadcrumb: "WorldOfRolex/SailGP",
        pageType:"article page"
      }
    },



    // ****************

    // ROLEX WATCHES DYNAMIC ROUTES 
    {
      path: "/rolex/relojes",
      name: "coleccion-rolex",
      component: () => import("./views/Rolex/RolexWatches.view.vue"),
      meta: {
        title: "Relojes Rolex en Venezuela | Mimi Joyería",
        description: "Descubra los relojes Rolex en línea en Mimi Joyería, Distribuidor Oficial autorizado para vender relojes Rolex para hombre y mujer",
        breadcrumb: "Relojes",
        pageType:"collection page"
      }
    },

      {
      path: "/rolex/:collectionName-:id",
      name: "relojes-rolex",
      component: () => import("./views/Rolex/RolexWatchDetail.view.vue"),
      meta: {
        title: " Mimi Joyería ",
        breadcrumb: "Modelo",
        pageType:"model page",
        pageFamily:"",
        productRMC:""

      }
    },

    {
      path: "/rolex/cosmograph-daytona",
      name: "rolex-coleccion-cosmograph-daytona",
      component: () => import("./views/Rolex/RolexWatchCollection.view.vue"),
      meta: {
        title: "Mimi Joyería ",
        breadcrumb: "ColeccionRolex",
        pageType:"family page",
        pageFamily:"cosmograph-daytona"
      }
    },

    {
      path: "/rolex/1908",
      name: "rolex-coleccion-1908",
      component: () => import("./views/Rolex/RolexWatchCollection.view.vue"),
      meta: {
        title: "Mimi Joyería ",
        breadcrumb: "ColeccionRolex",
        pageType:"family page",
        pageFamily:"1908"
      }
    },
    {
      path: "/rolex/yacht-master",
      name: "rolex-coleccion-yacht-master",
      component: () => import("./views/Rolex/RolexWatchCollection.view.vue"),
      meta: {
        title: "Mimi Joyería ",
        breadcrumb: "ColeccionRolex",
        pageType:"family page",
        pageFamily:"yacht-master"
      }
    },

    {
      path: "/rolex/sky-dweller",
      name: "rolex-coleccion-sky-dweller",
      component: () => import("./views/Rolex/RolexWatchCollection.view.vue"),
      meta: {
        title: "Mimi Joyería ",
        breadcrumb: "ColeccionRolex",
        pageType:"family page",
        pageFamily:"sky-dweller"
      }
    },
    {
      path: "/rolex/gmt-master-ii",
      name: "rolex-coleccion-gmt-master-ii",
      component: () => import("./views/Rolex/RolexWatchCollection.view.vue"),
      meta: {
        title: "Mimi Joyería ",
        breadcrumb: "ColeccionRolex",
        pageType:"family page",
        pageFamily:"gmt-master-ii"
      }
    },

    {
      path: "/rolex/explorer",
      name: "rolex-coleccion-explorer",
      component: () => import("./views/Rolex/RolexWatchCollection.view.vue"),
      meta: {
        title: "Mimi Joyería ",
        breadcrumb: "ColeccionRolex",
        pageType:"family page",
        pageFamily:"explorer"
      }
    },
    {
      path: "/rolex/oyster-perpetual",
      name: "rolex-coleccion-oyster-perpetual",
      component: () => import("./views/Rolex/RolexWatchCollection.view.vue"),
      meta: {
        title: "Mimi Joyería ",
        breadcrumb: "ColeccionRolex",
        pageType:"family page",
        pageFamily:"oyster-perpetual"
      }
    },

    {
      path: "/rolex/day-date",
      name: "rolex-coleccion-day-date",
      component: () => import("./views/Rolex/RolexWatchCollection.view.vue"),
      meta: {
        title: "Mimi Joyería ",
        breadcrumb: "ColeccionRolex",
        pageType:"family page",
        pageFamily:"day-date"
      }
    },
    {
      path: "/rolex/datejust",
      name: "rolex-coleccion-datejust",
      component: () => import("./views/Rolex/RolexWatchCollection.view.vue"),
      meta: {
        title: "Mimi Joyería ",
        breadcrumb: "ColeccionRolex",
        pageType:"family page",
        pageFamily:"datejust"
      }
    },

    {
      path: "/rolex/lady-datejust",
      name: "rolex-coleccion-lady-datejust",
      component: () => import("./views/Rolex/RolexWatchCollection.view.vue"),
      meta: {
        title: "Mimi Joyería ",
        breadcrumb: "ColeccionRolex",
        pageType:"family page",
        pageFamily:"lady-datejust"
      }
    },
    {
      path: "/rolex/air-king",
      name: "rolex-coleccion-air-king",
      component: () => import("./views/Rolex/RolexWatchCollection.view.vue"),
      meta: {
        title: "Mimi Joyería ",
        breadcrumb: "ColeccionRolex",
        pageType:"family page",
        pageFamily:"air-king"
      }
    },
    {
      path: "/rolex/land-dweller",
      name: "rolex-coleccion-land-dweller",
      component: () => import("./views/Rolex/RolexWatchCollection.view.vue"),
      meta: {
        title: "Mimi Joyería ",
        breadcrumb: "ColeccionRolex",
        pageType:"family page",
        pageFamily:"land-dweller"
      }
    },

    {
      path: "/rolex/submariner",
      name: "rolex-coleccion-submariner",
      component: () => import("./views/Rolex/RolexWatchCollection.view.vue"),
      meta: {
        title: "Mimi Joyería ",
        breadcrumb: "ColeccionRolex",
        pageType:"family page",
        pageFamily:"submariner"
      }
    },
    {
      path: "/rolex/sea-dweller",
      name: "rolex-coleccion-sea-dweller",
      component: () => import("./views/Rolex/RolexWatchCollection.view.vue"),
      meta: {
        title: "Mimi Joyería ",
        breadcrumb: "ColeccionRolex",
        pageType:"family page",
        pageFamily:"sea-dweller"
      }
    },

    {
      path: "/rolex/deepsea",
      name: "rolex-coleccion-deepsea",
      component: () => import("./views/Rolex/RolexWatchCollection.view.vue"),
      meta: {
        title: "Mimi Joyería ",
        breadcrumb: "ColeccionRolex",
        pageType:"family page",
        pageFamily:"deepsea"
      }
    },
  
    {
      path: "/rolex/busqueda",
      name: "rolex-busqueda",
      component: () => import("./views/Rolex/RolexSearch.view.vue"),
      meta: {
        title: "Busqueda | Mimi Joyería ",
        breadcrumb: "Busqueda",
        pageType:""

      },
      props: route => ({ query: route.query.q })
    },
    {
      path: "/busqueda",
      name: "busqueda",
      component: () => import("./views/Mimi/Search.view.vue"),
      meta: {
        title: "Busqueda | Mimi Joyería ",
        breadcrumb: "Busqueda",
        pageType:""

      },
      props: route => ({ query: route.query.q })
    },
    // ****************

    // MIMI STATIC ROUTES

    {
      path: "/tudor",
      name: "tudor",
      component: () => import("./views/Mimi/Tudor.view.vue"),
      meta: {
        title: " Tudor | Mimi Joyería "
      }
    }

    ,
    {
      path: "/relojeria",
      name: "relojeria",
      component: () => import("./views/Mimi/Tudor.view.vue"),
      meta: {
        title: " Tudor | Mimi Joyería "
      }
    }
    // ,
    // {
    //   path: "/relojeria/novedades/tudor",
    //   name: "relojeria",
    //   component: () => import("./views/Mimi/NovedadesTudor.view.vue"),
    //   meta: {
    //     title: " Novedades Tudor 2025 | Mimi Joyería "
    //   }
    // }

    ,
    {
      path: "/joyeria",
      name: "joyeria",
      component: () => import("./views/Mimi/Joyeria.view.vue"),
      meta: {
        title: "Joyería  | Mimi Joyería "
      }
    },
    {
      path: "/sobre-mimi",
      name: "sobre-mimi",
      component: () => import("./views/Mimi/SobreMimi.view.vue"),
      meta: {
        title: "Sobre Mimi| Mimi Joyería "
      }
    }
    ,
    {
      path: "/contactenos",
      name: "contactenos",
      component: () => import("./views/Mimi/Contacto.view.vue"),
      meta: {
        title: "Contáctenos  | Mimi Joyería "
      }
    }
    ,
    // ****************
    // MIMI STORE ROUTES

    {
      path: "/joyeria/:id",
      name: "joyas",
      component: () => import("./views/Tienda/StoreJoyeria.view.vue"),
      meta: {
        title: "  Mimi Joyería "
      },

    }

    ,
    {
      path: "/relojeria/tudor",
      name: "reloj",
      component: () => import("./views/Tienda/StoreRelojeria.view.vue"),
      meta: {
        title: "  Mimi Joyería "
      },

    }
    ,
    {
      path: "/novedades/tudor",
      name: "novedades",
      component: () => import("./views/Tienda/NovedadesRelojeria.view.vue"),
      meta: {
        title: "  Mimi Joyería "
      },

    }
    ,
    {
      path: "/relojeria/tudor/:id",
      name: "relojProducto",
      component: () => import("./views/Tienda/StoreRelojeriaDetail.view.vue"),
      meta: {
        title: "  Mimi Joyería "
      },

    }
    // ,
    // {
    //   path: "/testing/",
    //   name: "relojProductoasd",
    //   component: () => import("./views/Rolex/Testing.view.vue"),
    //   meta: {
    //     title: "  Mimi Joyería "
    //   },

    // }
    ,
    {
      path: "/joyeria/:serie/:id",
      name: "joyeriaProducto",
      component: () => import("./views/Tienda/StoreJoyeriaDetail.view.vue"),
      meta: {
        title: "  Mimi Joyería "
      },

    }
    ,
    {
      path: "/:pathMatch(.*)*",
      name: "notFound",
      component: () => import("./views/404.view.vue"),
      meta: {
        title: "Pagina no encontrada -  Mimi Joyería "
      },

    }
    ,
    {
      path: "/tudor-newsletter/:id",
      name: "tudorNewsletter",
      component: () => import("./views/Newsletter.vue"),
      meta: {
        title: "Tudor -  Mimi Joyería "
      },

    },
    // ****************
    // AUTH AND USER ROUTES
    
    {
      path: "/login",
      name: "login",
      component: () => import("./views/Admin/Login.view.vue"),
      meta: {
        title: "Iniciar sesion  | Mimi Joyería "
      }
    }
    ,

    {
      path: "/registrar",
      name: "registrar",
      component: () => import("./views/Admin/Register.view.vue"),
      meta: {
        title: "Registrar  | Mimi Joyería "
      }
    }
    ,

    {
      path: "/logout",
      name: "logout",
      component: () => import("./views/Admin/Logout.view.vue"),
      meta: {
        title: "Registrar  | Mimi Joyería "
      }
    }

    ,

    {
      path: "/carrito",
      name: "carrito",
      component: () => import('./components/dashboard/ShoppingCart.vue'),
      meta: {
        title: 'Carrito De Compras  | Mimi Joyería '
      }
    }
    ,
    {
      path: "/checkout",
      name: "checkout",
      component: () => import('./components/dashboard/Checkout.vue'),
      meta: {
        title: 'Compra exitosa  | Mimi Joyería '
      }
    }
    

   
  
    // ,
    // ****************
    // PAYMENT ROUTES



  ],
  scrollBehavior(to, from, savedPosition) {

    return {
      top: 0,
      behavior: "smooth"
    }
  },

})

const { posthog } = usePostHog()



router.beforeEach((to, from, next) => {
  const store = useLoaderStore()
  const link = "https://mimijoyeria.com"
  const description = to.meta.description
  const canonical = document.querySelector("link[rel='canonical']")
  canonical.setAttribute('href', `${link}${to.fullPath}`);
  if (to.name != from.name) {
    store.change()
  }
  const pageType = to.meta.pageType
  if(pageType){
    document.pageType = pageType
  }
  const pageFamily = to.meta.pageFamily
  if(pageFamily){
    document.pageFamily = pageFamily
  }
  if (from.path !== to.path) {
    posthog.capture('$pageleave')
  }


  // window.document.title = toRoute.meta && toRoute.meta.title ? toRoute.meta.title : "Home";
  // Get the page title from the route meta data that we have defined
  // See further down below for how we setup this data
  const title = to.meta.title
  //Take the title from the parameters
  const titleFromParams = to.params.id;
  const descriptionElement = document.querySelector('meta[name="description"]')


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
router.afterEach((to, from, next) => {
  const store = useLoaderStore()
  if (to.name != from.name) {
    store.change()

  }
  posthog.capture('$pageview')


  // Continue resolving the route
})

export default router