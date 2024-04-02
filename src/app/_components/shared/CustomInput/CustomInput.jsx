import React from 'react';
import s from './CustomInput.module.css'
import Image from "next/image";

const CustomInput = ({icon, placeholder, value, onChange}) => {
    return (
        <div className={s.cont}>
            <input
                className={s.input}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />
            <Image src={icon} alt={''} className={s.icon}/>
        </div>
    );
};

export default CustomInput;