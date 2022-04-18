import React, { useState } from 'react';

import { MdOutlineImage } from 'react-icons/md';

import { Product } from '../../../models/Product/Product';
import { Currency } from '../../Currency/Currency';
import { NumberSpinner } from '../../NumberSpinner/NumberSpinner';

import './BasketItem.css';

export interface IBasketItem {
    product: Product,
    quant: number
}

export interface BasketItemProps extends IBasketItem {
    onQuantChange?: (item: IBasketItem) => void
}

export const BasketItem :React.FC<BasketItemProps> = (props) => {
    
    const {product, onQuantChange} = props;
    
    const [quant, setQuant] = useState(props.quant);

    const handleSpinnerChange = (quant: number) => {
        setQuant(quant);

        if(onQuantChange) {
            onQuantChange({product, quant});
        }
    }

    return (
        <div className='BasketItem'>
            {/* --- left column --- */}
            <div className='column left'>
                <div className='name g_ellipsis-text'>
                    {product.name}
                </div>

                <div className='price unit push-to-bottom'>
                    <span className='price-value'>
                        <Currency 
                            value={product.getFinalPrice()}/>
                    </span>
                    <span className='price-description'>
                        (unit)
                    </span>
                </div>

                <div className='price subtotal'>
                    <span className='price-value'>
                        <Currency 
                            value={product.getFinalPrice() * quant}/>
                    </span>
                    <span className='price-description'>
                        (subtotal)
                    </span>
                </div>
            </div>


            {/* --- right column --- */}
            <div className='column right'>
                <div className='image-wrapper'>
                    {/* Simulate Image */}
                    <MdOutlineImage style={{'color': 'var(--clr-light-shadow)'}}/>
                </div>

                <div className='push-to-bottom'>
                    <NumberSpinner 
                        value={quant}
                        onChange={handleSpinnerChange}/>
                </div>
            </div>
        </div>
    )
}