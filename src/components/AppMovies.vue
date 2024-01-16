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
        <div class="container pt-4">
            <div class="row ">
                <div class="col-12">
                    <h2>film</h2>
                </div>
            </div>        
        </div>
        <div class="container ">
            <div class="row">
                <div class="col-4 colonna-tv" v-for="film, index in store.films" :key="index">
                    <div class="row d-flex flex-column">
                        <div class="col-12 poster-container p-0  ">
                            <div class="front-poster">
                                <img class="img-w" :src="getPoster(film.poster_path)" alt="">
                            </div>
                            <div class="back-poster d-flex flex-column align-items-center">
                                <h5 class="pt-3">Titolo</h5>
                                <h5 class="mb-4 px-2 "><b>"{{film.title}}"</b></h5>
                                <h6>Titolo originale</h6>
                                <h6 class="mb-4 px-2"><b>"{{film.original_title}}"</b></h6>
                                <h5>Trama</h5>
                                <span class="text-center mb-5 px-4">{{film.overview}}</span>
                                <div>
                                    <i v-for="star in getStar(film.vote_average).stelle_piene" :key="index" class="fa-star fa-solid"></i>
                                    <i v-for="star in getStar(film.vote_average).stelle_vuote" :key="index" class="fa-star fa-regular"></i>  
                                </div>
                                <span><img :src="getFlagUrl(film.original_language)" alt=""></span>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>        
        </div>
    </div>
</template>
<style lang="scss" scoped>
@use "../styles/generals.scss" as *;
@use "../styles/partials/variables" as *;

h2 {
    text-transform: uppercase;
}

.img-w {
    width: 100%;
    height: 660px;
}

.poster-container {
    position: relative;
    width: 100%;
    transform-style: preserve-3d;
    transition: transform 1s;
    display: flex;
    color: white;
}

.back-poster {
    position: absolute;
    width: 100%;
    height: 100%;
    transform: rotateY(180deg);
    background-color: black;
    overflow: scroll;
}

.front-poster {
    position: relative;
    transform: rotateY(0deg);
}

.front-poster,
.back-poster {
    flex: 1;
    backface-visibility: hidden;
    z-index: 2;
}

.colonna-tv:hover .poster-container {
    transform: rotateY(180deg);
}
</style>