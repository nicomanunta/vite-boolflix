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
            <div class="row py-3 ">
                <div class="col-6">
                    <h1>boolflix</h1>
                </div>
                <div class="col-6 d-flex justify-content-end ">
                   
                    <input class="me-2" type="" placeholder=" Search" aria-label="Search" v-model="store.searchFilm" @keyup.enter="$emit('perform_search')">
                    
                    <button type="button" class="btn btn-success" @click="$emit('perform_search')">Search</button>
                    
                </div>
            </div>
        </div>
    </header>
</template>
<style lang="scss" scoped>
@use "../styles/partials/variables" as *;
@use "../styles/generals.scss" as *;

header {
    background-color: black;
}

h1 {
    text-transform: uppercase;
    display: inline;
    vertical-align: middle;
    color: $colore-primario;
}

input {
    border-radius: 5px;
}
</style>