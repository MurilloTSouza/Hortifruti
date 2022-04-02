import React from 'react';

import { FaCartPlus } from 'react-icons/fa';
import { MdOutlineImage } from 'react-icons/md';
import { Product } from '../../models/Product/Product';
import { Badge } from '../Badge/Badge';

import { Button } from '../Button/Button';
import { Currency } from '../Currency/Currency';

import './ProductCard.css';

interface ProductCardProps {
    product: Product
}

export const ProductCard: React.FC<ProductCardProps> = (props) => {
    
    const {product} = props;
    
    return (
        <div className='ProductCard g_light-shadow'>

            {
                product.discountPercent
                    ? <Badge>
                        {product.discountPercent}% OFF
                      </Badge>
                    : null
            }

            <div className='content-wrapper'>
                <div className='image-wrapper'>
                    {/* Simulate Image */}
                    <MdOutlineImage style={{'color': 'var(--clr-light-shadow)'}}/>
                </div>

                <div className='name g_ellipsis-text'>
                    {product.name}
                </div>

                <div className='price-container'>
                    <span className='pre-discount-price'>
                        {
                            product.discountPercent
                                ? <Currency value={product.price}/>
                                : null
                        }
                    </span>
                    
                    <span className='final-price'>
                        <Currency value={product.getFinalPrice()}/>
                    </span>
                </div>

                <Button icon={FaCartPlus}>
                    Add To Cart
                </Button>
            </div>
        </div>
    )
}