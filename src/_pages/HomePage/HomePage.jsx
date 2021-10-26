import s from './HomePage.module.css';
import { useState } from 'react';
import HeaderNavigation from '../../Components/HeaderNavigation';
// import { trendingMoviesApi } from '../../services/axiosMoviesApi';

const HomePage = () => {
    // const [trendingMovies, setTrendingMovies] = useState([]);
    return (
        <>
            <header className={s.header}>
                <HeaderNavigation />
            </header>

            <h1 className={s.title}>Trending Today</h1>

            <ul className={s.list}>
                <li></li>
            </ul>
        </>
    );
};

export default HomePage;
