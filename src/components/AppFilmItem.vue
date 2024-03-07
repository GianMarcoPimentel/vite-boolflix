<script>

/* import { store } from '../store.js'; */


export default {
    name : 'AppFilmItem',

    props: {
        movie: Object,

    },

    data(){
        return {
            langs: ['ja', 
                    'en', 
                    'it',
                    'es',
                    
                ]
        }
    }
}
</script>

<template>
    <li class="card">
            <div class="card-front">
                <img :src="movie.poster_path" alt="">
            </div>
            <div class="card-back">
                <span> {{ movie.original_title }} </span> <br>
                <span> {{ movie.title }} </span> <br>
                <img src="https://flagcdn.com/16x12/en.png" alt="">
                <span > {{ movie.original_language }} </span> <br>
                <span> {{ movie.vote_average }} </span>
            </div>
    
    </li>
</template>

<style lang="scss">

.card{
    
    width: calc(100% / 3 - (15px / 3 * 2));
    height: 400px;

    text-align: center;

   
    border: 1px red solid;

    padding: 10px;

    .card-back{
        display: none;
    }
    
}
.card:hover{
    .card-back{
        display: inline-block;
        display: flex;
        flex-flow: column;
        align-items: center;
        gap: 20px;
    }
    .card-front{
        display: none;
    }
}

</style>