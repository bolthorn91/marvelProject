<template>
    <div class="container">
        <div class="left">
            <h1>esto es izquierda</h1>
        </div>

        <div class="rigth" v-for="data in comicData">
            <h1>{{data.title}}</h1>
            <p>{{data.dates}}</p>
            <p>{{data.creators}}</p>
            <p>{{data.stories}}</p>

        </div>


    </div>

</template>


<script>
import axios from 'axios'

export default {
    name:'comic',
    props:['id', 'commicsData', 'apiUrl', 'andApiKey'],

    data(){
        return{
        comicData: '',
        apiKey:
        "?ts=1&apikey=5a702ea20b66329a0cb2239c34adec59&hash=f09d7c475639b2bb2e9a6ed4b5e3dea0",
   
        }
    },

    methods:{
        loadComic(comicId){
            axios.get('https://gateway.marvel.com/v1/public/comics/'+comicId+this.apiKey)
            .then(res => this.comicData = res.data.data.results)  

        }
    },

   created() {
     let comicId = this.$route.params.id;
     this.loadComic(comicId);
   },
    watch: {
    '$route' (to, from) {
         let comicId = this.$route.params.id;
         this.loadComic(comicId);
        }
    }
}


</script>




 <style>
    .container{
        position: fixed;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
    }
    .right, left{
        width: 50%;
    }

    
 </style>
 