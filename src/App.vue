<script>
import axios from 'axios';

import { store } from './store.js';

import AppSearch from './components/AppSearch.vue';

import AppFilmList from './components/AppFilmList.vue';

export default {
  data() {
    return {
      movies:[],
      store,
    }
  },


  components: {
    AppSearch,
    AppFilmList,
  },

  methods: {
    searchFilm(){
    axios.get('https://api.themoviedb.org/3/search/movie?api_key=129c7c147dc0e52f5990dc27c7d71e42&query= ' + this.store.searchFilm).then(res => {
      
      console.dir(res.data.results);
      this.store.movies = res.data.results
      console.dir(this.store.movies)
    }).catch(err => {
      console.log(err);
    })
    console.log('ok')
  }
  },
}
</script>

<template>
  <AppSearch @search="searchFilm()"></AppSearch>
  <AppFilmList></AppFilmList>
</template>

<style>

</style>