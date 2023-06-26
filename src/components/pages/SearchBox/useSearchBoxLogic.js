
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useSearchBoxLogic = (onSearch) => {
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();
    const handleChange = (event) => {
        setSearchQuery(event.target.value);
      };
    
    const handleKeyDown = (event) => {
        if (event.keyCode === 13) {
          handleSearch();
        }
    };
    const handleSearch = () => {
        onSearch(searchQuery);
        navigate('/items');
      };
    return {
        searchQuery,
        setSearchQuery,
        handleChange,
        handleKeyDown,
        navigate,
    }
}

export default useSearchBoxLogic;