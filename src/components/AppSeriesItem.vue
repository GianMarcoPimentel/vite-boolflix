<script>
export default {
    name:'AppSeriesItem',

    props:{
        serie: Object,
    }
}
</script>

<template>
    
        <li class="card">
            <div class="card-front">
                
            </div>
            <div class="card-back">
                <span> {{ serie.original_name}} </span> <br>
                <span> {{ serie.name }} </span> <br>
                <img src="https://flagcdn.com/16x12/es.png" alt="">
                <span > {{ serie.original_language }} </span> <br>
                <span> {{ serie.vote_average }} </span>
            </div>
    
    </li>
    
</template>

<style lang="scss">
/* .card{
    
    width: calc(100% / 3 - (15px / 3 * 2));
    

    text-align: center;

   
    border: 1px red solid;

    

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
} */
</style>