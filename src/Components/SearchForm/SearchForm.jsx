import s from './SearchForm.module.css';

const SearchForm = () => {
    const handleSubmit = () => {};
    const searchQuery = () => {};
    const handleNameChange = () => {};
    return (
        <>
            <div className={s.Searchbar}>
                <form className={s.SearchForm} onSubmit={handleSubmit}>
                    <button type="submit" className={s.SearchFormBtn}>
                        <span className={s.SearchFormBtnLabel}>Search</span>
                    </button>

                    <input
                        className={s.SearchFormInput}
                        name="searchQuery"
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search movie"
                        // value={searchQuery}
                        onChange={handleNameChange}
                    />
                </form>
            </div>
        </>
    );
};

export default SearchForm;
