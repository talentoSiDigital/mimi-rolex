import { createRouter, createWebHistory } from "vue-router"
import BreadCrumb from "./components/navigation-components/BreadCrumb.vue"


const router = createRouter({
  history: createWebHistory(),
  routes: [
    // Main Route
    {
      path: "/",
      name: "Home",
      component: ()=>import("./views/Home.view.vue"),
      meta: {
        title: "Mimi Joyería | Distribuidor Oficial Rolex",
        breadcrumb:"HomePage"
      }
    },
    // ROLEX STATIC ROUTES
    {
      path: "/rolex/descubre-rolex",
      name: "rolex",
      component: ()=>import("./views/Rolex/Rolex.view.vue"),
      meta: {
        title: "Distribuidor Oficial Rolex en Venezuela  | Mimi Joyería",
        description: "Mimi Joyería en Venezuela se enorgullece de formar parte de la red mundial de Distribuidores Oficiales Rolex, autorizados para vender y realizar el mantenimiento de los relojes Rolex.",
        breadcrumb: "DescubreRolex"
      }
    }, 
   
    {
      path: "/rolex/mantenimiento",
      name: "mantenimiento-rolex",
      component:()=>import("./views/Rolex/RolexMantenimiento.view.vue"),
      meta: {
        title: "Mantenimiento Rolex  | Mimi Joyería",
        description:"Mimi Joyería se enorgullece de formar parte de la red de Distribuidores Oficiales Rolex de relojeros formados. Puede confiarnos cualquier tipo de procedimiento de mantenimiento.",
        breadcrumb:"Mantenimiento"
      }

    },
    {
      path: "/rolex/procedimiento-mantenimiento",
      name: "mantenimiento-rolex-procedimiento",
      component:()=>import("./views/Rolex/RolexMantenimientoProcedimiento.view.vue") ,
      meta: {
        title: "Procedimiento de mantenimiento Rolex | Mimi Joyería ",
        description:"Explore el procedimiento del mantenimiento Rolex en Mimi Joyería, su Distribuidor Oficial Rolex para el cuidado y el mantenimiento experto de su reloj Rolex.",
        breadcrumb:"ProcedimientoMantenimiento "

      }

    },
    {
      path: "/rolex/historia",
      name: "rolex-historia",
      component:()=>import("./views/Rolex/RolexHistoria.view.vue"),
      meta: {
        title: "Historia  | Mimi Joyería ",
        breadcrumb:"Historia"
      }
    },

    {
      path: "/rolex/watchmaking",
      name: "rolex-watchmaking",
      component:()=>import("./views/Rolex/RolexWatchmaking.view.vue"),
      meta: {
        title: "«Savoir-faire» relojero de Rolex | Mimi Joyería",
        description: "Descubra el enfoque «superlative» de Rolex al «savoir-faire» relojero y conozca más acerca de la constante búsqueda de la excelencia de Rolex en Mimi Joyería en Venezuela.",
        breadcrumb:"Watchmaking"
      }
    }
    ,
    {
      path: "/rolex/contacto",
      name: "rolex-contacto",
      component:()=>import("./views/Rolex/RolexContacto.view.vue"),
      meta: {
        title: "Contacto Mimi Joyería en Venezuela - Distribuidor Oficial Rolex",
        meta:"Póngase en contacto con Mimi Joyería y deje que le ayudemos a escoger un Rolex o a dar respuestas a sus consultas.",
        breadcrumb:"Contacto"
      }
    }
    ,
    {
      path: "/rolex/formulario-contacto",
      name: "rolex-contacto-enviar-mensaje",
      component:()=>import("./views/Rolex/RolexContactMessage.view.vue"),
      meta: {
        title: "Formulario de contacto | Mimi Joyería",
        meta:"Póngase en contacto con su Distribuidor Oficial Rolex Mimi Joyería para obtener más información sobre nuestros servicios o cualquier consulta sobre Rolex que pueda tener",
        breadcrumb:"FormularioContacto"
      }
    },
  
    // ----NEW MODELS ROLEX SECTION------
    {
      path: "/rolex/nuevos-relojes",
      name: "rolex-nuevos-modelos",
      component:()=>import("./views/Rolex/RolexNewModels.view.vue"),
      meta: {
        title: "Nuevos Modelos Rolex 2024  | Mimi Joyería ",
        description:"Mimi Joyería presenta la última colección de relojes de lujo suizos de Rolex.Descubra las características únicas de los nuevos modelos de este año.",
        breadcrumb:"NuevosModelos"

      }
    },
    {
      path: "/rolex/nuevos-modelos-2024/1908",
      name: "rolex-nuevos-modelos-1908",
      component:()=>import("./views/Rolex/new-models/New1908.view.vue"),
      meta: {
        title: "1908 | Nuevos Modelos 2024  | Mimi Joyería ",
        breadcrumb:"NuevosModelos/1908"

      }
    },
    {
      path: "/rolex/nuevos-modelos-2024/cosmograph-daytona",
      name: "rolex-nuevos-modelos-cosmograph-daytona",
      component:()=>import("./views/Rolex/new-models/NewCosmograph.view.vue"),
      meta: {
        title: "Cosmograph Daytona | Nuevos Modelos 2024  | Mimi Joyería ",
        breadcrumb:"NuevosModelos/CosmographDaytona"

      }
    },
    {
      path: "/rolex/nuevos-modelos-2024/day-date",
      name: "rolex-nuevos-modelos-day-date",
      component:()=>import("./views/Rolex/new-models/NewDayDate.view.vue"),
      meta: {
        title: "DayDate | Nuevos Modelos 2024  | Mimi Joyería ",
        breadcrumb:"NuevosModelos/DayDate"

      }
    },
    {
      path: "/rolex/nuevos-modelos-2024/deepsea",
      name: "rolex-nuevos-modelos-deepsea",
      component:()=>import("./views/Rolex/new-models/NewDeepsea.view.vue"),
      meta: {
        title: "Deepsea | Nuevos Modelos 2024  | Mimi Joyería ",
        breadcrumb:"NuevosModelos/Deepsea"

      }
    },
    {
      path: "/rolex/nuevos-modelos-2024/gmt-master-ii",
      name: "rolex-nuevos-modelos-gmt-master-ii",
      component:()=>import("./views/Rolex/new-models/NewGMT.view.vue"),
      meta: {
        title: "GMT Master II | Nuevos Modelos 2024  | Mimi Joyería ",
        breadcrumb:"NuevosModelos/GMTMaster"

      }
    },
    {
      path: "/rolex/nuevos-modelos-2024/sky-dweller",
      name: "rolex-nuevos-modelos-sky-dweller",
      component:()=>import("./views/Rolex/new-models/NewSkyDweller.view.vue"),
      meta: {
        title: "Sky Dweller | Nuevos Modelos 2024  | Mimi Joyería ",
        breadcrumb:"NuevosModelos/SkyDweller"

      }
    },

    // ---------WORLD OF ROLEX SECTION ROUTES------------
    {
      path: "/rolex/world-of-rolex",
      name: "world-of-rolex-hub",
      component:()=>import("./views/Rolex/RolexWORHub.view.vue"),
      meta: {
        title: "El mundo de Rolex | Mimi Joyería ",
        description:"Explore el mundo de Rolex. Descubra datos y artículos que demuestran la esencia de Rolex y manténgase al día con las últimas noticias de Rolex | Mimi Joyería",
        breadcrumb:"WorldOfRolex"
      }
    },
    {
      path: "/rolex/world-of-rolex/viaje-al-corazon-del-universo-rolex",
      name: "world-of-rolex-article-1",
      component:()=>import("./views/Rolex/articles/RolexWORArticle1.view.vue"),
      meta: {
        title: "Viaje al corazón del universo Rolex - World Of Rolex | Mimi Joyería ",
        breadcrumb:"WorldOfRolex/ViajeAlCorazonDelUniversoRolex"
      }
    },
    {
      path: "/rolex/world-of-rolex/sail-gp",
      name: "world-of-rolex-article-2",
      component:()=>import("./views/Rolex/articles/RolexWORArticle2.view.vue") ,
      meta: {
        title: "Sail GP - World Of Rolex | Mimi Joyería ",
        breadcrumb:"WorldOfRolex/SailGP"
      }
    },
    {
      path: "/rolex/world-of-rolex/rolex-grand-slam",
      name: "world-of-rolex-article-3",
      component:()=>import("./views/Rolex/articles/RolexWORArticle3.view.vue"),
      meta: {
        title: "Rolex Grand Slam - World Of Rolex | Mimi Joyería ",
        breadcrumb:"WorldOfRolex/RolexGrandSlam"
      }
    },
    {
      path: "/rolex/world-of-rolex/las-24-horas-de-le-mans",
      name: "world-of-rolex-article-4",
      component:()=>import("./views/Rolex/articles/RolexWORArticle4.view.vue"),
      meta: {
        title: "Las 24 Horas de Le Mans - World Of Rolex | Mimi Joyería ",
        breadcrumb:"WorldOfRolex/Las24HorasDeLemans"
      }
    },
    {
      path: "/rolex/world-of-rolex/rolex-y-the-championships-wimbledon",
      name: "world-of-rolex-article-5",
      component:()=>import("./views/Rolex/articles/RolexWORArticle5.view.vue"),
      meta: {
        title: "Rolex y The Championship, Wimbledon - World Of Rolex | Mimi Joyería ",
        breadcrumb:"WorldOfRolex/RolexYTheChampionshipsWimbledon"
      }
    },
    {
      path: "/rolex/world-of-rolex/rolex-y-the-amundi-evian-championship",
      name: "world-of-rolex-article-6",
      component:()=>import("./views/Rolex/articles/RolexWORArticle6.view.vue"),
      meta: {
        title: "Rolex y The Amundi Evian Championship - World Of Rolex | Mimi Joyería ",
        breadcrumb:"WorldOfRolex/RolexYTheAmundiEvianChampionship"
      }
    },
    {
      path: "/rolex/world-of-rolex/rolex-y-the-open",
      name: "world-of-rolex-article-7",
      component:()=>import("./views/Rolex/articles/RolexWORArticle7.view.vue"),
      meta: {
        title: "Rolex y The Open - World Of Rolex | Mimi Joyería ",
        breadcrumb:"WorldOfRolex/RolexYTheOpen"
      }
    },
    {
      path: "/rolex/world-of-rolex/rolex-y-the-us-open",
      name: "world-of-rolex-article-8",
      component:()=>import("./views/Rolex/articles/RolexWORArticle8.view.vue"),
      meta: {
        title: "Rolex y The US Open - World Of Rolex | Mimi Joyería ",
        breadcrumb:"WorldOfRolex/RolexYTheUSOpen"
      }
    },
    {
      path: "/rolex/world-of-rolex/rolex-y-la-filarmonica-de-viena",
      name: "world-of-rolex-article-9",
      component:()=>import("./views/Rolex/articles/RolexWORArticle9.view.vue"),
      meta: {
        title: "Rolex y la Filarmónica de Viena - World Of Rolex | Mimi Joyería ",
        breadcrumb:"WorldOfRolex/RolexYTheUSOpen"
      }
    },

 
  
    // ****************

    // ROLEX WATCHES DYNAMIC ROUTES 
    {
      path: "/rolex/relojes",
      name: "coleccion-rolex",
      component:()=>import("./views/Rolex/RolexWatches.view.vue"),
      meta: {
        title: "Relojes Rolex en Venezuela | Mimi Joyería",
        description: "Descubra los relojes Rolex en línea en Mimi Joyería, Distribuidor Oficial autorizado para vender relojes Rolex para hombre y mujer",
        breadcrumb:"Relojes"
      }
    },
    
    {
      path: "/rolex/:id",
      name: "rolex-coleccion",
      component:()=>import("./views/Rolex/RolexWatchCollection.view.vue"),
      meta: {
        title: " Mimi Joyería ",
        breadcrumb:"ColeccionRolex"
      }
    },
    {
      path: "/rolex/:collectionName-:id",
      name: "relojes-rolex",
      component:()=>import("./views/Rolex/RolexWatchDetail.view.vue") ,
      meta: {
        title: " Mimi Joyería ",
        breadcrumb:"Modelo"

      }
    },
    // ****************
  
    // MIMI STATIC ROUTES

      {
      path: "/tudor",
      name: "tudor",
      component: ()=>import("./views/Mimi/Tudor.view.vue"),
      meta: {
        title: " Tudor | Mimi Joyería " 
      }
    }
    
    ,
    {
      path: "/relojeria",
      name: "relojeria",
      component: ()=>import("./views/Mimi/Relojeria.view.vue"),
      meta: {
        title: "Relojeria | Mimi Joyería "
      }
    }
    ,
    {
      path: "/joyeria",
      name: "joyeria",
      component: ()=>import("./views/Mimi/Joyeria.view.vue"),
      meta: {
        title: "Joyería  | Mimi Joyería "
      }
    },
    {
      path: "/sobre-mimi",
      name: "sobre-mimi",
      component: ()=>import("./views/Mimi/SobreMimi.view.vue"),
      meta: {
        title: "Sobre Mimi| Mimi Joyería "
      }
    }
    ,
    {
      path: "/contactenos",
      name: "contactenos",
      component: ()=>import("./views/Mimi/Contacto.view.vue"),
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
      component: ()=>import("./views/Tienda/StoreJoyeria.view.vue"),
      meta: {
        title: "  Mimi Joyería "
      },

    }

    ,
    {
      path: "/relojeria/:id",
      name: "reloj",
      component: ()=>import("./views/Tienda/StoreRelojeria.view.vue"),
      meta: {
        title: "  Mimi Joyería "
      },

    }
    ,
    {
      path: "/relojeria/:serie/:id",
      name: "relojProducto",
      component: ()=>import("./views/Tienda/StoreRelojeriaDetail.view.vue"),
      meta: {
        title: "  Mimi Joyería "
      },

    }
    ,
    {
      path: "/joyeria/:serie/:id",
      name: "joyeriaProducto",
      component: ()=>import("./views/Tienda/StoreJoyeriaDetail.view.vue"),
      meta: {
        title: "  Mimi Joyería "
      },

    }
    ,
    {
      path: "/:notFound",
      name: "notFound",
      component: ()=>import("./views/404.view.vue"),
      meta: {
        title: "Pagina no encontrada -  Mimi Joyería "
      },

    }
    ,
    {
      path: "/tudor-newsletter/:id",
      name: "tudorNewsletter",
      component: ()=>import("./views/Newsletter.vue"),
      meta: {
        title: "Tudor -  Mimi Joyería "
      },

    },
    // ****************
    // AUTH AND USER ROUTES
    ,
    {
      path: "/login",
      name: "login",
      component: ()=>import("./views/Admin/Login.view.vue"),
      meta: {
        title: "Iniciar sesion  | Mimi Joyería "
      }
    }
    ,
    
    {
      path: "/registrar",
      name: "registrar",
      component: ()=>import("./views/Admin/Register.view.vue"),
      meta: {
        title: "Registrar  | Mimi Joyería "
      }
    }
    ,
    
    {
      path: "/logout",
      name: "logout",
      component: ()=>import("./views/Admin/Logout.view.vue"),
      meta: {
        title: "Registrar  | Mimi Joyería "
      }
    }
    
    ,
    
    {
      path: "/carrito",
      name: "carrito",
      component: ()=>import('./components/dashboard/ShoppingCart.vue'),
      meta: {
        title: 'Carrito De Compras  | Mimi Joyería '
      }
    }
    ,
    {
      path: "/checkout",
      name: "checkout",
      component: ()=>import('./components/dashboard/Checkout.vue'),
      meta: {
        title: 'Compra exitosa  | Mimi Joyería '
      }
    }
    ,
    {
      path: "/authorized",
      name: "authorized",
      component: ()=>import('./components/dashboard/Authorized.vue'),
      meta: {
        title: 'Compra exitosa  | Mimi Joyería '
      }
    }
    ,
    
    // {
    //   path: "/carrito",
    //   name: "carrito",
    //   component: ()=>import('./components/dashboard/ShoppingCart.vue'),
    //   meta: {
    //     title: 'Carrito De Compras  | Mimi Joyería '
    //   }
    // }
    // ,
    // {
    //   path: "/checkout",
    //   name: "checkout",
    //   component: ()=>import('./components/dashboard/Checkout.vue'),
    //   meta: {
    //     title: 'Compra exitosa  | Mimi Joyería '
    //   }
    // }
    // ,
    // {
    //   path: "/authorized",
    //   name: "authorized",
    //   component: ()=>import('./components/dashboard/Authorized.vue'),
    //   meta: {
    //     title: 'Compra exitosa  | Mimi Joyería '
    //   }
    // }
    // ,
    
    // {
    //   path: "/test",
    //   name: "",
    //   component: ()=>import("./views/Testing.vue"),
    //   meta: {
    //     title: "  | Mimi Joyería "
    //   }
    // }
    
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


router.beforeEach((to, from, next) => {
  const link = "https://mimijoyeria.com"
  const description = to.meta.description
  const canonical = document.querySelector("link[rel='canonical']")
  canonical.setAttribute('href', `${link}${to.fullPath}`);


  
  


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


  descriptionElement.setAttribute('content', description || "")
  // Continue resolving the route
  next()
})

export default router