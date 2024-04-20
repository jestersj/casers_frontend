import React from 'react';
import s from './WhoWeAreSection.module.css'
import logo from './logo.svg'
import Image from "next/image";

const WhoWeAreSection = () => {
    return (
        <section className={'custom_cont'}>
            <div className={s.row} id={'whoWeAre'}>
                <div className={s.col}>
                    <h2>Мы - команда Casers</h2>
                    <p>Проводим кейс-чемпионаты, мастер-классы, конкурсы и хакатоны с ведущими мировыми компаниями.</p>
                </div>
                <div>
                    <Image src={logo} alt={'casers'}/>
                </div>
            </div>
            <div className={s.row}>
                <div className={s.col}>
                    <h4>Наш путь</h4>
                    <p>
                        <strong>2021</strong> — в составе Plekhanov Case Club провели несколько
                        мероприятий совместно с ведущими компаниями мира.
                    </p>
                    <p>
                        <strong>2022</strong> — год перемен, полностью изменили концепцию клуба
                        и провели огромное количество карьерных мероприятий для студентов.
                    </p>
                    <p>Теперь настало время развивать отдельный независимый проект!</p>
                </div>
                <div className={s.boxes_block}>
                    <div className={[s.box, s.sm_box].join(' ')}>
                        <div className={s.flex}>
                            <span>30</span>
                            <div>
                                <span className={s.plus}>+</span>
                                <p>в год</p>
                            </div>
                        </div>
                        <p>мероприятий</p>
                    </div>
                    <div className={[s.box, s.lg_box].join(' ')}>
                        <span>5000</span>
                        <div className={s.flex}>
                            <span className={s.plus}>+</span>
                            <p>участников <br/> каждый год</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhoWeAreSection;