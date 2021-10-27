import s from './HomePage.module.css';
import { useState, useEffect, lazy, Suspense } from 'react';
import fetchApi from '../../services/axiosMoviesApi';
import TrendingList from '../../Components/TrendingList';
import Loader from '../../Components/Loader/Loader';
import { Route, Switch } from 'react-router';

const HomePage = () => {
    const [trendingMovies, setTrendingMovies] = useState([]);
    console.log(trendingMovies);
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
                    <Route
                        exact
                        path="/"
                        render={() => (
                            <>
                                <TrendingList trendingMovies={trendingMovies} />
                            </>
                        )}
                    ></Route>
                </Switch>
            </Suspense>
        </>
    );
};

export default HomePage;
