import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getItemDetail } from '../../services/api';

const useProductDetailLogic = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const state = product?.condition === "new" ? 'Nuevo' : 'Usado'
    
    useEffect(() => {
    const fetchProductDetail = async () => {
        const result = await getItemDetail(id);
        setProduct(result.item);
    };

    fetchProductDetail();
    }, [id]);

    return {
        product,
        state,
    }
}

export default useProductDetailLogic;
