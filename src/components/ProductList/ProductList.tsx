import React from 'react';
import { Product } from '../../models/Product/Product';
import { ProductCard } from '../ProductCard/ProductCard';

import './ProductList.css';

interface ProductListProps {
    products: Product[]
}

export const ProductList :React.FC<ProductListProps> = (props) => {

    const {products} = props;

    var list = products.map( p => 
        <ProductCard product={p} key={p.id}/>
    );

    return (
        <div className='ProductList'>
            {list}
        </div>
    )
}