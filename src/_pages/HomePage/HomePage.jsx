import s from './HomePage.module.css';
import { useState, useEffect, lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router';
import fetchApi from '../../services/axiosMoviesApi';
import TrendingList from '../../Components/TrendingList';
import PageHeading from '../../Components/PageHeading';
import LoaderSpinner from '../../Components/Loader/';
import ScrollToButton from '../../Components/ButtonScrollTo';

const HomePage = () => {
    const [trendingMovies, setTrendingMovies] = useState([]);
    const [isActiveBtn, setIsActiveBtn] = useState(false);

    useEffect(() => {
        fetchApi.trendingMoviesApi().then(trendingMovies => {
            setTrendingMovies(trendingMovies);
        });
    }, []);

    return (
        <div className={s.homePage}>
            <PageHeading title={'Trending Today'} />
            <Suspense fallback={<LoaderSpinner />}>
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
            {isActiveBtn && <ScrollToButton />}
            {trendingMovies.length > 0 && <ScrollToButton />}
        </div>
    );
};

export default HomePage;
