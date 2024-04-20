'use client'
import React from 'react';
import s from './NewsSection.module.css';
import NewsBlock from "@/app/_components/shared/NewsBlock/NewsBlock";

const NewsSection = () => {
    return (
        <div className={'custom_cont'}>
            <h2 className={s.header}>Новости</h2>
            <NewsBlock/>
        </div>
    );
};

export default NewsSection;