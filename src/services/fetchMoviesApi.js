import axios from 'axios';

const KEY_API = '98a377205a96ff71da3bcf70b617967d';
axios.defaults.baseURL = 'https://api.themoviedb.org/';

const trendingMoviesApi = async () => {
    try {
        const { data: trending } = await axios.get(
            `3/trending/all/day?api_key=${KEY_API}&page=30`,
        );
        return trending;
    } catch (error) {
        console.log(error.message);
    }
};

const detailsMoviesApi = async (searchQuery, page = 1) => {
    try {
        const { data: results } = await axios.get(
            `3/search/movie?api_key=${KEY_API}&language=en-US&query=${searchQuery}&page=${page}`,
        );
        return results;
    } catch (error) {
        console.log(error.message);
    }
};

const moviesApi = async movie_id => {
    try {
        const { data } = await axios.get(
            `3/movie/${movie_id}?api_key=${KEY_API}&page=1`,
        );
        return data;
    } catch (error) {
        console.log(error.message);
    }
};

const creditsMoviesApi = async movie_id => {
    try {
        const { data } = await axios.get(
            `3/movie/${movie_id}/credits?api_key=${KEY_API}&page=1`,
        );
        return data;
    } catch (error) {
        console.log(error.message);
    }
};

const reviewsMoviesApi = async movie_id => {
    try {
        const { data } = await axios.get(
            `3/movie/${movie_id}/reviews?api_key=${KEY_API}&page=1`,
        );
        return data;
    } catch (error) {
        console.log(error.message);
    }
};

trendingMoviesApi();
detailsMoviesApi();
moviesApi();
creditsMoviesApi();
reviewsMoviesApi();

export default {
    trendingMoviesApi,
    detailsMoviesApi,
    moviesApi,
    creditsMoviesApi,
    reviewsMoviesApi,
};
