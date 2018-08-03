<template>
    <div class="container">

    <div class="comics-container" v-for="comic in comicsData" :comicsData='comicsData'>
            <router-link :to="{ name:'comic', params: { id:comic.id, img:comic.thumbnail.path+'/portrait_xlarge.jpg'}}" :apiKey="apiKey">  

            <img :src="comic.thumbnail.path+'/portrait_xlarge.jpg'"/>
            <p>{{comic.title}}</p>

            </router-link>   
    </div>

    </div>
</template>



 <script>
 import axios from 'axios'



 export default {
    name: 'commics',
    props:['id', 'superHeroData', 'comicsData', 'apiUrl', 'apiKey', 'andApiKey', 'imgPath'],
    data(){
        return{

        }
    },
    
 }
 </script>



 <style scoped>

    .container{
        background-color: #222222;
        overflow-x: hidden;
        padding:20px;
        min-height: 90vh;
        display:grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr;
        grid-gap: 50px;
    }

    .comics-container{
        display: flex;
        justify-content: center;

    }

    img:hover{
        opacity: 0.5;
        
    }

    
 </style>
 