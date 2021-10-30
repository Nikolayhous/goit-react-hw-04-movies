import { useState, useEffect, lazy, Suspense } from 'react';
import { Route, useRouteMatch, Switch } from 'react-router-dom';
import LoaderSpinner from '../../Components/Loader';
import SearchForm from '../../Components/SearchForm';
import fetchApi from '../../services/axiosMoviesApi';

const MovieDetailsPage = lazy(() => import('../MovieDetailsPage'));
const MovieList = lazy(() => import('../../Components/MovieList'));

const MoviesPage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [movies, setMovies] = useState([]);

    const { path } = useRouteMatch();

    useEffect(() => {
        if (searchQuery === '') {
            return;
        }
        fetchApi
            .searchMoviesApi(searchQuery)
            .then(movies => {
                setMovies(prev => [...prev, ...movies]);
            })
            .catch(error => {
                console.log(error.message);
            });
    }, [searchQuery]);

    const handleFormSubmit = searchQuery => {
        setSearchQuery(searchQuery);
        setMovies([]);
    };

    return (
        <>
            <Suspense fallback={<LoaderSpinner />}>
                <Switch>
                    <Route path={`${path}/:movieId`}>
                        <MovieDetailsPage />
                    </Route>
                    <Route exact path="/movies">
                        <SearchForm onSubmit={handleFormSubmit} />
                        {movies.length !== 0 && <MovieList movies={movies} />}
                    </Route>
                </Switch>
            </Suspense>
        </>
    );
};

export default MoviesPage;
