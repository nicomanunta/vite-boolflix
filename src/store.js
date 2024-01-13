import { reactive } from "vue";
export const store = reactive({
    films: [],
    series: [],
    urlMovies: "https://api.themoviedb.org/3/search/movie?api_key=",
    urlSeries: "https://api.themoviedb.org/3/search/tv?api_key=",
    apiKey: "421dd44c1d6a1715fbc147115d6da9ed",
    searchFilm: "",
})