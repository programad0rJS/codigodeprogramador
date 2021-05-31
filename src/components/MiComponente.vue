<template>
     <div id="mi-componente">
            <hr>
            <h1>Mi Primer Componente</h1>
            <h2>{{subtitulo}}</h2>
        
             <br>
                            <!-- <h2>hola mundo </h2>   
                         <input type="text" v-model="nombre" />
                     <strong> {{nombre}}</strong> -->

                
                    <h2>Directivas</h2>
                      <input type="number" v-model="edad" />
                       Mi edad es: <strong>{{edad}}</strong>

<br>
<br>
<br>
                       <strong class="strong" v-if="edad && edad >= 18">
                           ERES MAYOR EDAD

                       </strong>
<br>
<br>
<br>              
                       <strong class="strong-23" v-if="edad && edad >= 38">
                           ERES AVANZADO 

                       </strong>

        

 <!-- <h2>Directivas</h2>
<ol>
 <li v-for="peliculas in peliculas" :key="peliculas">{{peliculas}}</li>
</ol> -->



<!-- 
  <pre>
            {{$data}}
   </pre> 
   -->
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
            <hr>
     </div>
</template>
<!--
  fijate  hola mundo, universo.  
 -->


<style>
         
</style>

<script>
export default {
 name:"MiComponente",
  data(){
      return {
          subtitulo: "hola mundo, universo.  ",
          nombre:"",
          edad:18,
          peliculas: ["batma vs superman","el señor de los anillos"]
      }
  }
}

</script>
