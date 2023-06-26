import { useNavigate } from 'react-router-dom';

const useSearchResultsLogic = () => {
    const navigate = useNavigate();
    const handleItemClick = (itemId) => {    
        navigate(`/items/${itemId}`);
    };
    return {
        handleItemClick,
    }
}

export default useSearchResultsLogic;