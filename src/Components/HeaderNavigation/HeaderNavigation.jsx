import s from './HeaderNavigation.module.css';
import { NavLink } from 'react-router-dom';
import Container from '../Container';

const HeaderNavigation = () => {
    return (
        <header className={s.header}>
            <Container>
                <nav>
                    <ul className={s.list}>
                        <li className={s.item}>
                            <NavLink
                                exact
                                to="/"
                                className={s.link}
                                activeClassName={s.activeLink}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/movies"
                                className={s.link}
                                activeClassName={s.activeLink}
                            >
                                Movies
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </Container>
        </header>
    );
};

export default HeaderNavigation;
