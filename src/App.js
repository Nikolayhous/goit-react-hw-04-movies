import { Switch, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Loader from './Components/Loader';
import HeaderNavigation from './Components/HeaderNavigation';
import Container from './Components/Container';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const HomePage = lazy(() => import('./_pages/HomePage'));
const MoviesPage = lazy(() => import('./_pages/MoviesPage'));
const NotFoundView = lazy(() => import('./_pages/NotFoundView'));
const MovieDetailsPage = lazy(() => import('./_pages/NotFoundView'));

function App() {
    return (
        <>
            <ToastContainer />
            <HeaderNavigation />
            <Suspense fallback={<Loader />}>
                <Container>
                    <Switch>
                        <Route path="/" exact>
                            <HomePage />
                        </Route>
                        <Route path="/movies">
                            <MoviesPage />
                        </Route>
                        <Route path={'movies/:movieId'}>
                            <MovieDetailsPage />
                        </Route>
                        <Route>
                            <NotFoundView />
                        </Route>
                    </Switch>
                </Container>
            </Suspense>
        </>
    );
}

export default App;
