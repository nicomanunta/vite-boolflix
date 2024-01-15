<script>
import { store } from "../store.js"
export default {
    name: "AppMovies",
    data() {
        return {
            store
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
        getPoster(poster_path) {
            return `https://image.tmdb.org/t/p/w342${poster_path}`;
        },
        getStar(vote_average) {
            let star = Math.round(vote_average / 2);
            let stelle_piene = [];
            for (let i = 0; i < star; i++) {
                stelle_piene.push(i);
            }
            console.log(stelle_piene)

            let stelle_vuote = [];
            for (let i = star; i < 5; i++) {
                stelle_vuote.push(i);
            }
            console.log(stelle_vuote)



            return { stelle_piene, stelle_vuote }

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
                        <li><img :src="getPoster(film.poster_path)" alt=""></li>
                        <li>{{film.title}}</li>
                        <li>{{film.original_title}}</li>
                        <li><i v-for="star in getStar(film.vote_average).stelle_piene" :key="index" class="fa-star fa-solid"></i></li>
                        <li><i v-for="star in getStar(film.vote_average).stelle_vuote" :key="index" class="fa-star fa-regular"></i></li>  
                        <li>{{film.original_language}}</li>
                        <li><img :src="getFlagUrl(film.original_language)" alt=""></li>
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