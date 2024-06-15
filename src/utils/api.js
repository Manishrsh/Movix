import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3Mjc5YzY3OGFhMTY5ZTE5ZDVlMTk1M2IwZTQyMDQ1NiIsInN1YiI6IjY2NWYyYWJhMzI4ZDQwZjJlNTgwZDg5ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iSBN44vsUCI5tQfz694J9TR49zAYq_TJhwzxszFH0_c";

const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
    try {
        const { data } = await axios.get(BASE_URL + url, {
            headers,
            params,
        });
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
};