<template>
  <div id="app">
    <HeaderComponent></HeaderComponent>
    <Slider></Slider>
    <div class="center">

      
        <router-view></router-view>  
            <Peliculas></Peliculas>
       <Sidebar></Sidebar>
    </div>
     <div class="clearfix">
           <FooterComponent></FooterComponent>
     </div>
  </div>
</template>

<script>


import HeaderComponent from './components/HeaderComponent';
import Slider from './components/Slider.vue';
import Sidebar from './components/Sidebar.vue';
import FooterComponent from './components/FooterComponent.vue';
import Peliculas from './components/Peliculas.vue';


export default {
  name: 'App',
  components: {  
    HeaderComponent,
    Slider,
    Sidebar,
    FooterComponent,
    Peliculas,
  
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
@import "assets/css/styles.css";



</style>
