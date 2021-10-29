import { useState } from 'react';
import { NavLink, useRouteMatch, useLocation } from 'react-router-dom';
import s from './AdditionalInformation.module.css';

const AdditionalInformationList = ({ title }) => {
    const { url } = useRouteMatch();
    const location = useLocation();

    const [visibleCast, setVisibleCast] = useState(false);
    const [visibleReview, setVisibleReview] = useState(false);

    const handelCreateCast = () => {
        if (visibleCast === true) {
            setVisibleCast(false);
        }
        setVisibleCast(true);
    };

    const handelCreateReview = () => {
        if (visibleReview === true) {
            setVisibleReview(false);
        }
        setVisibleReview(true);
    };
    return (
        <>
            <h2 className={s.title}>{title}</h2>
            <div className={s.general}>
                <ul className={s.list}>
                    <li className={s.item}>
                        <NavLink
                            to={{
                                pathname: `${url}/cast`,
                                state: {
                                    from: location?.state?.from ?? '/movie',
                                },
                            }}
                            className={s.link}
                            activeClassName={s.activeLink}
                            onClick={handelCreateCast}
                        >
                            Cast
                        </NavLink>
                    </li>
                    <li className={s.item}>
                        <NavLink
                            to={{
                                pathname: `${url}/review`,
                                state: {
                                    from: location?.state?.from ?? '/movie',
                                },
                            }}
                            className={s.link}
                            activeClassName={s.activeLink}
                            onClick={handelCreateReview}
                        >
                            Reviews
                        </NavLink>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default AdditionalInformationList;
