import s from './HomePage.module.css';
import { useState, useEffect, lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router';
import fetchApi from '../../services/axiosMoviesApi';
import MovieList from '../../Components/MovieList';
import PageHeading from '../../Components/PageHeading';
import LoaderSpinner from '../../Components/Loader/';
import ScrollToButton from '../../Components/ButtonScrollTo';
import scrollPageDown from '../../scrollDown/scrollDown';
import Button from '../../Components/ButtonLoadMore';

const HomePage = () => {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [isActiveBtn, setIsActiveBtn] = useState(false);
    const [loadingSpinner, setLoadingSpinner] = useState(false);

    useEffect(() => {
        setLoadingSpinner(true);

        const fetchTrendingMovies = async () => {
            try {
                const results = await fetchApi.trendingMoviesApi(page);
                setMovies(movies => [...movies, ...results]);
                if (page !== 1) {
                    scrollPageDown();
                }
            } catch (error) {
                console.log(error.message);
            } finally {
                setLoadingSpinner(false);
            }
        };
        fetchTrendingMovies();
    }, [page]);

    const handleLoadMoreClick = () => {
        setLoadingSpinner(!loadingSpinner);
        setPage(prevPage => prevPage + 1);
        setLoadingSpinner(loadingSpinner);
    };

    return (
        <div className={s.homePage}>
            <PageHeading title={'Trending Today'} />
            <Suspense fallback={<LoaderSpinner />}>
                <Switch>
                    <Route>
                        {movies.length !== 0 && (
                            <MovieList movies={movies} exact />
                        )}
                        {movies.length !== 0 && (
                            <Button onClick={handleLoadMoreClick} />
                        )}
                    </Route>
                </Switch>
            </Suspense>
            {isActiveBtn && <ScrollToButton />}
            {movies.length > 20 && <ScrollToButton />}
        </div>
    );
};

export default HomePage;
