import s from './HeaderNavigation.module.css';
import { NavLink } from 'react-router-dom';

const HeaderNavigation = () => {
    return (
        <nav>
            <NavLink
                exact
                to="/"
                className={s.link}
                activeClassName={s.activeLink}
            >
                Home
            </NavLink>
            <NavLink
                to="/movies"
                className={s.link}
                activeClassName={s.activeLink}
            >
                Movies
            </NavLink>
        </nav>
    );
};

export default HeaderNavigation;
