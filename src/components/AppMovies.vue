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
                    <ul>
                        <li>{{film.title}}</li>
                        <li>{{film.original_title}}</li>
                        <li>{{film.vote_average}}</li>
                        <li>{{film.original_language}}</li>
                        <li></li>
                    </ul>
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

ul {
    list-style: none;
    padding: 0px 0px;
}
</style>