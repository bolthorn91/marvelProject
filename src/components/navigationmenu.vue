<template>
    <div>
        <input type="text" placeholder="Introduce el nombre del superhéroe" v-model="superHero" @keyup.enter="getCharacterId"> 
        
            <router-link to="/comics">
            <button @click='getCharacterId'>buscar superhéroe</button>
             </router-link>

        <ul>
            
            <li v-for="superhero in superHeroId">
              <p>Este es: {{superhero.id}}</p>  
            </li>


        <li v-for="comic in commicsData">    
            {{comic.title}}

        </li>
    
 
          
        </ul>

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

    methods:{


        getCharacterId: async function () {
            let getCharacterData = axios.get('https://gateway.marvel.com:443/v1/public/characters?name=' +this.superHero+this.andApiKey)
            .then(res => this.superHeroId = res.data.data.results)
                let dataArray = await getCharacterData;
 
                    for (let i = 0; i < dataArray.length; i++) {
                        this.id = dataArray[i].id;
                    }

            let getCharacterComics = axios.get('https://gateway.marvel.com:443/v1/public/characters/' +this.id+'/comics'+this.apiKey)
            .then(res => this.commicsData = res.data.data.results)

            let commicsArray = await getCharacterComics

        },

    }
 }



 </script>



 <style scoped>
    
    input{
        width: 200px;
    }

    div{
        background-color: aqua;
    }
 
 </style>
 