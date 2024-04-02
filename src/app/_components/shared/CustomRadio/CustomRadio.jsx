import React from 'react';
import s from './CustomRadio.module.css'

const CustomRadio = ({label, checked, onClick}) => {
    return (
        <label className={s.label} onClick={onClick}>
            <input type={'radio'} checked={checked}/>
            <span></span>
            <p>{label}</p>
        </label>
    );
};

export default CustomRadio;