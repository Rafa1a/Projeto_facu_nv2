<template>
    <h1>Click Para Saber Mais</h1>
<div class="row row-cols-1 row-cols-md-3 g-6" >
  <div class="col" v-for="itens in lista" :key="itens.id" >
    <div class="card" @click="itens.click = !itens.click" :class="{esconde : itens.click}">
      <img :src="itens.img" class="card-img-top" alt="...">
      <div class="card-body">
        <h2 class="card-title" v-text="itens.title"></h2>
        
        <p class="card-text" v-text="itens.description"></p>
      </div>
    </div>
  </div>
  
</div>
</template>

<script>
import axios from "axios"
export default {
    
    data(){
        return{
        
        lista:[]
        }
    }, mounted () {
       
        this.chamada('https://reqres.in/api/users?per_page=10')
        
    }, methods : {
        montagem (url,title,email) {
            let novoitem = {
                id : new Date().getTime(),
                img: url,
                title : title,
                description : email,
                click: true,
            }
            this.lista.push(novoitem)
        },
        chamada (url) {
            
            axios.get(url)
            .then(res => {
                var dados = res.data;
                for( var users in dados.data){
                    
                    let img = dados.data[users].avatar
                    let title = dados.data[users].first_name + ' ' + dados.data[users].last_name
                    let email = dados.data[users].email
                    
                    this.montagem(img, title, email)
                }
                console.log( dados.data[users].first_name + '   ' + dados.data[0].email )
            })
        },
        
        
        
    }
}
</script>

<style>
img {
    width: 50%!important;
}
h1{
    margin: 50px;
}
div.row{
    color: #242424;

}
div.col{
    cursor: pointer;
   
}
div.card{
    margin: 15px;
}
div.card:hover{
    border: 2px solid #646cff;
    box-shadow: 0px 0px 25px #646cffc2;
}
ul.card-text{
    
    text-align: justify;
    font-size: 1em;
    font-weight: 700;
    
}
.esconde p {
    display: none;
}
.esconde ul {
    display: none;
}
.esconde h2 {
    display: none;
}
</style>