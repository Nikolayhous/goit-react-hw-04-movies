import s from './Cast.module.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import fetchApi from '../../services/axiosMoviesApi';

const Cast = () => {
    const { movieId } = useParams();
    const [cast, setCast] = useState([]);

    useEffect(() => {
        fetchApi.castMoviesApi(movieId).then(response => {
            setCast(response).catch(error => {
                console.log(error.message);
            });
        });
    }, [movieId]);

    return (
        <>
            {cast && cast.length !== 0 ? (
                <ul>
                    {cast.map(({ id, name, character }) => (
                        <li key={id}>
                            <p>{name}</p>
                            <p>{character}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Not actor</p>
            )}
            <h2>Cast</h2>
        </>
    );
};

export default Cast;
