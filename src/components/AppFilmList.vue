<script>

import { store } from '../store.js';

import AppFilmItem from './AppFilmItem.vue'


export default {
    name : 'AppFilmList',

    data() {
        return {
            store,
        }
    },

    components: {
        AppFilmItem,
        
    }
}
</script>

<template>
    <div class="container">
        <section>
            <h2>Films:</h2>
            <hr>
            <ul>
                <AppFilmItem
                v-for=" currentFilm in store.movies"
                :movie="currentFilm"
                
                >
                </AppFilmItem>
            </ul>
        </section>


        <section>
            <h2>Series:</h2>
            <hr>
            <ul>
                <AppFilmItem
                v-for=" currentSerie in store.series"
                :movie="currentSerie"
                
                >
                </AppFilmItem>
            </ul>
        </section>


    </div>
</template>

<style>
    ul{
    list-style-type: none;
    display: flex;
    flex-flow: row wrap;
    
    padding: 25px;
}
</style>