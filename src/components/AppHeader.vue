<script>
import { store } from "../store.js"
export default {
    name: "AppHeader",
    data() {
        return {
            store
        }
    },
}

</script>
<template lang="">
    <header>
        <div class="container">
            <div class="row my-3">
                <div class="col-6 ">
                    <h1>boolflix</h1>
                </div>
                <div class="col-6">
                    <form class="d-flex">
                        <input class="" type="" placeholder="Search" aria-label="Search" v-model="store.searchFilm" >
                        <!--NON FUNZIONA @keyup.enter="$emit('perform_search') -->
                        <button type="button" class="btn btn-success" @click="$emit('perform_search')">Search</button>
                    </form>
                </div>
            </div>
        </div>
    </header>
</template>
<style lang="scss" scoped>
@use "../styles/generals.scss" as *;
@use "../styles/partials/variables" as *;

header {
    background-color: black;
}

h1 {
    text-transform: uppercase;
    display: inline;
    vertical-align: middle;
    margin: 0px 20px;
    font-family: 'Roboto', sans-serif;
    color: $colore-primario;

}
</style>