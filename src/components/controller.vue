<template>
  <div>
        <navigationmenu  @trigger="getCharacterComics">
        </navigationmenu>
        <div class="comicsContainer">
        <comics :comicsData="comicsData" :apiUrl="apiUrl" :apiKey="apiKey" :andApiKey="andApiKey" :id="id"/>
        <button v-on:click="pagination"></button> {{page}}
        </div>

  </div>
</template>



 <script>
import axios from "axios";
import comics from "./../components/comics";
import navigationmenu from "./../components/navigationmenu";

export default {

  name: "controller",

  data() {
    return {
      loading: false,
      limit: 9,
      //offset: comicsData.length /limit,
      page: 0,
      //pages: this.comicsData.lngth /this.limit,
      id: "",
      thumbnail: [],
      superHeroData: [],
      characters:'',
      superHero: "",
      comicsData: "",
      apiUrl:"https://gateway.marvel.com/v1/public",
      apiKey:
        "?ts=1&apikey=5a702ea20b66329a0cb2239c34adec59&hash=f09d7c475639b2bb2e9a6ed4b5e3dea0",
      andApiKey:
        "&ts=1&apikey=5a702ea20b66329a0cb2239c34adec59&hash=f09d7c475639b2bb2e9a6ed4b5e3dea0"
    };
  },

  components: {
      comics,
      navigationmenu
  },
  methods: {
    
    getCharacterComics: async function(superHero) {
      let getCharacterData = axios
        .get(
          "https://gateway.marvel.com/v1/public/characters?name=" +
            superHero +
            this.andApiKey
        )
        .then(res => (this.superHeroData = res.data.data.results));
      let dataArray = await getCharacterData;

      for (let i = 0; i < dataArray.length; i++) {
        this.id = dataArray[i].id;
      }

      let getComics = axios.get("https://gateway.marvel.com/v1/public/characters/" +this.id +"/comics" +this.apiKey)
        .then(res => (this.comicsData = res.data.data.results));

      let comicsArray = await getComics;

    },

    getComics(){axios.get(
          "https://gateway.marvel.com/v1/public/characters/" +
            this.id +
            "/comics" +
            this.apiKey
        )
        .then(res => (this.comicsData = res.data.data.results));
    },


    ready:async function(getCharacterComics) {
    //this.loading = true;
    await this.getCharacterComics
    //this.loading = false;

    },
    pagination(comicsData){
      const limit = 9
      const dataSimulation = 40
      const pages = dataSimulation / limit
      console.log(pages)

    }
  },

  created(){
    axios.get('https://gateway.marvel.com/v1/public/comics'+this.apiKey)
    .then(res => (this.comicsData = res.data.data.results));

    

  },
  watch: {
    '$route' (to, from) {
         this.getCharacterComics(this.superHero);
        }
  }
}

</script>



 <style>
  a{
    color: inherit;
    text-decoration: none;
  }


</style>
 