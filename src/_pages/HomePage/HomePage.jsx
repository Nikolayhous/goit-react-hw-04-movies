import s from './HomePage.module.css';
import { useState, useEffect, lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router';
import fetchApi from '../../services/axiosMoviesApi';
import MovieList from '../../Components/MovieList';
import PageHeading from '../../Components/PageHeading';
import LoaderSpinner from '../../Components/Loader/';
import ScrollToButton from '../../Components/ButtonScrollTo';

const HomePage = () => {
    const [movies, setMovies] = useState([]);
    const [isActiveBtn, setIsActiveBtn] = useState(false);

    useEffect(() => {
        fetchApi.trendingMoviesApi().then(movies => {
            setMovies(movies);
        });
    }, []);

    return (
        <div className={s.homePage}>
            <PageHeading title={'Trending Today'} />
            <Suspense fallback={<LoaderSpinner />}>
                <Switch>
                    <Route>
                        {movies.length && <MovieList movies={movies} exact />}
                    </Route>
                </Switch>
            </Suspense>
            {isActiveBtn && <ScrollToButton />}
            {movies.length > 0 && <ScrollToButton />}
        </div>
    );
};

export default HomePage;
