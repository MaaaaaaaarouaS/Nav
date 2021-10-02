import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Product from "../views/Product.vue";
import NotFound from "../views/NotFound.vue";
import Movies from "@/views/Movies.vue";
import Movie from "@/views/Movie.vue";
const routes = [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        title: 'Accueillito'
      }
    },
    {
      path:'/about',
      name:'About',
      component: About,
      meta: {
        title: 'A propos'
      }
    },
    {
      path:'/product/:name',
      name:'Product',
      component: Product,
      props:true,
      meta: {
        title : 'Produit'
      }
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: NotFound,
      meta: {
        title: '404'
      }
    },
    { 
      name: 'movies',
      path: '/movies', 
      component: Movies,
    },
    { 
      name: 'movie',
      path: '/movie/:id', 
      component: Movie, 
      props:true 
    },
  ];

  const router = createRouter({
    history: createWebHistory(),
    routes,
  });

  router.afterEach((to, from) => {
    console.log(from, to);
    document.title = to.meta.title;
  })
  
  export default router;