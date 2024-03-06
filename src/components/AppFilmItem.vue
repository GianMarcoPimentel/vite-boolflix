<script>

/* import { store } from '../store.js'; */

export default {
    name : 'AppFilmItem',

    props: {
        movie: Object,
    }
}
</script>

<template>
    <li class="card">
        
            <span>Titolo: {{ movie.original_title }}</span> <br>
            <span>Titolo originale : {{ movie.title }}</span> <br>
            <span>Lingua originale : {{ movie.original_language }}</span> <br>
            <span>Voto: {{ movie.vote_average }}</span>
    
    </li>
</template>

<style lang="scss">

.card{
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    gap: 15px;
    
    width: calc(100% / 3 - (15px / 3 * 2));

    text-align: center;

   
    border: 1px red solid;

    padding: 10px;
}

</style>