import fetchApi from '../../services/axiosMoviesApi';
import { useState, useEffect, lazy, Suspense } from 'react';
import { useParams } from 'react-router';

const MovieDetailsPage = () => {
    const { movieId } = useParams();

    const [movie, setMovie] = useState(null);

    const profileBaseUrl = 'http://image.tmdb.org/t/p/w185';

    useEffect(() => {
        fetchApi
            .moviesIdApi(movieId)
            .then(setMovie)
            .catch(error => {
                console.log(error.message);
            });
    }, [movieId]);
    console.log(movieId);

    return (
        <>
            {movie && (
                <>
                    <h2>{movie.original_title || movie.name}</h2>
                    <img
                        src={`${profileBaseUrl}${movie.poster_path}`}
                        alt={movie.title}
                    />
                </>
            )}
        </>
    );
};

export default MovieDetailsPage;
