import fetchApi from '../../services/axiosMoviesApi';
import { useState, useEffect, lazy, Suspense } from 'react';
import { Route, Switch, useParams, useRouteMatch } from 'react-router-dom';
import PageHeading from '../../Components/PageHeading';
import MoviesId from '../../Components/MoviesId';
import GoBack from '../../Components/ButtonGoBack';
import LoaderSpinner from '../../Components/Loader';
import AdditionalInformation from '../../Components/AdditionalInformation';
import noProfile from '../../images/no_poster.jpg';

const Cast = lazy(() => import('../../Components/CastList'));
const Review = lazy(() => import('../../Components/ReviewList'));

const MovieDetailsPage = () => {
    const { movieId } = useParams();
    const { path } = useRouteMatch();

    const [movie, setMovie] = useState(null);

    useEffect(() => {
        fetchApi
            .moviesIdApi(movieId)
            .then(setMovie)
            .catch(error => {
                console.log(error.message);
            });
    }, [movieId]);

    return (
        <>
            <PageHeading title={'Information about the film.'} />
            <GoBack />
            {movie ? (
                <>
                    <MoviesId movie={movie} />

                    <AdditionalInformation title={'Additional information'} />

                    <Suspense fallback={<LoaderSpinner />}>
                        <Switch>
                            <Route exact path={`${path}/cast`}>
                                {movie && <Cast />}
                            </Route>

                            <Route exact path={`${path}/reviews`}>
                                {movie && <Review />}
                            </Route>
                        </Switch>
                    </Suspense>
                </>
            ) : (
                <img src={noProfile} alt="not information" />
            )}
        </>
    );
};

export default MovieDetailsPage;
