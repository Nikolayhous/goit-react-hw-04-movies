import { useState, useEffect, lazy, Suspense } from 'react';
import {
    Route,
    useRouteMatch,
    Switch,
    useHistory,
    useLocation,
} from 'react-router-dom';
import LoaderSpinner from '../../Components/Loader';
import SearchForm from '../../Components/SearchForm';
import fetchApi from '../../services/axiosMoviesApi';

const MovieDetailsPage = lazy(() => import('../MovieDetailsPage'));
const MoviesId = lazy(() => import('../../Components/MoviesId'));

const MoviesPage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [movies, setMivies] = useState([]);

    const { path } = useRouteMatch();
    const history = useHistory();
    const location = useLocation();
    return (
        <>
            <Suspense fallback={<LoaderSpinner />}>
                <Switch>
                    <Route path={`${path}/:movieId`}>
                        <MovieDetailsPage />
                    </Route>
                    <Route
                        exact
                        path="/movies"
                        render={() => (
                            <>
                                <SearchForm />
                            </>
                        )}
                    />
                </Switch>
            </Suspense>
        </>
    );
};

export default MoviesPage;
