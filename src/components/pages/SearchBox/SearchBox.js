import logo from '../../../image/Logo_ML@.png';
import search from '../../../image/search.png';
import styles from './SearchBox.module.scss';
import useSearchBoxLogic from './useSearchBoxLogic';

const SearchBox = ({ onSearch }) => {
  const { 
    searchQuery,
    handleChange,
    handleKeyDown,
    handleSearch,
  } = useSearchBoxLogic(onSearch);
  
  return (
    <div className={styles.wrapHeader}>
      <img alt="logo-mercado-libre" src={logo} className={styles.image} />
      <input
        type="text"
        value={searchQuery}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        className={styles.input}
        placeholder="Nunca dejes de Buscar"
      />
      <div className={styles.inputIcon}>
      <img
        alt="search-input"
        src={search}
        
        onClick={handleSearch}
      />
      </div>
      
    </div>
  );
};

export default SearchBox;
