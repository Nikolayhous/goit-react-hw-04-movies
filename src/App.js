import axiosMoviesApi from './services/axiosMoviesApi';
import { Route } from 'react-router-dom';
import Homepage from './_pages/HomePage';
import MoviesPage from './_pages/MoviesPage';

function App() {
    return (
        <>
            <Route path="/" exact>
                <Homepage />
            </Route>
            <Route path="/movies">
                <MoviesPage />
            </Route>
        </>
    );
}

export default App;
