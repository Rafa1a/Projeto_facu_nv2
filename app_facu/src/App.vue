<template>
<nav class="navbar navbar-expand-lg bg-light border border-primary">
  <div class="container-fluid">
    <a class="navbar-brand text-primary" href="#">Projeto facu</a>
    <button class="navbar-toggler bg-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav ">
        <a class="nav-link " >Contador</a>
        <a class="nav-link "  href="#" >Receitas</a>
        <a class="nav-link " >Usuários</a>
        
      </div>
    </div>
  </div>
</nav>
<pessoas />


<telacont v-if="tela"/>
</template>

<script>
import telacont from './components/telacont.vue'
import receitas from './components/receitas.vue'
import pessoas from './components/pessoas.vue'


export default {
    components:{telacont,receitas, pessoas},
    template : {
       
    },
    data(){
        return{
        users : <pessoas/>,
        tela: <telacont/>,
        receitass:<receitas/>
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