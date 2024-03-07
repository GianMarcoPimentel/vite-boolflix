<script>
import { store } from '../store.js';

import AppSeriesItem from './AppSeriesItem.vue';
export default {
    name:'AppSeriesLit',

    data() {
        return {
            store,
        }
    },
    components: {
        AppSeriesItem,
    }


}


</script>

<template>
    <div class="container">
        <h1>Series:</h1>
        <hr>
        <ul>
            <AppSeriesItem 
            v-for=" currentSerie in store.series"
            :serie="currentSerie"
            >

            </AppSeriesItem>
        </ul>
    </div>
</template>

<style>
   ul{
    list-style-type: none;
    display: flex;
    flex-flow: row wrap;
    
    gap: 15px;

    
    padding: 25px;
}
</style>