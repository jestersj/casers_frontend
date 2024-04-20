'use client'
import React, {useState} from 'react';
import s from './Navbar.module.css'
import logo from '@/app/_assets/casers_logo.svg'
import person from './person.svg'
import Image from "next/image";
import Link from "next/link";
import LoginModal from "@/app/_components/shared/LoginModal/LoginModal";

const Navbar = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const toggleModal = () => {
        setIsModalOpen(!isModalOpen)
    }
    const closeModal = () => {
        setIsModalOpen(false)
    }
    return (
        <nav className={s.navbar}>
            <div className={s.col}>
                <Link href={'/'}>
                    <Image src={logo} alt={'casers_logo'} className={s.logo}/>
                </Link>
            </div>

            <div className={s.links_block}>
                <Link href={'/#whoWeAre'}>О нас</Link>
                <Link href={'/events'}>Мероприятия</Link>
                <Link href={'/news'}>Новости</Link>
            </div>

            <div className={s.col}>
                <div className={s.btn_cont}>
                    <div className={s.btn}>
                        <button className={'outline_btn'}
                                onClick={toggleModal}
                        >
                            <div className={s.btn_text}>
                                Войти
                                <Image src={person} alt={'Вход'}/>
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            <LoginModal isOpen={isModalOpen} closeModal={closeModal}/>
        </nav>
    );
};

export default Navbar;