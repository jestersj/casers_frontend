'use client'
import React, {useState} from 'react';
import s from './FormSection.module.css'
import person from '@/app/_assets/person.svg'
import mailIcon from '@/app/_assets/mail.svg'
import messageIcon from '@/app/_assets/message.svg'
import CustomInput from "@/app/_components/shared/CustomInput/CustomInput";

const FormSection = () => {
    const [name, setName] = useState('')
    const [mail, setMail] = useState('')
    const [message, setMessage] = useState('')
    return (
        <div className={'custom_cont'}>
            <div className={s.row}>
                <div>
                    <h2>Напишите нам, <br/> и мы организуем <br/> ваше мероприятие!</h2>
                </div>
                <form className={s.form}>
                    <CustomInput
                        icon={person}
                        placeholder={'ФИО'}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <CustomInput
                        icon={mailIcon}
                        placeholder={'Ваша почта'}
                        value={mail}
                        onChange={(e) => setMail(e.target.value)}
                    />
                    <CustomInput
                        icon={messageIcon}
                        placeholder={'Ваш запрос'}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    <button className={['btn', 'bg_multicolor'].join(' ')}>Отправить заявку</button>
                </form>
            </div>
        </div>
    );
};

export default FormSection;