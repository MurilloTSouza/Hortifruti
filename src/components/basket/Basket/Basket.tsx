import React from 'react';

import { RiShoppingBasketLine } from 'react-icons/ri';
import { Product } from '../../../models/Product/Product';

import { Modal } from '../../Modal/Modal';
import { IBasketItem } from '../BasketItem/BasketItem';
import { BasketList } from '../BasketList/BasketList';

import './Basket.css';

interface BasketProps {
    basketItems: IBasketItem[]
}

interface BasketState {
    basketItems: IBasketItem[],
    isModalOpen: boolean
}

export class Basket extends React.Component<BasketProps, BasketState> {

    constructor(props: BasketProps){
        super(props);

        this.state = {
            basketItems: props.basketItems,
            isModalOpen: false
        }
    }

    // === modal operations ===
    setModalOpen = (isModalOpen: boolean) => {
        this.setState({ isModalOpen });
    }
    openModal  = () => { this.setModalOpen(true); }
    closeModal = () => { this.setModalOpen(false); }

    // === basket operations ===
    updateQuantity = (changedItem: IBasketItem) => {
        let {basketItems} = this.state;

        // get the index of the changed item by product id
        let changedIndex = 
            basketItems.findIndex(i => 
                i.product.id === changedItem.product.id);
        
        // update the item.quant in array using the index found
        basketItems[changedIndex].quant = changedItem.quant;

        this.setState({basketItems});
    }

    render(){
        const {basketItems, isModalOpen} = this.state;

        return (
            <div className='Basket'>

                {/* basket icon */}
                <div className='icon-wrapper' 
                    onClick={this.openModal}>

                    <RiShoppingBasketLine 
                        id='icon'/>
                    <span id="counter">
                        {basketItems.length}
                    </span>

                </div>

                {/* basket modal listing */}
                <Modal title='Basket' 
                    open={isModalOpen} 
                    onClose={this.closeModal}>

                    <BasketList 
                        basketItems={basketItems} 
                        onQuantityChange={this.updateQuantity}
                    />
                </Modal>
            </div>
        )
    }
}