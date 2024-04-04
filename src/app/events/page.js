import React from 'react';
import s from './page.module.css'
import Image from "next/image";
import filter from "@/app/_assets/filter.svg";
import EventLgCard from "@/app/_components/EventsPage/EventLgCard/EventLgCard";

const Page = () => {
    return (
        <div className={'custom_cont'}>
            <h1 className={s.h1}>Актуальные <span>мероприятия</span></h1>
            <div className={s.filter_block}>
                <p className={s.p}>Собираем в одном месте полезные <br/> курсы, чемпионаты, хакатоны и мастер-классы!
                </p>
                <button className={'transparent_btn'}>
                    <Image src={filter} alt={'фильтр'}/>
                </button>
            </div>

            <div className={s.cards_cont}>
                <EventLgCard/>
                <EventLgCard imgLeft={false}/>
                <EventLgCard/>
                <EventLgCard imgLeft={false}/>
            </div>
        </div>
    );
};

export default Page;