<script>
import { store } from "../store.js"
export default {
    name: "AppMovies",
    data() {
        return {
            store
        }
    },
}
</script>
<template lang="">
    <div>
        <div class="container ">
            <div class="row ">
                <div class="col-12">
                    <h1>film</h1>
                </div>
            </div>        
        </div>
        <div class="container ">
            <div class="row ">
                <div class="col-3" v-for="film, index in store.films" :key="index">
                    <h5 id="dimensioni-font">{{film.title}}</h5>
                    <h6>{{film.original_title}}</h6>
                    <span>{{film.vote_average}}</span>
                    <br>
                    <span>{{film.original_language}}</span>
                </div>
            </div>        
        </div>
    </div>
</template>
<style lang="scss" scoped>
@use "../styles/generals.scss" as *;
@use "../styles/partials/variables" as *;

h1 {
    text-transform: uppercase;
}
</style>