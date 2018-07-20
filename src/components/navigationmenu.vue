<template>
    <div>
        <input type="text" placeholder="Introduce el nombre del superhéroe" v-model="superHero">
        <div>este es un input del componente de navegación</div>
        <button @click='findName'>buscar superhéroe</button>
        <router-link to="/commits">commits</router-link>


        <ul>
            
 
              <p>Este es: {{datas.data}}</p>  
 
              <p>Este es: {{datas}}</p>  

             
          
        </ul>
    </div>
</template>



 <script>

 import axios from 'axios'

 export default {
    name: 'navigationmenu',
    
    data(){
        return{
    datas: {},
    superHeroes: [],
    superHero: '',
    result:'',
    apiUrl: 'http://gateway.marvel.com/v1/public/comics',
    apiKey: '?ts=1&apikey=1234&hash=ffd275c5130566a2916217b101f26150',
                
        }
    },
    methods:{

        getCharacter() {
            axios.get('https://gateway.marvel.com:443/v1/public/characters?name=' + this.superHero+'&ts=1&apikey=5a702ea20b66329a0cb2239c34adec59&hash=f09d7c475639b2bb2e9a6ed4b5e3dea0')
            .then(res => this.datas = res.data)
        },

        findName(getCharacter){
           this.result = this.getCharacter.findKey('results')
        }

            
    }
 }



 </script>



 <style scoped>
    
    input{
        width: 200px;
    }
 
 </style>
 