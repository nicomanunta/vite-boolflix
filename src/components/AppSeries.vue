<script>
import { store } from "../store.js"

export default {
    name: "AppSeries",
    data() {
        return {
            store,

        }
    },
    methods: {
        getFlagUrl(original_language) {
            if (original_language.toUpperCase() == "EN") {
                return `https://flagsapi.com/GB/flat/64.png`
            }
            else if (original_language.toUpperCase() == "KO") {
                return `https://flagsapi.com/KR/flat/64.png`
            }
            else if (original_language.toUpperCase() == "ZH") {
                return `https://flagsapi.com/CN/flat/64.png`
            }
            else if (original_language.toUpperCase() == "JA") {
                return `https://flagsapi.com/JP/flat/64.png`
            }
            else if (original_language.toUpperCase() == "DA") {
                return `https://flagsapi.com/DK/flat/64.png`
            }
            else {
                return `https://flagsapi.com/${original_language.toUpperCase()}/flat/64.png`
            }
        },

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
                    <ul>
                        <li>{{tv.name}}</li>
                        <li>{{tv.original_name}}</li>
                        <li>{{tv.vote_average}}</li>
                        <li><img :src="getFlagUrl(tv.original_language)" alt=""></li>
                        
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
    margin-top: 20px;
}

ul {
    list-style: none;
    padding: 0px 0px;
}

.language {
    text-transform: uppercase;
}
</style>