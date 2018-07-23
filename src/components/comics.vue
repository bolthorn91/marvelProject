<template>
    <div>


      <h1>hello world</h1>
          
        <p>{{id}}</p>
        <p>{{commicsData}}</p>


    </div>
</template>



 <script>

 import axios from 'axios'



 export default {
    name: 'commics',
    props:['id', 'superHeroData', 'commicsData', 'apiUrl', 'apiKey', 'andApiKey'],
    data(){
        return{

        }
    },
    methods:{

        /*getCharacterData(){
            axios.get('https://gateway.marvel.com:443/v1/public/characters?name=' +this.superHero+'&ts=1&apikey=5a702ea20b66329a0cb2239c34adec59&hash=f09d7c475639b2bb2e9a6ed4b5e3dea0')
            .then(res => this.superHeroData = res.data.data.results)
        },*/


        getCharacterId: async function () {
            let getCharacterData = axios.get('https://gateway.marvel.com:443/v1/public/characters?name=' +this.superHero+this.andApiKey)
            .then(res => this.superHeroData = res.data.data.results)
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
    
 </style>
 