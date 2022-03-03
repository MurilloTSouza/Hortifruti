import React, { useState } from 'react';

import './NumberSpinner.css';
import { SpinnerButton } from './SpinnerButton/SpinnerButton';

interface NumberSpinnerProps {
    defaultValue?: number
}

export const NumberSpinner :React.FC<NumberSpinnerProps> = (props) => {

    const MIN = 0; const MAX = 999;
    const clampValue = (value: number) => {
        if (value < MIN) { value = MIN; }
        if (value > MAX) { value = MAX; }
        return value;
    }

    // initialize value
    var defaultValue = props.defaultValue 
        ? clampValue(props.defaultValue) // clamp value before initialize
        : 0; // 0 if not specified
    
    var [value, setValue] = useState(defaultValue);

    // common value seters
    const setClampValue = (value: number) => {
        setValue( clampValue(value) );
    }
    const increment = () => { setClampValue(value+1) }
    const decrement = () => { setClampValue(value-1) }

    // input type is number, but besides numbers, 
    // '+' and '-'are still allowed to be typed,
    // so it will be prevented by the key handler function
    const handleKeyPress =
        (event: React.KeyboardEvent<HTMLInputElement>) => {

        const reg = new RegExp("/+|-/");
        if(reg.test(event.key)) { event.preventDefault(); }
    }

    // using handleChange to allow user to type values directly,
    // but when keyPress is prevented a empty value is returned
    // so it need to be filtered
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;

        // if empty string because of backspace
        if(inputValue==='') { setValue(0); }

        // if not set clamped value(need to be parsed first)
        else {
            var parsed = parseInt(inputValue);
            setClampValue(parsed);    
        }

        // update input value based on controlled value
        event.target.value = value.toString();
        
    }

    return (
        <div className='NumberSpinner'>
            <SpinnerButton onClick={decrement} disabled={value <= MIN}>
                -
            </SpinnerButton>

            <input type='number' value={value} 
                onChange={handleChange} 
                onKeyPress={handleKeyPress}/>

            <SpinnerButton onClick={increment} disabled={value >= MAX}>
                +
            </SpinnerButton>
        </div>
    )
}