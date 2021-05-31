<template>
       <section id="content">
           <h2 class="subheader">Formulario </h2>
                              <form class="mid-form" @submit.prevent="mostarUsuario()">
                        <div class="form-group">
                            <label for="nombre">Nombre</label>
                            <input type="text" name="nombre" v-model="user.nombre" />
                            <div v-if="!$v.user.nombre.required">
                                    Este campo es requerido 
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="apellidos">Apellidos</label>
                            <input type="text" name="apellidos" v-model="user.apellidos" />
                            <div v-if="!$v.user.apellidos.required">
                                    Este campo es requerido 
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="bio">Biografia</label>
                            <textarea name="bio" v-model="user.bio"></textarea>
                            <div v-if="!$v.user.bios.required">
                                    Este campo es requerido 
                            </div>
                        </div>

                        <div class="form-group radibuttons">
                            <input type="radio" name="genero" value="hombre" checked v-model="user.genero" /> Hombre 
                            <input type="radio" name="genero" value="mujer" v-model="user.genero" /> Mujer 
                            <input type="radio" name="genero" value="otro" v-model="user.genero" /> Otro
                        </div>

                        <div class="clearfix"></div>

                        <input type="submit" value="Enviar" class="btn btn-success" />

                        <div class="datos" v-if="user.nombre && user.apellidos">
                            <h3>{{user.nombre +' ' + user.apellidos }}</h3>
                        </div>

                   </form>
                
            </section>

            
      
</template>


<script>
import { required , minLength } from "vuelidate/lib/validators";


export default {
    name:"Formulario",
    validations: {
     user: {
     nombre :{
         required,
         minLength: minLength(2)
     },
     apellidos :{
         required,
         minLength: minLength(2)
     },
      bios :{
         required,
        minLength: minLength(10)
     },
    }
    },
    
    data(){
      return {
      submitted: false, 
    user: {
     nombre: '',
     apellidos: '',
     bio: '',
     genero:''
     }
      }
    },
    methods:{
        mostarUsuario(){
            console.log(this.user);
            this.submitted = true;
            alert("estas seguro mano ? ");
            prompt("estas seguro mano?");
            console.error("error");
            console.warn("solucion");
          
            
            this.$v.$touch();
            if(this.$v.$invalid){
                return false;
            }

            alert("validacion pasada");
        }
    }
};
</script>