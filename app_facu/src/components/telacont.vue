<template>
  <div>
    <h1>Vamos contar</h1>
    <h2>Número entre 1 a 100</h2>
    <label for="valor">Valor</label>
    <input type="text" name="valor" id="valor" v-model="numnovoitem" @keyup.enter="adicionar" maxlength="20" ref="focu">
    <button @click="adicionar">add</button>
</div>
<div>
    <select name="select" id="select" v-model="select" >
    
        <option v-for="option in options" :value="option.value" v-text="option.text" ></option>
        
    
    </select>
</div>
<div>
    <button @click="ordenar">Ordenar</button>
    <button @click="misturar">Misturar</button>
    <button @click="limpar">Limpar</button>
</div>
<div id="cardlista">
    <ul id="lista" v-for="item in lista" :key="item.id" ><li v-text="item.num"></li></ul>
</div>
</template>

<script>
import {isNumero,inLista,bubbleSort,selectionSort,quickSort} from '../scripts/ordenando.js'
export default {
    
    data () {
        return {
            numnovoitem:"",
            
            lista:[],
            valores : [],
            select : 'A',
            options: [
                { text: 'Bublle Sort', value: 'A' },
                { text: 'Select Sort', value: 'B' },
                { text: 'Quick Sort', value: 'C' }
            ],
        }
    },
    methods:{
        adicionar(){   

            if( isNumero(this.numnovoitem) && !inLista(this.numnovoitem,this.valores)){
                let novoitem = {
                            id: new Date().getTime(),
                            num: this.numnovoitem
                        }
                this.valores.push(Number(this.numnovoitem))
                this.lista.push(novoitem)

                this.numnovoitem = ''
                this.$refs.focu.focus()

            }else {
                window.alert('Valor inválido ou já cadastrado na lista.')
                
            }         
        }, ordenar () {
            if(this.lista.length == 0 ){
            window.alert('Sem dados para trabalhar adicone valores')

            }else {
                this.lista = []
                this.lista.shift()
                
                if(this.select == 'A'){
                
                let valores = this.valores
                bubbleSort(valores)
                for(var item in valores){
                    let novoitem = {
                                id: new Date().getTime(),
                                num: valores[item],
                            }
                    this.lista.push(novoitem)
                }
                this.numnovoitem = ''
                this.$refs.focu.focus()
                }else if(this.select == 'B'){
                
                let valores = this.valores
                let n = valores.length
                selectionSort(valores, n)
                for(var item in valores){
                    let novoitem = {
                                id: new Date().getTime(),
                                num: valores[item],
                            }
                    this.lista.push(novoitem)
                }
                this.numnovoitem = ''
                this.$refs.focu.focus()

            }else {
                
                let valores = this.valores
                let n = valores.length
                quickSort(valores,0,n-1)
                for(var item in valores){
                    let novoitem = {
                                id: new Date().getTime(),
                                num: valores[item],
                            }
                    this.lista.push(novoitem)
                }
                this.numnovoitem = ''
                this.$refs.focu.focus()

            }
        }
        }, misturar() {
            if(this.lista.length == 0 ){
            window.alert('Sem dados para trabalhar adicone valores')

            }else {
                
                this.lista = []
                this.lista.shift()

                let valores = this.valores
                valores.sort(() => Math.random() - 0.5);
                
                for(var item in valores){
                    
                    let novoitem = {
                                id: new Date().getTime(),
                                num: valores[item],
                            }
                    this.lista.push(novoitem)
                }
                this.numnovoitem = ''
                this.$refs.focu.focus()
            }
        },
        limpar() {
            this.lista = []
            this.lista.shift()
        }
    },
    
}
</script>

<style>

</style>