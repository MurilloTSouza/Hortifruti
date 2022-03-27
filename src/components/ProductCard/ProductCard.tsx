import React from 'react';

import { FaCartPlus } from 'react-icons/fa';
import { MdOutlineImage } from 'react-icons/md';
import { Badge } from '../Badge/Badge';

import { Button } from '../Button/Button';
import { Currency } from '../Currency/Currency';

import './ProductCard.css';

export type Product = {
    id: string,
    name: string,
    price: number,

    discount?: {
        percentage: number,
        finalPrice: number
    },

    outOfStock?: boolean
}

interface ProductCardProps {
    product: Product
}

export const ProductCard: React.FC<ProductCardProps> = (props) => {
    
    const {product} = props;

    var finalPrice = product.discount // if has discount
        ? product.discount.finalPrice // finalPrice = price with discount
        : product.price;              // if not, finalPrice = original price

    var preDiscountPrice = product.discount // if has discount
        ? product.price                     // preDiscountPrice = original price
        : null;                             // if not, null value
    
    return (
        <div className='ProductCard g_light-shadow'>

            {
                product.discount
                    ? <Badge>
                        {product.discount.percentage}% OFF
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
                            preDiscountPrice
                                ? <Currency value={preDiscountPrice}/>
                                : null
                        }
                    </span>
                    
                    <span className='final-price'>
                        <Currency value={finalPrice}/>
                    </span>
                </div>

                <Button icon={FaCartPlus}>
                    Add To Cart
                </Button>
            </div>
        </div>
    )
}