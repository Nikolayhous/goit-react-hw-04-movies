import { Switch, Route, Redirect } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Loader from '../Loader';
import HeaderNavigation from '../HeaderNavigation';
import Container from '../Container';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../Footer';

const HomePage = lazy(() => import('../../_pages/HomePage'));
const MoviesPage = lazy(() => import('../../_pages/MoviesPage'));
const NotFoundView = lazy(() => import('../../_pages/NotFoundView'));
const MovieDetailsPage = lazy(() => import('../../_pages/NotFoundView'));

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
                        <Route path="/movies/:movieId">
                            <MovieDetailsPage />
                        </Route>
                        <Route path="/error">
                            <NotFoundView />
                        </Route>
                        <Redirect to="/error" />
                    </Switch>
                </Container>
            </Suspense>
            <Footer />
        </>
    );
}

export default App;
