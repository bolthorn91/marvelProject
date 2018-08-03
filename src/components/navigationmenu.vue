<template>
    <div>
     <div class="container">
        <div class="header">olaqase</div>

        <div class="input-container">
        <input type="text" placeholder="Introduce un superhéroe" v-model="superHero" @keyup.enter="$emit('trigger', superHero)"> 
        <a> personajes</a>
        </div>
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
    .container{
        background-color: black;
        height: 50px;
    }

    .header{
        background-color: red;
    }

    .input-container{
        display: flex;
        align-items: center;
    }


    input{
        display: inline-block;
        padding: 10px;
        width: 90%;
    }

    
    a{
        font-family: sans-serif;
        color: white;
        overflow: hidden;
        display: inline-block;
        width: 10%;
        padding: 10px;
    }

 
 </style>
 