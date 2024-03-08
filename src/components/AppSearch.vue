<script>
import { store } from '../store.js';

export default {
    name: 'AppSearch',

    data() {
        return {
            store,
        }
    }
}
</script> 

<template>
        <div class="heading">
            <div class="logo">
                <h4>The</h4>
                <h1>Boolflix</h1>
            </div>
            <div class="search-bar">
                <input type="search" name="searchFilm"
                v-model="store.search"
                >
        
                <button class="btn" @click="$emit('search')"> Cerca </button>

                <i class="fa-solid fa-bell"></i>


            </div>
        </div>


    
</template>


<style lang="scss">
.heading{
    width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: black;
    

    padding: 0px 20px;
}
.logo{
    display: flex;
    align-items: center;
    gap: 5px;

    color: red;
}
.search-bar{
    display: flex;
    align-items: center;
    gap: 5px;
    margin: 1em 0;
    input{
        padding: 6px 8px;
        border-radius: 10px;
    }
    .btn{
        color: white;
        background-color: red;
        border-radius: 10px;
        border: none;
        padding: 5px 15px;
    }
    .fa-bell:hover{
        color: yellow;
    }
}


</style>