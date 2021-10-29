import s from './CastList.module.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import fetchApi from '../../services/axiosMoviesApi';
import scrollPageDown from '../../scrollDown/scrollDown';
import noProfile from '../../images/no_poster.jpg';

const Cast = () => {
    const { movieId } = useParams();
    const [cast, setCast] = useState([]);

    const castBaseUrl = 'https://image.tmdb.org/t/p/w92';

    useEffect(() => {
        fetchApi
            .castMoviesApi(movieId)
            .then(setCast)
            .catch(error => {
                console.log(error.message);
            });
        if (cast.length > 0) {
            scrollPageDown();
        }
    }, [movieId, cast.length]);

    return (
        <div className={s.boxCastList}>
            {cast && cast.length > 0 ? (
                <ul className={s.list}>
                    {cast.map(({ id, original_name, name, profile_path }) => (
                        <li key={id} className={s.item}>
                            <img
                                className={s.image}
                                src={
                                    profile_path
                                        ? `${castBaseUrl}${profile_path}`
                                        : noProfile
                                }
                                alt={original_name}
                            />
                            <p className={s.text}>{original_name || name}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className={s.notFound}>
                    At this hour, there is no information about the cast.
                </p>
            )}
        </div>
    );
};

export default Cast;
