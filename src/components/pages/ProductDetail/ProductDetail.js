import React from 'react';
import useProductDetailLogic from './useProductDetailLogic';
import styles from './ProductDetail.module.scss';
import Button from '../../Button/Button';


const ProductDetail = () => {
  const { 
    product,
    state,
  } = useProductDetailLogic();

  if (!product) {
    return <div>Cargando...</div>;
  }

  return (
    <div className={styles.wrapProductDetail}>
    <div className={styles.flex}>
        <img
            className={styles.image}
            src={product.picture}
            alt={'image-description'}
        />
        <div>
        <p className={styles.titleSoldQuantity}>{state} - {product.sold_quantity} Vendidos</p>
        <p className={styles.title}>{product.title}</p>
        <p className={styles.amount}>$ {product.price.amount}</p>
        <Button text={'Comprar'}/>
     
        </div>
        
    </div>
    
      <h3 className={styles.titleDetails}>Detalle del producto</h3>
      <h3 className={styles.description} >{product.description}</h3>
    </div>
  );
};

export default ProductDetail;
