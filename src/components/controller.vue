<template>
  <div>
        <navigationmenu  @trigger="getCharacterComics"></navigationmenu>
    
        <comics :comicsData="comicsData" :apiUrl="apiUrl" :apiKey="apiKey" :andApiKey="andApiKey" :id="id" :pages="pages" @triggerPagination="getComics"/>


        <div class="loading" v-bind:class="{ show: isLoading }">
		        <span>comics are arriving!</span>
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
      message: '',
      show: true,
      isLoading: false,
      queryLimit: '&limit=9',
      queryOffset: '&offset=9',
      totalPages: 0,
      pages: [],
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
      this.isLoading = true
      let getCharacterData = 
        axios.get("https://gateway.marvel.com/v1/public/characters?name=" +superHero +this.andApiKey)
        .then(res => (this.superHeroData = res.data.data.results))
        .catch(err => (console.log(err)))

      let characterRes = await getCharacterData;
      

      for (let i = 0; i < characterRes.length; i++) {
        this.id = characterRes[i].id;
      }
        
        const limit = 9
        const maxComics = 90
        this.totalPages = maxComics / limit
        let i = 1
          
          while (i <= this.totalPages) {
            this.pages.push(i);
            i++
        }
        
        let comicsRes = await this.getComics;
        comicsRes();

        this.isLoading = false   
    },

      /*getCharacterData(superHero){
        axios.get("https://gateway.marvel.com/v1/public/characters?name=" +superHero +this.andApiKey)
        .then(res => (this.superHeroData = res.data.data.results))
        .catch(err => (console.log(err)))
      },*/


      getComics(page) {
        const limit = 9
        const offset = limit * page
        

        axios.get("https://gateway.marvel.com/v1/public/characters/" +this.id +"/comics" +this.apiKey+this.queryLimit+'&offset='+offset)
        .then(res => (this.comicsData = res.data.data.results))
        .catch(err => (console.log(err)))

    }

  },

    /*mounted: function(){
        this.$nextTick(async function(getCharacterComics) {
        this.loading = true;
        await this.getCharacterComics
        this.loading = false;
      })
    },*/


    created(page){
        this.isLoading = true
        const limit = 9
        const offset = limit * page
         let getComics = axios.get('https://gateway.marvel.com/v1/public/comics'+this.apiKey+this.queryLimit+'&offset='+offset)
        .then(res => (this.comicsData = res.data.data.results));
        this.isLoading = false

  },


  /*watch: {
    '$route' (to, from) {
         this.getCharacterComics(this.superHero);
        }
  }*/
}

</script>



 <style>
.loading{
	display: none;
	position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: white;
}
.loading.show{
	display: initial;
}

  a{
    color: inherit;
    text-decoration: none;
  }


</style>
 