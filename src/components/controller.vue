<template>
    <div>
        <navigationmenu/>
        <comics/>
      <h1>hello world</h1>
          

    </div>
</template>



 <script>
import axios from "axios";
import comics from "./../components/comics";
import navigationmenu from "./../components/navigationmenu";

export default {
  name: "commics",

  data() {
    return {
      id: "",
      superHeroData: [],
      superHero: "",
      superHeroId: "",
      commicsData: "",
      apiUrl: "http://gateway.marvel.com/v1/public/comics",
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
    getCharacterId: async function() {
      let getCharacterData = axios
        .get(
          "https://gateway.marvel.com:443/v1/public/characters?name=" +
            this.superHero +
            this.andApiKey
        )
        .then(res => (this.superHeroData = res.data.data.results));
      let dataArray = await getCharacterData;

      for (let i = 0; i < dataArray.length; i++) {
        this.id = dataArray[i].id;
      }

      let getCharacterComics = axios
        .get(
          "https://gateway.marvel.com:443/v1/public/characters/" +
            this.id +
            "/comics" +
            this.apiKey
        )
        .then(res => (this.commicsData = res.data.data.results));

      let commicsArray = await getCharacterComics;
    }
  }
};
</script>



 <style scoped>
</style>
 