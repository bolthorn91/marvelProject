<template>
  <div>
        <navigationmenu  @trigger="getCharacterId">
        </navigationmenu>
        <comics :comicsData="comicsData" />
        

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
      id: "",
      superHeroData: [],
      superHero: "",
      comicsData: "",
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
    
    getCharacterId: async function(superHero) {
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

      let getCharacterComics = axios
        .get(
          "https://gateway.marvel.com/v1/public/characters/" +
            this.id +
            "/comics" +
            this.apiKey
        )
        .then(res => (this.comicsData = res.data.data.results));

      let comicsArray = await getCharacterComics;
    }
  }
};
</script>



 <style scoped>



</style>
 