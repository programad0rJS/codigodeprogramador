<template>
    <header id="header">
            <div class="center">
                <!-- LOGO -->
                <div id="logo">
                    <img src="../assets/logo.png" class="app-logo" alt="Logotipo" />
                    <span id="brand">
                        <strong>Curso</strong>Vue
                    </span>
                </div>
                
                <!-- MENU -->
                <nav id="menu">
                    <ul>
                        <li>
                            <router-link to="/home" active-class="active">inicio</router-link>
                        </li>

                        <li>
                             <router-link to="/blog" active-class="active">blog</router-link>
                        </li>
                        <li>

                           <router-link to="/formulario" active-class="active" >formulario</router-link>
                        </li>
                        <li>
                            <!-- fijar el error de habla -->
                            <router-link 
                             active-class="active"
                            :to="{name:'pagina', params:{id:' hola mundo, aprendiendo angular.js y react.js y vue.js con joselin y tambien Víctor Robles: visiten a este stio web victorroblesweb.es'}}">pagina</router-link>
                        </li>
                         <li> 
                             <router-link to="/peliculas">Peliculas</router-link>
                        </li>
                             
                    </ul>
                </nav>

                <!--LIMPIAR FLOTADOS,
                https://aprenderaprogramar.net/javascript/crear-alert-con-javascript/#:~:text=3%20Alert%20Javascript-,Crear%20un%20mensaje%20de%20alerta%20en%20JavaScript%20con%20alert(),aceptar%20o%20cierre%20la%20ventana.
                 
                 visitar
                -->
                <div class="clearfix"></div>
            </div>
        </header>
</template>

<script>

export default {
    name:"HeaderComponent"
}
</script>
