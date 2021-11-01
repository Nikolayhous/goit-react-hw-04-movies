import s from './SearchForm.module.css';
import { useState } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

import { useHistory, useLocation } from 'react-router-dom';

const SearchForm = ({ onSubmit }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const history = useHistory();
    const location = useLocation();

    const handleSubmit = e => {
        e.preventDefault();

        if (searchQuery.trim() === '') {
            return toast('Enter a name for the movie!');
        }
        history.push({ ...location, search: `query=${searchQuery}` });
        onSubmit(searchQuery);
        setSearchQuery('');
    };

    const handleNameChange = e => {
        setSearchQuery(e.target.value.toLowerCase());
    };
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
                        value={searchQuery}
                        onChange={handleNameChange}
                    />
                </form>
            </div>
        </>
    );
};

SearchForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
