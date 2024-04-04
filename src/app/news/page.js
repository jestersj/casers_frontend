import React from 'react';
import s from "./page.module.css";
import Image from "next/image";
import filter from "@/app/_assets/filter.svg";

const Page = () => {
    return (
        <div className={'custom_cont'}>
            <h1 className={s.h1}>Трендовые <span>исследования</span> <br/> и новости бизнеса</h1>
            <div className={s.filter_block}>
                <button className={'transparent_btn'}>
                    <Image src={filter} alt={'фильтр'}/>
                </button>
            </div>
        </div>
    );
};

export default Page;