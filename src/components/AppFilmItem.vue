<script>

/* import { store } from '../store.js'; */


export default {
    name : 'AppFilmItem',

    props: {
        movie: Object,
       /*  serie: Object, */
    },

    data(){
        return {
                stelle:0,
                lang: '',
                }
    },

    created() {
        this.stelle = Math.floor(this.movie.vote_average);
        
        console.log(this.stelle)

    },

    methods:{
       /*  star: function(){
            Math.floor(movie.vote_average);
            console.log(movie.vote_average)
        }, */
        changeLanguage(){

            if(this.movie.original_language == 'en'){
                return  'gb';
            } else if (this.movie.original_language == 'ja'){
                return  'jp';
            } else{
                return this.movie.original_languag;
            }
        },

    },
}
</script>

<template>
    <li class="card">
            <div class="card-front">
                <img :src= "'https://image.tmdb.org/t/p/w342'+movie.poster_path" alt="">
            </div>
            <div class="card-back">
                <span> {{ movie.original_title  }} </span> 
                <span> {{ movie.title  }} </span> 
                <span>
                <img 
                @click="changeLanguage"
                :src="'https://flagcdn.com/16x12/'+changeLanguage()+'.png'" alt="">         
                </span>
                <span> {{stelle }} </span>
            </div>
    
    </li>
</template>

<style lang="scss">

.card{
    
    width: calc(100% / 5);
    

    .card-back{
        display: none;
    }
    .card-front{
        width: 100%;
        img{
            width: 100%;
            max-width: 100%;
            height: 100%;
            
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