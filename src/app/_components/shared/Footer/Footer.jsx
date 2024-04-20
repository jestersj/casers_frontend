import React from 'react';
import s from './Footer.module.css'
import logo from '@/app/_assets/casers_logo.svg'
import Image from "next/image";
import Link from "next/link";
import tg from './tg.svg'
import vk from './vk.svg'
import mail from './mail.svg'

const Footer = () => {
    return (
        <footer className={s.footer}>
            <div className={'custom_cont'}>
                <Image src={logo} alt={'casers'} className={s.logo}/>

                <div className={s.row}>
                    <div className={s.col}>
                        <Link href={'/'} className={s.header}>Главная</Link>
                        <Link href={'/#whoWeAre'}>Кто мы</Link>
                        <Link href={'/events'}>Мероприятия</Link>
                        <Link href={'/news'}>Новости</Link>
                        <Link href={'/'}>Личный кабинет</Link>
                    </div>

                    <div className={s.col}>
                        <h6 className={s.header}>Главная</h6>
                        <a href={'tel:89000000000'}>8 900 000 00 00</a>
                        <a href={'maito:CasersTeam@yandex.ru'}>CasersTeam@yandex.ru</a>
                        <div className={s.icons_block}>
                            <a href=""><Image src={tg} alt={'tg'}/></a>
                            <a href=""><Image src={vk} alt={'vk'}/></a>
                            <a href=""><Image src={mail} alt={'mail'}/></a>
                        </div>
                    </div>

                    <div className={s.last_col}>
                        <div className={s.question_block}>
                            <h6>Остались вопросы <br/> или нужна техническая поддержка?</h6>
                            <p>Задайте нам любой вопрос по ссылке:</p>
                            <a href={'maito:CasersTeam@yandex.ru'} className={['btn', 'bg_orange'].join(' ')}>
                                Написать на почту
                            </a>
                        </div>
                    </div>
                </div>

                <hr className={s.hr}/>

                <span>2024 &copy; «Кейсерс»</span>
            </div>
        </footer>
    );
};

export default Footer;