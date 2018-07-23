<template>
    <div>
    <ul>
        <li v-for="comic in comicsData" :comicsData='comicsData'>
            <router-link :to="{ name:'comic', params: { id:comic.id }}" :apiKey="apiKey">  
                {{comic.title}}
                {{comic.id}}
            </router-link>   
        </li>
    </ul>

    </div>
</template>



 <script>
 import axios from 'axios'



 export default {
    name: 'commics',
    props:['id', 'superHeroData', 'comicsData', 'apiUrl', 'apiKey', 'andApiKey'],
    data(){
        return{

        }
    },
    
    methods:{

    }
 }
 </script>



 <style scoped>


    
 </style>
 