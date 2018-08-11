<template>
    <div class="container">
    <div class="comics-container">

        <div class="comic-container" v-for="comic in comicsData" :comicsData='comicsData'>
            <router-link :to="{ name:'comic', params: { id:comic.id, img:comic.thumbnail.path+'/portrait_xlarge.jpg'}}" :apiKey="apiKey">  
            <img :src="comic.thumbnail.path+'/portrait_xlarge.jpg'"/>
            </router-link>
            <p>{{comic.title}}</p>

               
        </div>
    </div>

        <div class="paginationContainer">
            <a v-for="page in pages" @click="$emit('triggerPagination', page)">
            {{page}}
            </a> 
        </div>
        
    

    </div>
</template>



 <script>
 import axios from 'axios'



 export default {
    name: 'commics',
    props:['id', 'superHeroData', 'comicsData', 'apiUrl', 'apiKey', 'andApiKey', 'imgPath', 'pages'],
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
    }

    .comics-container{

        display:grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr;
        grid-gap: 50px;
    }

    .comic-container{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

    }

    img:hover{
        opacity: 0.5;
        
    }

    .paginationContainer{

    }

    .paginationContainer a{
        display: inline-block;
        padding: 10px;
        margin: 10px 10px 0 10px;
        background-color: white; 
        color: black; 
        border: 2px solid #008CBA;
        text-align: center;
    }

    .paginationContainer a:hover{
        cursor: pointer;
        background-color: #008CBA;
        color: white;
    }
    
 </style>
 