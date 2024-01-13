<script>
import { store } from "../store.js"
export default {
    name: "AppSeries",
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
                    <h1>serie-tv</h1>
                </div>
            </div>        
        </div>
        <div class="container">
            <div class="row">
                <div class="col-3" v-for="tv, index in store.series">
                    <h5 id="dimensioni-font">{{tv.name}}</h5>
                    <h6>{{tv.original_name}}</h6>
                    <span>{{tv.vote_average}}</span>
                    <br>
                    <span>{{tv.original_language}}</span>
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