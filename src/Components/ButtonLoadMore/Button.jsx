import s from './Button.module.css';
import PropTypes from 'prop-types';

function Button({ onClick }) {
    return (
        <>
            <button type="button" onClick={onClick} className={s.Button}>
                Load more
            </button>
        </>
    );
}

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
};

export default Button;
