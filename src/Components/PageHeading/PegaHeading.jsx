import s from './PageHeading.module.css';
import PropTypes from 'prop-types';

const PageHeading = ({ title }) => {
    return <h1 className={s.title}>{title}</h1>;
};

PageHeading.propTypes = {
    title: PropTypes.string.isRequired,
};

export default PageHeading;
