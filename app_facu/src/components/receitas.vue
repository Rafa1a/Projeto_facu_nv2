<template>
    <h1>Click Para Saber Mais</h1>
<div class="row row-cols-1 row-cols-md-2 g-4" >
  <div class="col" v-for="itens in lista" :key="itens.id" >
    <div class="card" @click="itens.click = !itens.click"
  :class="{esconde : itens.click}">
      <img :src="itens.img" class="card-img-top" alt="...">
      <div class="card-body">
        <h2 class="card-title" v-text="itens.title"></h2>
        <ul class="card-text" v-for="test in itens.ingredientes"> <li v-text="test"> </li></ul>
        <hr>
        <p class="card-text" v-text="itens.description"></p>
      </div>
    </div>
  </div>
  
</div>
</template>

<script>

export default {
    
    data(){
        return{
        
        lista:[]
        }
    }, mounted () {
        var list = this
        function chamada (url,title,ingre,des) {
            let novoitem = {
                id : new Date().getTime(),
                img: url,
                title : title,
                ingredientes : ingre,
                description : des,
                click: true,
            }
            list.lista.push(novoitem)
        }
        chamada('src/assets/frango-ao-creme-de-leite.jpeg','Frango com Creme de Leite Simples', ["500 g de peito de frango em cubos","1 lata de creme de leite light", "Tempero pronto em pó","Azeite"],"Modo de Preparo : Em uma panela, coloque um fio de azeite e o frango. Polvilhe com tempero pronto em pó de sua preferência. Deixe o frango dourar. Quando o frango estiver dourado, coloque o creme de leite. Deixe o creme de leite incorporar, prove e veja se esta bom de tempero e sal, precisando coloque mais um pouco. Está pronto" )
        chamada('src/assets/frango.jpg','Frango Recheado', ['1 peito de frango', 'Sal e pimenta-do-reino a gosto', '2 a 3 colheres de sopa de requeijão', '1 tomate fatiado', 'Orégano a gosto', 'Palitos grandes', '2 e 1/2 d/chá de molho de tomate'],"Modo de Preparo : Reúna todos os ingredientes; Corte o peito de frango em duas partes e depois corte cada pedaço ao meio, como se fosse um pão; Tempere bem com o sal e a pimenta; Passe o requeijão em cada parte, adicione as rodelas de tomate e salpique orégano; Feche os frangos, formando dois “sanduíches” e prenda-os com o palito (para não abrirem); Transfira para uma frigideira quente e deixe grelhar os dois lados, apenas para selar a carne; Passe para uma forma, cubra os frangos com molho de tomate e leve ao forno preaquecido a 180 ºC por cerca de 20 minutos; Agora é só servir." )
        chamada('src/assets/pizza1.jpg','card titulo', ['This is a longer card with supporting text below r.', 'dsaasdasdsadsadsadasdasdasdsadasdasdasdsadasdsaa', 'asdashdashdahs'],"asdhashdashdhas" )
    }
}
</script>

<style>
h1{
    margin: 50px;
}
div.row{
    color: #242424;

}
div.col{
    cursor: pointer;
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