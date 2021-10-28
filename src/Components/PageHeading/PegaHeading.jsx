import s from './PageHeading.module.css';

const PageHeading = ({ title }) => {
    return <h1 className={s.title}>{title}</h1>;
};

export default PageHeading;
