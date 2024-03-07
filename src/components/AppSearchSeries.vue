<script>
import { store } from '../store.js';

export default {
    name: 'AppSearchSeries',

    data() {
        return {
            store,
        }
    }
}
</script> 

<template>
    <div class="container">
        <div class="search-bar">
            <input type="search" name="searchFilm"
            v-model="store.searchFilm"
            >
    
            <button @click="$emit('search')"> Cerca Film </button>
        </div>
    </div>
</template>

<style lang="scss">
.search-bar{
    display: flex;
    gap: 12px;
    margin: 1em 0;


    input{
        padding: 6px 8px;
    }
}
</style>