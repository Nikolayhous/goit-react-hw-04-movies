import s from './GoBack.module.css';
import { useHistory, useLocation } from 'react-router';

const GoBack = () => {
    const history = useHistory();
    const location = useLocation();

    const handleClickGoBack = () => {
        history.push(location?.state?.from?.location ?? '/');
    };
    return (
        <>
            <button
                className={s.button}
                type="button"
                onClick={handleClickGoBack}
            >
                ↩ Previous page
            </button>
        </>
    );
};

export default GoBack;
