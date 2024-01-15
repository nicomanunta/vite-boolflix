<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import AppMovies from './components/AppMovies.vue';
import AppSeries from './components/AppSeries.vue';
import { store } from "./store.js"

export default {
  components: {
    AppHeader,
    AppMovies,
    AppSeries,
  },
  data() {
    return {
      store
    }
  },
  methods: {
    // FILM 
    getFilmList() {
      let apiFilms = store.urlMovies;

      if (store.searchFilm != "") {
        apiFilms += `${store.apiKey}&query=${store.searchFilm}`
        console.log(apiFilms)
      }
      axios.get(apiFilms).then((response) => {
        store.films = response.data.results
        console.log(store.films)
      })
    },

    // SERIE TV
    getSeriesList() {
      let apiSeries = store.urlSeries;

      if (store.searchFilm != "") {
        apiSeries += `${store.apiKey}&query=${store.searchFilm}`
        console.log(apiSeries)
      }
      axios.get(apiSeries).then((response) => {
        store.series = response.data.results
        console.log(store.series)
      })
    }
  },
}
</script>
<template lang="">
  <div>
    <AppHeader @perform_search="getFilmList(),getSeriesList()"/>
    <div class="bg-color">
      <AppMovies/>
      <AppSeries/>
    </div>
  </div>
</template>
<style lang="scss" >
@use "./styles/partials/variables" as *;
@use "./styles/generals.scss" as *;

.bg-color {
  background-color: $colore-secondario;
}
</style>