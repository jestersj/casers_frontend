import React from 'react';
import s from './FirstSection.module.css'
import circle from './assets/circle.svg'
import picture from './assets/image 3.png'
import casers from './assets/casers_logo.svg'
import pcc from './assets/pcc_logo.svg'
import oldLogo from './assets/old_logo.svg'
import vk from './assets/vk.svg'
import tg from './assets/tg.svg'
import Image from "next/image";

const FirstSection = () => {
    return (
        <>
            <section className={['custom_cont', s.section].join(' ')}>
                <div className={s.row}>

                    <div className={s.col_main}>
                        <div className={[s.row, s.align_bottom].join(' ')}>
                            <div className={s.h_block}>
                                <h1>Место решения <br/> бизнес задач</h1>
                            </div>
                            <div>
                                <Image src={circle} alt={'casers'} className={s.circle}/>
                            </div>
                        </div>

                        <div className={s.row}>
                            <div className={s.btn_block}>
                                <div className={s.h_block}>
                                    <h1>компаний</h1>
                                </div>
                                <div>
                                    <button className={['btn', 'bg_pink'].join(' ')}>
                                        Принять участие
                                    </button>
                                </div>
                            </div>

                            <Image src={picture} alt={'people'}/>
                        </div>
                    </div>

                    <div className={s.logos_block}>
                        <div className={s.num_row}>
                            <Image src={casers} alt={'casers logo'}/>
                            <p className={[s.lg, s.number].join(' ')}>2024</p>
                        </div>
                        <div className={s.num_row}>
                            <Image src={pcc} alt={'pcc logo'} className={s.img_md}/>
                            <p className={[s.md, s.number].join(' ')}>2022</p>
                        </div>
                        <div className={s.num_row}>
                            <Image src={oldLogo} alt={'pcc old logo'} className={s.img_sm}/>
                            <p className={[s.sm, s.number].join(' ')}>2018</p>
                        </div>
                    </div>
                </div>
                <div className={s.icons_block}>
                    <a href=""><Image src={tg} alt={'tg'}/></a>
                    <a href=""><Image src={vk} alt={'vk'}/></a>
                </div>
            </section>
        </>
    );
};

export default FirstSection;