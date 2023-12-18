import {createRouter,createWebHistory} from 'vue-router'
import Home from './views/Home.view.vue'
import Rolex from './views/Rolex/Rolex.view.vue'
import RolexNewModels from './views/Rolex/RolexNewModels.view.vue'



const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path:"/",
            name:"Home",
            component:Home,
            meta: {
                title:'Mimi Joyería | Distribuidor Oficial Rolex - Mimi Joyería | Distribuidor Oficial Rolex'
            }
        },
        // ROLEX STATIC ROUTES
        {
          path:"/rolex",
          name:"rolex",
          component:Rolex,  
          meta: {
            title:'Rolex en Mimi Joyería  - Mimi Joyería | Distribuidor Oficial Rolex'
        }
        },        
        {
          path:"/nuevos-modelos-2023",
          name:"rolex-modelos-2023",
          component:RolexNewModels,  
          meta: {
            title:'Nuevos Modelos 2023  - Mimi Joyería | Distribuidor Oficial Rolex'
        }
        }        
      
    ]
})


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