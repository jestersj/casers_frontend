import React from 'react';
import s from './EventsSection.module.css'
import filter from '../../../_assets/filter.svg'
import Image from "next/image";
import EventSmCard from "@/app/_components/MainPage/EventSmCard/EventSmCard";
import ScrollableBlock from "@/app/_components/shared/ScrollableBlock/ScrollableBlock";


const EventsSection = () => {
    return (
        <div className={'custom_cont'}>
            <div className={s.header}>
                <h2>Мероприятия</h2>
                <button className={'transparent_btn'}>
                    <Image src={filter} alt={'фильтр'}/>
                </button>
            </div>
            <div className={s.scroll}>
                <ScrollableBlock>
                    <EventSmCard/>
                    <EventSmCard/>
                    <EventSmCard/>
                    <EventSmCard/>
                    <EventSmCard/>
                </ScrollableBlock>
            </div>
        </div>
    );
};

export default EventsSection;