<script>
import axios from 'axios';

import { store } from './store.js';

import AppSearch from './components/AppSearch.vue';

/* import AppSearchSeries from './components/AppSearchSeries.vue'; */

import AppFilmList from './components/AppFilmList.vue';

/* import AppSeriesList from './components/AppSeriesList.vue'; */

export default {
  data() {
    return {
     
      store,
    }
  },


  components: {
    AppSearch,
   
    AppFilmList,
    
  },

  methods: {
    searchFilm(){
    axios.get('https://api.themoviedb.org/3/search/movie?api_key=129c7c147dc0e52f5990dc27c7d71e42&query= ' + this.store.search).then(res => {
      
      console.dir(res.data.results);
      this.store.movies = res.data.results
      console.dir(this.store.movies)
    }).catch(err => {
      console.log(err);
    })
    console.log('ok')
    axios.get('https://api.themoviedb.org/3/search/tv?api_key=129c7c147dc0e52f5990dc27c7d71e42&query= ' + this.store.search).then(res => {
      console.dir(res.data.results);
      this.store.series = res.data.results;
    })
  }
  
  },
/* 
  searchTv() {
    axios.get('https://api.themoviedb.org/3/search/tv?api_key=129c7c147dc0e52f5990dc27c7d71e42&query= ' + this.store.searchSeries).then(res => {
      console.dir(res.data.results);
      this.store.series = res.data.results;
    })
  }
  }, */
}
</script>

<template>
  <AppSearch @search="searchFilm()">
    </AppSearch>
  <AppFilmList></AppFilmList>
  <!-- <AppSearchSeries @search="searchTv() "></AppSearchSeries> -->
  <AppSeriesList></AppSeriesList>
</template>

<style>

</style>