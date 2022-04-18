import React from 'react';

import { IoBagCheckOutline } from 'react-icons/io5';
import { RiShoppingBasketLine } from 'react-icons/ri';

import { Button } from '../../Button/Button';
import { Currency } from '../../Currency/Currency';
import { BasketItem, IBasketItem } from '../BasketItem/BasketItem';

import './BasketList.css';

interface BasketListProps {
    basketItems: IBasketItem[],

    onQuantityChange?: (item: IBasketItem) => void
}

export const BasketList: React.FC<BasketListProps> = (props) => {

    const { basketItems } = props;

    // --------------
    //    if empty
    // --------------
    if (basketItems.length < 1) {
        return (
            <div className='BasketList'>
                <section className='empty-basket'>
                    <RiShoppingBasketLine className='background' />
                    <span>Empty Basket</span>
                </section>
            </div>
        )
    }

    // --------------
    //  if NOT empty
    // --------------

    let subtotals = basketItems.map(item => {
        return item.product.getFinalPrice() * item.quant;
    });
    let total = subtotals.reduce(
        (sum, i) => sum + i,
        0
    );

    const items = basketItems.map(item =>
        <BasketItem key={item.product.id}
            product={item.product}
            quant={item.quant}
            onQuantChange={props.onQuantityChange} />
    );

    return (
        <div className='BasketList'>
            <div className='scroll-items'>
                {items}
            </div>

            <footer>
                <div className='total'>
                    <Currency value={total} />
                    <span className='description'>
                        (Total)
                    </span>
                </div>

                <Button icon={IoBagCheckOutline}>Checkout</Button>
            </footer>
        </div>
    )

}