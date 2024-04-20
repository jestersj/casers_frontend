'use client'
import React, {useState} from 'react';
import s from './NewsBlock.module.css'
import CustomRadio from "@/app/_components/shared/CustomRadio/CustomRadio";
import ScrollableBlock from "@/app/_components/shared/ScrollableBlock/ScrollableBlock";
import NewsSmCard from "@/app/_components/MainPage/NewsSmCard/NewsSmCard";

const tags = {
    'Маркетинг': false,
    'Консалтинг': false,
    'UX/UI': false,
    'Логистика': false,
    'FMCG': false,
    'HR': false,
    'IT': false,
    'Банки': false,
    'Стажировки': false,
    'Инженеры': false,
}

const NewsBlock = ({background = false}) => {
    const [activeFilters, setActiveFilters] = useState(tags)
    const [thisWeek, setThisWeek] = useState(true)
    const handleClick = (tag) => {
        const obj = {...activeFilters}
        obj[tag] = !obj[tag]
        setActiveFilters(obj)
    }
    return (
        <div className={background ? s.background : ''}>
            <div className={s.tags_block}>
                {
                    Object.keys(tags).map(el =>
                        <button
                            key={el}
                            className={activeFilters[el] ? 'filer_btn_active' : 'filer_btn'}
                            onClick={() => handleClick(el)}
                        >
                            {el}
                        </button>
                    )
                }
            </div>
            <div className={s.radio_group}>
                <CustomRadio
                    label={'На этой неделе'}
                    checked={thisWeek}
                    onClick={() => setThisWeek(true)}
                />
                <CustomRadio
                    label={'В этом месяце'}
                    checked={!thisWeek}
                    onClick={() => setThisWeek(false)}
                />
            </div>

            <div className={s.news}>
                <ScrollableBlock>
                    <NewsSmCard/>
                    <NewsSmCard/>
                </ScrollableBlock>
            </div>
        </div>
    );
};

export default NewsBlock;