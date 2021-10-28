import s from './MovieDetailsPage.module.css';
import fetchApi from '../../services/axiosMoviesApi';
import { useState, useEffect, lazy, Suspense } from 'react';
import {
    useParams,
    NavLink,
    useRouteMatch,
    useLocation,
} from 'react-router-dom';
import PageHeading from '../../Components/PageHeading';
import MoviesId from '../../Components/MoviesId';
// import Cast from '../../Components/Cast';
import GoBack from '../../Components/ButtonGoBack';

const cast = lazy(() => import('../../Components/Cast'));

const MovieDetailsPage = () => {
    const { movieId } = useParams();
    const { url, path } = useRouteMatch();
    const location = useLocation();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        fetchApi
            .moviesIdApi(movieId)
            .then(setMovie)
            .catch(error => {
                console.log(error.message);
            });
    }, [movieId]);

    return (
        <>
            <PageHeading title={'Information about the film.'} />
            <GoBack />
            {movie && <MoviesId movie={movie} />}
            {/* <Cast /> */}
        </>
    );
};

export default MovieDetailsPage;
