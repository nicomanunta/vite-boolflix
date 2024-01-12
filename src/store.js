import { reactive } from "vue";
export const store = reactive({
    urlMovies: "https://api.themoviedb.org/3/search/movie?",
    urlSeries: "https://api.themoviedb.org/3/search/tv?",
    apiKey: "421dd44c1d6a1715fbc147115d6da9ed"
})