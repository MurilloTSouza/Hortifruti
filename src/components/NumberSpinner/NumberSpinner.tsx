import React from 'react';

import { SpinnerButton } from './SpinnerButton/SpinnerButton';

import './NumberSpinner.css';

interface NumberSpinnerProps {
    value: number,

    onChange?: (value:number) => void,
}

export const NumberSpinner :React.FC<NumberSpinnerProps> = (props) => {

    const {value} = props;
    const onChange = props.onChange 
        ? props.onChange         // if a function is defined set it to onChange
        : (value :number) => {}; // if not set a empty function to avoid checking

    const MIN = 0; const MAX = 999;
    const clampValue = (value: number) => {
        if (value < MIN) { value = MIN; }
        if (value > MAX) { value = MAX; }
        return value;
    }
    
    // use this function when passing unkown numbers
    // instead of onChange, to clamp all values
    const handleOnChange = (value: number) => {
        onChange( clampValue(value) );
    }
    const increment = () => { handleOnChange(value+1) }
    const decrement = () => { handleOnChange(value-1) }

    // input type is number, but besides numbers, 
    // '+' and '-'are still allowed to be typed,
    // so it will be prevented by the key handler function
    const handleInputKeyPress =
        (event: React.KeyboardEvent<HTMLInputElement>) => {

        const reg = new RegExp("/+|-/");
        if(reg.test(event.key)) { event.preventDefault(); }
    }

    // using handleChange to allow user to type values directly,
    // but when keyPress is prevented a empty value is returned
    // so it need to be filtered
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;

        // if empty string because of backspace
        if(inputValue==='') { onChange(0); }

        // if not, set clamped value(need to be parsed first)
        else {
            var parsed = parseInt(inputValue);
            handleOnChange(parsed);    
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
                onChange={handleInputChange} 
                onKeyPress={handleInputKeyPress}/>

            <SpinnerButton onClick={increment} disabled={value >= MAX}>
                +
            </SpinnerButton>
        </div>
    )
}