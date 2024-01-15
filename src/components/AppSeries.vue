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
                    <h2>serie-tv</h2>
                </div>
            </div>        
        </div>
        <div class="container">
            <div class="row d-flex flex-wrap ">
                <div class="col-4 colonna-tv" v-for="tv, index in store.series">
                    <div class="row d-flex flex-column">
                        <div class="col-12 poster-container ">
                            <div class="front-poster">
                                <img class="img-w" :src="getPoster(tv.poster_path)" alt="">
                            </div>
                            <div class="back-poster">
                                <h3>{{tv.name}}</h3>
                                <h4>{{tv.original_name}}</h4>
                                <div>
                                    <i v-for="star in getStar(tv.vote_average).stelle_piene" :key="index" class="fa-star fa-solid"></i>
                                    <i v-for="star in getStar(tv.vote_average).stelle_vuote" :key="index" class="fa-star fa-regular"></i> 
                                </div>
                                <span><img :src="getFlagUrl(tv.original_language)" alt=""></span>
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
    margin-top: 20px;
}

.img-w {
    width: 100%;
}


.poster-container {
    position: relative;
    width: 100%;
    transform-style: preserve-3d;
    transition: transform 1s;
    display: flex;

}

.back-poster {
    position: absolute;
    width: 100%;
    height: 100%;
}

.front-poster {
    position: relative;
}

.front-poster,
.back-poster {
    flex: 1;
    backface-visibility: hidden;
    z-index: 2;
}

.front-poster {
    transform: rotateY(0deg);
}

.back-poster {
    transform: rotateY(180deg);
    background-color: #fff;
}

.colonna-tv:hover .poster-container {
    transform: rotateY(180deg);
}
</style>