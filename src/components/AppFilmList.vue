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
        <ul>
            <AppFilmItem
            v-for=" currentFilm in store.movies"
            :movie="currentFilm"
            >
            </AppFilmItem>
        </ul>
    </div>
</template>

<style>

</style>