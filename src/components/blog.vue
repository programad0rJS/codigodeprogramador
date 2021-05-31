<template>
       <section id="content">
           <h1 class="subheader"> <p>No Podimos Conectar Las Imagenes, Lo siento </p>
         <div id="articles" v-if="articles">
                    <article class="article-item" v-for="article in articles" :key="article.id">
                        <div class="image-wrap">
                            <img :src="'' +article.image" alt="Paisaje" />
                        </div>

                        <h2>Articulo de prueba</h2>
                        <span class="date">
                            Hace 5 minutos
                        </span>
                        <a href="#">Leer más</a>

                        <div class="clearfix"></div>
                    </article>

                    <!--AÑADIR ARTICULOS VIA JS-->

                </div>
           </h1>
      </section>     
</template>

<script>
import axios from 'axios';
export default {
    name:"Blog",
    mounted(){
       this.getArticles();
    },
    data(){
      return {
          articles: []
      } 
    },
    methods: {
        getArticles(){
            axios.get('')
                  .then(res => {
                      if(res.data.status == 'success'){
                           this.articles = res.data.articles;

                           console.log(this.articles);
                      }
                  });
        }
    }
}
</script>