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
    <li>
        <div class="card">
            <span>Titolo: {{ movie.original_title }}</span> <br>
            <span>Titolo originale : {{ movie.title }}</span> <br>
            <span>Lingua originale : {{ movie.original_language }}</span> <br>
            <span>Voto: {{ movie.vote_average }}</span>
        </div>
    </li>
</template>

<style lang="scss">

.card{
    
}

</style>