import s from './MovieList.module.css';
import { Link, useLocation } from 'react-router-dom';

const MovieList = ({ movies }) => {
    const location = useLocation();
    const imgSrcBaseUrl = 'https://image.tmdb.org/t/p/w500';

    return (
        <>
            <ul className={s.list}>
                {movies.map(
                    ({ id, original_title, poster_path, name, popularity }) => (
                        <li key={id} className={s.item}>
                            <Link
                                to={{
                                    pathname: `movies/${id}`,
                                    state: {
                                        from: location,
                                    },
                                }}
                            >
                                <h2 className={s.title}>
                                    {original_title || name}
                                </h2>
                                <img
                                    className={s.image}
                                    src={`${imgSrcBaseUrl}${poster_path}`}
                                    alt={original_title}
                                />
                                <p className={s.text}>
                                    popularity:{Math.round(popularity)}
                                </p>
                            </Link>
                        </li>
                    ),
                )}
            </ul>
        </>
    );
};

export default MovieList;
