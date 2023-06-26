import React from 'react';
import styles from './SearchResults.module.scss';
import logo from '../../../image/shipping.png';
import useSearchResultsLogic from './useSearchResultsLogic';

const SearchResults = ({ data }) => {
  const {
    handleItemClick,
  } = useSearchResultsLogic(data)

  if (!data) {
    return null;
  }

  return (
    <div className={styles.wrapSeachResults}>
      {data.items.map((item, index) => (
        <div key={index} className={styles.padding}>
          <div className={styles.constenResults} onClick={() => handleItemClick(item.id)}>
          <img
            src={item.thumbnail}
            alt={item.title || "Imagen sin descripción"}
            className={styles.imageResults}
          />
            <div className={styles.titleContent}>
              <div className={styles.titleResultsPrince}>
                $ {item.price} {item.shipping.free_shipping && <img src={logo} />}
              </div>
              <div className={styles.titleResults}>{item.title}</div>
            </div>
            <div className={styles.titleAddress}>{item.address?.city_name}</div>
          </div>
          <div className={styles.border}></div>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
