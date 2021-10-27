import s from './HomePage.module.css';
import { useState, useEffect, lazy, Suspense } from 'react';
import fetchApi from '../../services/axiosMoviesApi';
import TrendingList from '../../Components/TrendingList';
import Loader from '../../Components/Loader/Loader';
import { Route, Switch } from 'react-router';

const MovieDetailsPage = lazy(() => import('../MovieDetailsPage'));
const HomePage = () => {
    const [trendingMovies, setTrendingMovies] = useState([]);

    useEffect(() => {
        fetchApi.trendingMoviesApi().then(trendingMovies => {
            setTrendingMovies(trendingMovies);
        });
    }, []);

    return (
        <>
            <Suspense fallback={<Loader />}>
                <h1 className={s.title}>Trending Today</h1>
                <Switch>
                    <Route path="/movies/:moviesId">
                        <MovieDetailsPage />
                    </Route>
                    <Route>
                        <TrendingList trendingMovies={trendingMovies} exact />
                    </Route>
                </Switch>
            </Suspense>
        </>
    );
};

export default HomePage;
