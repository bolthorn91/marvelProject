<template>

     <div class="container">
        <div class="header">olaqase</div>

        <div class="input-container">
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
    superHero: '',
        }
    },

 }



 </script>



 <style scoped>

    .header{
        background-color: red;
    }

    .input-container{
        background-color: black;
        display: flex;
        align-items: center;
        
    }


    input{
        display: inline-block;
        padding: 10px;
        width: 90%;
        height: 100%;
    }

    
    a{
        font-family: sans-serif;
        color: white;
        overflow: hidden;
        display: inline-block;
        width: 10%;
        height: 100%;
        padding: 10px;
    }

 
 </style>
 