<script>

/* import { store } from '../store.js'; */


export default {
    name : 'AppFilmItem',

    props: {
        movie: Object,

    },

    data(){
        return {
                
        }
    }
}
</script>

<template>
    
    <li class="card">
            <div class="card-front">
                <img :src= "'https://image.tmdb.org/t/p/w342'+movie.poster_path" alt="">
            </div>
            <div class="card-back">
                <span> {{ movie.original_title }} </span> 
                <span> {{ movie.title }} </span> 
                <span>
                <img :src="'https://flagcdn.com/16x12/'+movie.original_language+'.png'" alt="">         
                </span>
                <span> {{ movie.vote_average }} </span>
            </div>
    
    </li>
</template>

<style lang="scss">

.card{
    
    width: calc(100% / 3 - (15px / 3 * 2));
    

    .card-back{
        display: none;
    }
    .card-front{
        width: 100%;
        img{
            width: 100%;
            max-width: 100%;
            height: 100%;
            object-position: center;
        }
    }
    
}
.card:hover{
    .card-back{
        width: 100%;
        height: 100%;
        display: inline-block;
        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: space-around;
       /*  gap: 10px; */

        text-align: center;
        background-color: black;
    }
    .card-front{
        display: none;
        
    }
}

</style>