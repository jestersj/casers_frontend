import React from 'react';
import s from './Navbar.module.css'
import logo from '@/app/_assets/casers_logo.svg'
import person from './person.svg'
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return (
        <nav className={s.navbar}>
            <div className={s.col}>
                <Link href={'/'}>
                    <Image src={logo} alt={'casers_logo'} className={s.logo}/>
                </Link>
            </div>

            <div className={s.links_block}>
                <Link href={'/'}>О нас</Link>
                <Link href={'/events'}>Мероприятия</Link>
                <Link href={'/news'}>Новости</Link>
            </div>

            <div className={s.col}>
                <div className={s.btn_cont}>
                    <button className={'outline_btn'}>
                        <div className={s.btn_text}>
                            Войти
                            <Image src={person} alt={'Вход'}/>


                        </div>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;