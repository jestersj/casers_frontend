import React from 'react';
import s from './EventSmCard.module.css'
import pic from './img.png'
import Image from "next/image";
import Link from "next/link";

const EventSmCard = () => {
    return (
        <div className={s.card}>
            <div className={s.img_block}>
                <Image src={pic} alt={'pic'} className={s.img}/>
            </div>
            <div className={s.content}>
                <div className={s.tag_block}>
                    <div className={s.tag}>
                        кейс-чемпионат
                    </div>
                </div>

                <div className={s.text_cont}>
                    <h5>Case Day x Google</h5>
                    <p>Испытайте свои знания и поборитесь за оффер в крупнейшую IT-компанию.</p>
                    <span>До 21 августа (включительно)</span>
                </div>

                <div>
                    <Link href={'/'} className={['btn', 'bg_pink'].join(' ')}>Подробнее</Link>
                </div>
            </div>
        </div>
    );
};

export default EventSmCard;