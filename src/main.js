import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VueRouter from 'vue-router';
import Vuelidate from 'vuelidate';
import LastArticles from './components/LastArticles.vue';
import MiComponente from './components/MiComponente.vue';
import HelloWorld from './components/HelloWorld.vue';
import Blog from './components/blog.vue';
import Formulario from './components/Formulario.vue';
import Pagina from './components/Pagina.vue';
import ErrorComponent from './components/ErrorComponent.vue';
import Peliculas from './components/Peliculas.vue';


Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.use(Vuelidate);

const routes = [
   {path:'/home', component: LastArticles},
   {path:'/blog', component: Blog},
   {path:'/formulario', component: Formulario},
   {path:'/pagina/:id?', name:'pagina', component: Pagina},
   {path:'/peliculas', name:'peliculas', component: Peliculas},
   {path:'/ultimos-articulos', component: LastArticles},
   {path:'/mi-componente', component: MiComponente},
   {path:'/hola-mundo', component: HelloWorld},
   {path:'/', component: LastArticles},
   {path:'*', component: ErrorComponent},
];

const router = new VueRouter({
    routes,
    mode:'history'
});


new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
