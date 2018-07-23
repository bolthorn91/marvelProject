<template>
    <div>
     <div class="container">
        <input type="text" placeholder="Introduce un superhéroe" v-model="superHero" @keyup.enter="$emit('trigger', superHero)"> 

        <a> personajes</a>
    </div>

    

    </div>
</template>



 <script>

 import axios from 'axios'

 export default {
    name: 'navigationmenu',
    
    data(){
        return{
    id:'',        
    superHeroData: [],
    superHero: '',
    superHeroId:'',
    commicsData:'',
    apiUrl: 'http://gateway.marvel.com/v1/public/comics',
    apiKey: '?ts=1&apikey=5a702ea20b66329a0cb2239c34adec59&hash=f09d7c475639b2bb2e9a6ed4b5e3dea0',
    andApiKey: '&ts=1&apikey=5a702ea20b66329a0cb2239c34adec59&hash=f09d7c475639b2bb2e9a6ed4b5e3dea0',   
        }
    },

 }



 </script>



 <style scoped>
    .container{
        display: flex;
        align-items: center;
    }
    input{
        display: inline-block;
        padding: 10px;
        width: 90%;
    }
    a{
        overflow: hidden;
        display: inline-block;
        width: 10%;
        padding: 10px;
    }

    div{
        background-color: black
    }
 
 </style>
 