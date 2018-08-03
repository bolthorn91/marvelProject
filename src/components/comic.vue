<template>
    <div class="container">
        <div class="left">
            <router-link to='/'>
            <a>Back</a>
            </router-link>
            <h1>esto es izquierda</h1>

            <div v-for="data in comicData">
                <img :src="data.thumbnail.path+'/detail.jpg'" alt=""/>
            </div>

        </div>

        <div class="right">
            <div v-for="data in comicData">
                <div class="title">
                    <h1>{{data.title}}</h1>
                    <p>{{data.description}}</p>
                </div>
            <div>
                <h2>creators</h2>
                <p v-for="creators in data.creators.items">{{creators.name}}</p>
            </div>
            <div>
                <h2>characters</h2>
                <p v-for="characters in data.characters.items">{{characters.name}}</p>
            </div>
            <div>
                <h2>Stories</h2>
                <p v-for="stories in data.stories.items">{{stories.name}}</p>
            </div>


            </div>
        </div>


    </div>

</template>


<script>
import axios from 'axios'

export default {
    name:'comic',
    props:['id', 'commicsData', 'apiUrl', 'andApiKey', 'img'],

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
    h1, p{
        margin:0;
    }
    .container{
        display: flex;
        width:100%;

    }
    .title{
        color: #fff;
        background-color: black;
    }
    .right, .left{
        width: 50%;
    }


    a.router-link{
                border: 1px solid black;
        padding: 10px;
        
    }
    
 </style>
 