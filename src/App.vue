<script>
import axios from 'axios';

import { store } from './store.js';

import AppSearch from './components/AppSearch.vue';

export default {
  data() {
    return {
      movies : [],
      store,
    }
  },


  created() {
    axios.get('https://api.themoviedb.org/3/search/movie?api_key=129c7c147dc0e52f5990dc27c7d71e42&query=ritorno + al + futuro').then(res => {
      console.dir(res.data.results);
      this.store.movies = res.data.results
      console.dir(this.store.movies)
    }).catch(err => {
      console.log(err);
    })
  },

  components: {
    AppSearch,
  },

  methods: {
    searchFilm(){
    axios.get('https://api.themoviedb.org/3/search/movie?api_key=129c7c147dc0e52f5990dc27c7d71e42&query=ritorno + al + futuro').then(res => {
      console.dir(res.data.results);
      this.store.movies = res.data.results
      console.dir(this.store.movies)
    }).catch(err => {
      console.log(err);
    })
  }
  },
}
</script>

<template>
  <AppSearch @search="searchFilm()"></AppSearch>
</template>

<style>

</style>