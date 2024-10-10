
import React from 'react';
import product from './product';

const ProductImage = () => {
    return <img src={product.image} alt={product.name} style={{ width: '100%' }} />;
}

export default ProductImage;
