<template>
<nav class="navbar navbar-expand-lg bg-light border border-primary">
  <div class="container-fluid">
    <a class="navbar-brand text-primary" href="#">Navbar</a>
    <button class="navbar-toggler bg-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav ">
        <a class="nav-link " :href="receitas" >Contador</a>
        <a class="nav-link "  href="#" >Receitas</a>
        <a class="nav-link " href="#" >Usuários</a>
        
      </div>
    </div>
  </div>
</nav>
<pessoas v-if="users" />
<receitas v-if="receita"/>
<telacont v-if="tela"/>
</template>

<script>
import telacont from './components/telacont.vue'
import receitas from './components/receitas.vue'
import pessoas from './components/pessoas.vue'
import navv from './components/nav.vue'
import './scripts/index.js'
export default {
    components:{telacont,receitas, pessoas, navv},
    data(){
        return{
            users: false,
            receita:false,
            tela : true
        }
    }
}   
</script>

<style>
body{
    color: rgba(255, 255, 255, 0.87)!important;
    background-color: #242424;
}
input{
    color: #242424;
}
div.container-fluid{
    width: 100%;
}
</style>