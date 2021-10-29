import axios from 'axios';

const KEY_API = '98a377205a96ff71da3bcf70b617967d';
axios.defaults.baseURL = 'https://api.themoviedb.org/';

const trendingMoviesApi = async (page = 1) => {
    try {
        const {
            data: { results },
        } = await axios.get(
            `3/trending/all/day?api_key=${KEY_API}&page=${page}&per_page=40`,
        );
        return results;
    } catch (error) {
        console.log(error.message);
    }
};

const searchMoviesApi = async searchQuery => {
    try {
        const { data: results } = await axios.get(
            `3/search/movie?api_key=${KEY_API}&language=en-US&query=${searchQuery}&include_adult=false`,
        );
        return results;
    } catch (error) {
        console.log(error.message);
    }
};

const moviesIdApi = async movieId => {
    try {
        const response = await axios.get(
            `3/movie/${movieId}?api_key=${KEY_API}&language=en-US`,
        );
        return response.data;
    } catch (error) {
        console.log(error.message);
    }
};

const castMoviesApi = async movieId => {
    try {
        const results = await axios.get(
            `3/movie/${movieId}/credits?api_key=${KEY_API}&language=en-US`,
        );
        return results.data.cast;
    } catch (error) {
        console.log(error.message);
    }
};

const reviewsMoviesApi = async movieId => {
    try {
        const { data: results } = await axios.get(
            `3/movie/${movieId}/reviews?api_key=${KEY_API}&language=en-US`,
        );
        return results;
    } catch (error) {
        console.log(error.message);
    }
};

const fetchApi = {
    trendingMoviesApi,
    searchMoviesApi,
    moviesIdApi,
    castMoviesApi,
    reviewsMoviesApi,
};

export default fetchApi;
