import currency from 'currency.js';
import React from 'react';

interface CurrencyProps {
    value: number
}

export const Currency :React.FC<CurrencyProps> = (props) => {
    const {value} = props;

    const formatted = 
        currency( value, {decimal:','} )
            .format();

    return(<> {formatted} </>);
}