<template>
        <section id="content">
           <h2 class="subheader"> &copy;Pagina de pruebas  </h2>
           <h3>{{id_desde_url}}</h3>
           <h4>{{nombre}}</h4>
            <button @click="actualizadoNombre()">actualizadoNombre</button>
             <button @click="redirigirAlBlog()">redirigirAlBlog</button>
             <!-- <button @click="josue()">josue</button>
               ejemplo 
              redirigirAlBlog(){
               this.$router.push("/Blog");
               },
              -->
      </section>     
</template>

<script>
export default {
    name:"Pagina ",
    created(){
      console.log("componente creado !!");
    },
    mounted(){
       this.id_desde_url = this.$route.params.id;
       console.log("componente montado !!");
    },
    updated(){
         console.log("componente actualizado !!");
    },
    destroyed(){
      console.log("componente eliminado !!");   
    },
    data(){
       return{
        id_desde_url:null,
        nombre: "victor robles"
       };
    },
    methods:{
      actualizadoNombre(){
        alert("hola mundo ");
        this.nombre = "JOSUE RODRIGUEZ"
       console.log(this.nombre);
      },
      redirigirAlBlog(){
        this.$router.push("/Blog");
      },
      
   }
    
    
};
</script>