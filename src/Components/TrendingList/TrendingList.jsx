import s from './TrendingList.module.css';
import { Link, useRouteMatch } from 'react-router-dom';

const TrendingList = ({ trendingMovies }) => {
    const { url } = useRouteMatch();
    const imgSrcBaseUrl = 'https://image.tmdb.org/t/p/w500';

    return (
        <>
            {trendingMovies.length && (
                <ul className={s.list}>
                    {trendingMovies.map(
                        ({
                            id,
                            original_title,
                            poster_path,
                            name,
                            popularity,
                        }) => (
                            <li key={id} className={s.item}>
                                <Link to={`${url}/${id}`}>
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
            )}
        </>
    );
};

export default TrendingList;
