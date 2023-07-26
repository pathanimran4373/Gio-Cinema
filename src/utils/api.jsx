// globale method for call the api
//globale api function
import axios from 'axios'

// base url of tmdb website
const BASE_URL = "https://api.themoviedb.org/3";

//import token from env
const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOGUwODFhMjBmY2I0YzJkZjIwOTM0ZmU0YzJiYTdlYSIsInN1YiI6IjY0N2Y3YTc4NzFmZmRmMDE0ZTdmNmYxNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5mwXWwQC_C3XNja24itUTTTR9m-dybXn1acU6v5GQ2o"

const headers = {
    Authorization:"bearer " + TMDB_TOKEN,
};

//method of access api and get diffrent end points by url and params parametrs
//eg ./popular/movies/ or /trending/movies

export const fetchDataFromApi = async(url,params)=>{
    try {
        const {data} = await axios.get(BASE_URL + url,{
            headers,
            params
        })
        // console.log(data);

        return data;
        
    } catch (error) {
        return error;
    }
}