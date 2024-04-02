'use client'
import React, {useEffect, useRef, useState} from 'react';
import s from './ScrollableBlock.module.css'
import arrow from './arrow.svg'
import Image from "next/image";

const ScrollableBlock = ({children}) => {
    const [isShown, setIsShown] = useState(false)
    const [isScrollable, setIsScrollable] = useState(false);
    const scrollableContainerRef = useRef(null);
    const [scroll, setIsScroll] = useState(400)
    useEffect(() => {
        if (window.innerWidth <= 1200) {
            setIsScroll(100)
        }
        if (scrollableContainerRef.current) {
            const { scrollWidth, clientWidth } = scrollableContainerRef.current;
            setIsScrollable(scrollWidth > clientWidth);
        }
    }, [children]);
    useEffect(() => {
        setIsShown(isScrollable);
    }, [isScrollable]);

    const scrollLeft = () => {
        if (scrollableContainerRef.current) {
            scrollableContainerRef.current.scrollTo({
                left: scrollableContainerRef.current.scrollLeft - scroll,
                behavior: 'smooth',
            });
        }
    };

    const scrollRight = () => {
        if (scrollableContainerRef.current) {
            scrollableContainerRef.current.scrollTo({
                left: scrollableContainerRef.current.scrollLeft + scroll,
                behavior: 'smooth',
            });
        }
    };
    return (
        <div className={s.scrollableBlock}>
            {isShown && <button className={s.left} onClick={scrollLeft}>
                <Image src={arrow} alt='' style={{transform: 'rotate(180deg)'}}/>
            </button>}
            <div className={s.scrollableContainer} ref={scrollableContainerRef}>
                {React.Children.map(children, (child, index) => (
                    <div style={{flexShrink: 0}} key={index}>
                        {child}
                    </div>
                ))}
            </div>
            {isShown && <button className={s.right} onClick={scrollRight}>
                <Image src={arrow} alt=''/>
            </button>}
        </div>
    );
};

export default ScrollableBlock;