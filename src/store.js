import { reactive } from "vue";
export const store = reactive({
    films: [],
    series: [],
    urlMovies: "https://api.themoviedb.org/3/search/movie?language=it&api_key=",
    urlSeries: "https://api.themoviedb.org/3/search/tv?language=it&api_key=",
    urlImage: "https://image.tmdb.org/t/p/w342",
    apiKey: "421dd44c1d6a1715fbc147115d6da9ed",
    searchFilm: "",

})