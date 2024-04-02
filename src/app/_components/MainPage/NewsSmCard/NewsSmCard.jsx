import React from 'react';
import s from './NewsSmCard.module.css'
import pic from './img.png'
import Image from "next/image";
import Link from "next/link";

const NewsSmCard = () => {
    return (
        <div className={s.card}>
            <div className={s.img_block}>
                <Image src={pic} alt={'pic'} className={s.img}/>
            </div>
            <div className={s.content}>
                <div className={s.tag_block}>
                    <div className={s.tag}>
                        Стажировки
                    </div>
                    <div className={s.tag}>
                        IT
                    </div>
                </div>

                <div className={s.text_cont}>
                    <p><b>Экосистема ВКонтакте</b> открыла набор на ежегодную <b>амбассадорскую программу</b></p>
                    <span>19 декабря 2024</span>
                </div>

                <div>
                    <Link href={'/'} className={['btn', 'bg_orange'].join(' ')}>Читать</Link>
                </div>
            </div>
        </div>
    );
};

export default NewsSmCard;