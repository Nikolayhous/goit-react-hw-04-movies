import { useState, useEffect, lazy, Suspense } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import LoaderSpinner from '../../Components/Loader';

const MovieDetailsPage = lazy(() => import('../MovieDetailsPage'));

const MoviesPage = () => {
    const { path } = useRouteMatch();
    return (
        <>
            <Suspense fallback={<LoaderSpinner />}>
                <Switch>
                    <Route path={`${path}/:movieId`}>
                        <MovieDetailsPage />
                    </Route>
                </Switch>
            </Suspense>
        </>
    );
};

export default MoviesPage;
