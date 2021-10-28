import s from './HomePage.module.css';
import { useState, useEffect, lazy, Suspense } from 'react';
import fetchApi from '../../services/axiosMoviesApi';
import TrendingList from '../../Components/TrendingList';
import PageHeading from '../../Components/PageHeading';
import LoaderSpinner from '../../Components/Loader/';
import { Route, Switch } from 'react-router';

const HomePage = () => {
    const [trendingMovies, setTrendingMovies] = useState([]);

    useEffect(() => {
        fetchApi.trendingMoviesApi().then(trendingMovies => {
            setTrendingMovies(trendingMovies);
        });
    }, []);

    return (
        <>
            <Suspense fallback={<LoaderSpinner />}>
                <PageHeading title={'Trending Today'} />
                <Switch>
                    <Route>
                        {trendingMovies.length && (
                            <TrendingList
                                trendingMovies={trendingMovies}
                                exact
                            />
                        )}
                    </Route>
                </Switch>
            </Suspense>
        </>
    );
};

export default HomePage;
