import s from './MoviesId.module.css';
import noPoster from '../../images/no_poster.jpg';

const MoviesId = ({ movie }) => {
    const profileBaseUrl = 'http://image.tmdb.org/t/p/w185';
    return (
        <div className={s.general}>
            <div className={s.box_image}>
                <img
                    className={s.image}
                    src={
                        movie.poster_path
                            ? `${profileBaseUrl}${movie.poster_path}`
                            : noPoster
                    }
                    alt={movie.title}
                />
            </div>

            <div className={s.box_info}>
                <h2 className={s.title}>
                    {movie.original_title || movie.name}
                </h2>
                <p className={s.text}>({movie.release_date})</p>
                <h3 className={s.title_info}>Status</h3>
                <p className={s.text}>{movie.status}</p>
                <p className={s.text}>User Score: {movie.vote_average * 10}%</p>
                <h3 className={s.title_info}>Genres</h3>
                <p className={s.text}>
                    {movie.genres.map(genre => genre.name).join(', ')}
                </p>
                <h3 className={s.title_info}>Overview</h3>
                <p className={s.text}>{movie.overview}</p>
            </div>
        </div>
    );
};

export default MoviesId;
