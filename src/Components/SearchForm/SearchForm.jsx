import s from './SearchForm.module.css';

const SearchForm = () => {
    return (
        <>
            <form className={s.form}>
                <label htmlFor="">
                    <input type="text" />
                </label>
                <button type="button">Search</button>
            </form>
        </>
    );
};

export default SearchForm;
