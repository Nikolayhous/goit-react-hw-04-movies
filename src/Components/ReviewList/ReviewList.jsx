import s from './Reviews.module.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import fetchApi from '../../services/axiosMoviesApi';
import scrollPageDown from '../../scrollDown/scrollDown';

const Review = () => {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetchApi
            .reviewsMoviesApi(movieId)
            .then(res => {
                setReviews(res);
                scrollPageDown();
            })
            .catch(error => {
                console.log(error.message);
            });
    }, [movieId]);

    return (
        <div className={s.reviews}>
            {reviews && reviews.length > 0 ? (
                <ul className={s.list}>
                    {reviews.map(({ id, author, content }) => (
                        <li key={id} className={s.item}>
                            <p className={s.author}>{author}</p>
                            <p className={s.text}>{content}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className={s.error}>Not information </p>
            )}
        </div>
    );
};

export default Review;
