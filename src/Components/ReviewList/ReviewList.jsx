import s from './Reviews.module.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import fetchApi from '../../services/axiosMoviesApi';
import scrollPageDown from '../../scrollDown/scrollDown';

const Review = () => {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);
    console.log(reviews);

    useEffect(() => {
        fetchApi
            .reviewsMoviesApi(movieId)
            .then(setReviews)
            .catch(error => {
                console.log(error.message);
            });
        if (reviews.length > 0) {
            scrollPageDown();
            console.log(movieId);
        }
    }, [movieId, reviews.length]);

    return (
        <>
            {reviews && reviews.length > 0 ? (
                <ul className={s.list}>
                    {reviews.map(({ id, author, content }) => (
                        <li key={id}>
                            <p>{author}</p>
                            <p>{content}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Not information </p>
            )}
        </>
    );
};

export default Review;
