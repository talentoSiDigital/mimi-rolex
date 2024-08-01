import { createRouter, createWebHistory } from "vue-router"


const router = createRouter({
  history: createWebHistory(),
  routes: [
    // Main Route
    {
      path: "/",
      name: "Home",
      component: ()=>import("./views/Home.view.vue"),
      meta: {
        title: "Mimi Joyería | Distribuidor Oficial Rolex - Mimi Joyería | Distribuidor Oficial Rolex"
      }
    },
    // ROLEX STATIC ROUTES
    {
      path: "/descubre-rolex",
      name: "rolex",
      component: ()=>import("./views/Rolex/Rolex.view.vue"),
      meta: {
        title: "Rolex en Mimi Joyería  - Mimi Joyería | Distribuidor Oficial Rolex"
      }
    }, 
   
    {
      path: "/mantenimiento-rolex",
      name: "mantenimiento-rolex",
      component:()=>import("./views/Rolex/RolexMantenimiento.view.vue"),
      meta: {
        title: "Mantenimiento Rolex  - Mimi Joyería | Distribuidor Oficial Rolex"
      }

    },
    {
      path: "/mantenimiento-rolex/procedimiento",
      name: "mantenimiento-rolex-procedimiento",
      component:()=>import("./views/Rolex/RolexMantenimientoProcedimiento.view.vue") ,
      meta: {
        title: "Procedimiento de mantenimiento Rolex  - Mimi Joyería | Distribuidor Oficial Rolex"
      }

    },
    {
      path: "/historia",
      name: "rolex-historia",
      component:()=>import("./views/Rolex/RolexHistoria.view.vue"),
      meta: {
        title: "Historia  - Mimi Joyería | Distribuidor Oficial Rolex"
      }
    },

    {
      path: "/watchmaking",
      name: "rolex-watchmaking",
      component:()=>import("./views/Rolex/RolexWatchmaking.view.vue"),
      meta: {
        title: "RolexWatchmaking  - Mimi Joyería | Distribuidor Oficial Rolex"
      }
    }
    ,
    {
      path: "/contacto",
      name: "rolex-contacto",
      component:()=>import("./views/Rolex/RolexContacto.view.vue"),
      meta: {
        title: "Contáctenos  - Mimi Joyería | Distribuidor Oficial Rolex"
      }
    }
    ,
    {
      path: "/contacto/enviar-mensaje",
      name: "rolex-contacto-enviar-mensaje",
      component:()=>import("./views/Rolex/RolexContactMessage.view.vue"),
      meta: {
        title: "Enviar mensaje - Mimi Joyería | Distribuidor Oficial Rolex"
      }
    },
  
    // ----NEW MODELS ROLEX SECTION------
    {
      path: "/nuevos-modelos-2024",
      name: "rolex-modelos-2024",
      component:()=>import("./views/Rolex/RolexNewModels.view.vue"),
      meta: {
        title: "Nuevos Modelos 2024  - Mimi Joyería | Distribuidor Oficial Rolex"
      }
    },
    {
      path: "/nuevos-modelos-2024/1908",
      name: "rolex-modelos-1908",
      component:()=>import("./views/Rolex/new-models/New1908.view.vue"),
      meta: {
        title: "1908 | Nuevos Modelos 2024  - Mimi Joyería | Distribuidor Oficial Rolex"
      }
    },
    {
      path: "/nuevos-modelos-2024/cosmograph-daytona",
      name: "rolex-modelos-cosmograph-daytona",
      component:()=>import("./views/Rolex/new-models/NewCosmograph.view.vue"),
      meta: {
        title: "Cosmograph Daytona | Nuevos Modelos 2024  - Mimi Joyería | Distribuidor Oficial Rolex"
      }
    },
    {
      path: "/nuevos-modelos-2024/day-date",
      name: "rolex-modelos-day-date",
      component:()=>import("./views/Rolex/new-models/NewDayDate.view.vue"),
      meta: {
        title: "DayDate | Nuevos Modelos 2024  - Mimi Joyería | Distribuidor Oficial Rolex"
      }
    },
    {
      path: "/nuevos-modelos-2024/deepsea",
      name: "rolex-modelos-deepsea",
      component:()=>import("./views/Rolex/new-models/NewDeepsea.view.vue"),
      meta: {
        title: "Deepsea | Nuevos Modelos 2024  - Mimi Joyería | Distribuidor Oficial Rolex"
      }
    },
    {
      path: "/nuevos-modelos-2024/gmt-master-ii",
      name: "rolex-modelos-gmt-master-ii",
      component:()=>import("./views/Rolex/new-models/NewGMT.view.vue"),
      meta: {
        title: "GMT Master II | Nuevos Modelos 2024  - Mimi Joyería | Distribuidor Oficial Rolex"
      }
    },
    {
      path: "/nuevos-modelos-2024/sky-dweller",
      name: "rolex-modelos-sky-dweller",
      component:()=>import("./views/Rolex/new-models/NewSkyDweller.view.vue"),
      meta: {
        title: "Sky Dweller | Nuevos Modelos 2024  - Mimi Joyería | Distribuidor Oficial Rolex"
      }
    },

    // ---------WORLD OF ROLEX SECTION ROUTES------------
    {
      path: "/world-of-rolex",
      name: "world-of-rolex-hub",
      component:()=>import("./views/Rolex/RolexWORHub.view.vue"),
      meta: {
        title: "World Of Rolex  - Mimi Joyería | Distribuidor Oficial Rolex"
      }
    },
    {
      path: "/world-of-rolex/viaje-al-corazon-del-universo-rolex",
      name: "world-of-rolex-article-1",
      component:()=>import("./views/Rolex/articles/RolexWORArticle1.view.vue"),
      meta: {
        title: "Viaje al corazón del universo Rolex - World Of Rolex - Mimi Joyería | Distribuidor Oficial Rolex"
      }
    },
    {
      path: "/world-of-rolex/sail-gp",
      name: "world-of-rolex-article-2",
      component:()=>import("./views/Rolex/articles/RolexWORArticle2.view.vue") ,
      meta: {
        title: "Sail GP - World Of Rolex - Mimi Joyería | Distribuidor Oficial Rolex"
      }
    },
    {
      path: "/world-of-rolex/rolex-grand-slam",
      name: "world-of-rolex-article-3",
      component:()=>import("./views/Rolex/articles/RolexWORArticle3.view.vue"),
      meta: {
        title: "Rolex Grand Slam - World Of Rolex - Mimi Joyería | Distribuidor Oficial Rolex"
      }
    },
    {
      path: "/world-of-rolex/las-24-horas-de-le-mans",
      name: "world-of-rolex-article-4",
      component:()=>import("./views/Rolex/articles/RolexWORArticle4.view.vue"),
      meta: {
        title: "Las 24 Horas de Le Mans - World Of Rolex - Mimi Joyería | Distribuidor Oficial Rolex"
      }
    },
    {
      path: "/world-of-rolex/rolex-y-the-championships-wimbledon",
      name: "world-of-rolex-article-5",
      component:()=>import("./views/Rolex/articles/RolexWORArticle5.view.vue"),
      meta: {
        title: "Rolex y The Championship, Wimbledon - World Of Rolex - Mimi Joyería | Distribuidor Oficial Rolex"
      }
    },
    {
      path: "/world-of-rolex/rolex-y-the-amundi-evian-championship",
      name: "world-of-rolex-article-5",
      component:()=>import("./views/Rolex/articles/RolexWORArticle6.view.vue"),
      meta: {
        title: "Rolex y The Amundi Evian Championship - World Of Rolex - Mimi Joyería | Distribuidor Oficial Rolex"
      }
    },
    {
      path: "/world-of-rolex/rolex-y-the-open",
      name: "world-of-rolex-article-7",
      component:()=>import("./views/Rolex/articles/RolexWORArticle7.view.vue"),
      meta: {
        title: "Rolex y The Open - World Of Rolex - Mimi Joyería | Distribuidor Oficial Rolex"
      }
    },


 
  
    // ****************

    // ROLEX WATCHES DYNAMIC ROUTES 
    {
      path: "/coleccion-rolex",
      name: "coleccion-rolex",
      component:()=>import("./views/Rolex/RolexWatches.view.vue"),
      meta: {
        title: "Coleccion Rolex | Distribuidor Oficial Rolex"
      }
    },
    
    {
      path: "/coleccion-rolex/:id",
      name: "rolex-coleccion",
      component:()=>import("./views/Rolex/RolexWatchCollection.view.vue"),
      meta: {
        title: "Coleccion Rolex - Mimi Joyería | Distribuidor Oficial Rolex"
      }
    },
    {
      path: "/coleccion-rolex/:colectionName/:id",
      name: "relojes-rolex",
      component:()=>import("./views/Rolex/RolexWatchDetail.view.vue") ,
      meta: {
        title: "Modelos de Rolex - Mimi Joyería | Distribuidor Oficial Rolex"
      }
    },
    // ****************
  
    // MIMI STATIC ROUTES
    ,
    {
      path: "/tudor",
      name: "tudor",
      component: ()=>import("./views/Mimi/Tudor.view.vue"),
      meta: {
        title: "Tudor - Mimi Joyería | Distribuidor Oficial Rolex"
      }
    }
    ,
    ,
    {
      path: "/relojeria",
      name: "relojeria",
      component: ()=>import("./views/Mimi/Relojeria.view.vue"),
      meta: {
        title: "Relojeria - Mimi Joyería | Distribuidor Oficial Rolex"
      }
    }
    ,
    {
      path: "/joyeria",
      name: "joyeria",
      component: ()=>import("./views/Mimi/Joyeria.view.vue"),
      meta: {
        title: "Joyería  - Mimi Joyería | Distribuidor Oficial Rolex"
      }
    },
    {
      path: "/sobre-mimi",
      name: "sobre-mimi",
      component: ()=>import("./views/Mimi/SobreMimi.view.vue"),
      meta: {
        title: "Sobre Mimi- Mimi Joyería | Distribuidor Oficial Rolex"
      }
    }
    ,
    {
      path: "/contactenos",
      name: "contactenos",
      component: ()=>import("./views/Mimi/Contacto.view.vue"),
      meta: {
        title: "Contáctenos  - Mimi Joyería | Distribuidor Oficial Rolex"
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
        title: "  Mimi Joyería | Distribuidor Oficial Rolex"
      },

    }

    ,
    {
      path: "/relojeria/:id",
      name: "reloj",
      component: ()=>import("./views/Tienda/StoreRelojeria.view.vue"),
      meta: {
        title: "  Mimi Joyería | Distribuidor Oficial Rolex"
      },

    }
    ,
    {
      path: "/relojeria/:serie/:id",
      name: "relojProducto",
      component: ()=>import("./views/Tienda/StoreRelojeriaDetail.view.vue"),
      meta: {
        title: "  Mimi Joyería | Distribuidor Oficial Rolex"
      },

    }
    ,
    {
      path: "/joyeria/:serie/:id",
      name: "joyeriaProducto",
      component: ()=>import("./views/Tienda/StoreJoyeriaDetail.view.vue"),
      meta: {
        title: "  Mimi Joyería | Distribuidor Oficial Rolex"
      },

    }
    ,
    {
      path: "/:notFound",
      name: "notFound",
      component: ()=>import("./views/404.view.vue"),
      meta: {
        title: "Pagina no encontrada -  Mimi Joyería | Distribuidor Oficial Rolex"
      },

    }
    // ****************
    // AUTH AND USER ROUTES
    ,
    {
      path: "/login",
      name: "login",
      component: ()=>import("./views/Admin/Login.view.vue"),
      meta: {
        title: "Iniciar sesion  - Mimi Joyería | Distribuidor Oficial Rolex"
      }
    }
    ,
    
    {
      path: "/registrar",
      name: "registrar",
      component: ()=>import("./views/Admin/Register.view.vue"),
      meta: {
        title: "Registrar  - Mimi Joyería | Distribuidor Oficial Rolex"
      }
    }
    ,
    
    {
      path: "/logout",
      name: "logout",
      component: ()=>import("./views/Admin/Logout.view.vue"),
      meta: {
        title: "Registrar  - Mimi Joyería | Distribuidor Oficial Rolex"
      }
    }
    ,
    
    {
      path: "/dashboard/",
      name: "dashboard",
      component: ()=>import("./views/Admin/Dashboard.view.vue"),
      children:[
        {
          path:"",
          name:"main",
          component: ()=>import("./components/dashboard/Profile.vue")
        },
        {
          path:"banner-edit",
          name:"banner-edit",
          component: ()=>import("./components/dashboard/SliderChangeForm.vue")
        },
        {
          path:"agregar-joyeria",
          name:"agregar-joyeria",
          component: ()=>import("./components/dashboard/JoyeriaForm.vue")
        },
        {
          path:"agregar-relojeria",
          name:"agregar-relojeria",
          component: ()=>import("./components/dashboard/RelojeriaForm.vue")
        },
      ],
      meta: {
        title: "Panel de control  - Mimi Joyería | Distribuidor Oficial Rolex"
      }
    }
    ,
    
    {
      path: "/carrito",
      name: "carrito",
      component: ()=>import('./components/dashboard/ShoppingCart.vue'),
      meta: {
        title: 'Carrito De Compras  - Mimi Joyería | Distribuidor Oficial Rolex'
      }
    }
    ,
    {
      path: "/checkout",
      name: "checkout",
      component: ()=>import('./components/dashboard/Checkout.vue'),
      meta: {
        title: 'Compra exitosa  - Mimi Joyería | Distribuidor Oficial Rolex'
      }
    }
    ,
    {
      path: "/authorized",
      name: "authorized",
      component: ()=>import('./components/dashboard/Authorized.vue'),
      meta: {
        title: 'Compra exitosa  - Mimi Joyería | Distribuidor Oficial Rolex'
      }
    }
    ,
    
    // {
    //   path: "/",
    //   name: "",
    //   component: ()=>import("./views/.vue"),
    //   meta: {
    //     title: "  - Mimi Joyería | Distribuidor Oficial Rolex"
    //   }
    // }
    
    // ,
    // ****************
    // PAYMENT ROUTES

    

  ],
  scrollBehavior(to, from, savedPosition) {
    // if (to.hash) {
     
    // }
    // return { top: 0, behavior: "smooth", }
    return {
      el: "#top-bar",
      top: 10,
      behavior: "smooth"
    }
  },

})


router.beforeEach((to, from, next) => {

  // window.document.title = toRoute.meta && toRoute.meta.title ? toRoute.meta.title : "Home";
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