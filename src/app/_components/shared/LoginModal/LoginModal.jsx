import React, {useState} from 'react';
import s from './LoginModal.module.css'
import {Modal} from "antd";
import logo from '@/app/_assets/casers_logo.svg'
import person from '@/app/_assets/person.svg'
import mailIcon from '@/app/_assets/mail.svg'
import book from '@/app/_assets/book-open.svg'
import graduation from '@/app/_assets/graduation-cap.svg'
import briefcase from '@/app/_assets/briefcase.svg'
import lock from '@/app/_assets/lock.svg'
import universityLogo from '@/app/_assets/university.svg'
import Image from "next/image";
import CustomInput from "@/app/_components/shared/CustomInput/CustomInput";
import CustomRadio from "@/app/_components/shared/CustomRadio/CustomRadio";

const roles = [
    'Студент',
    'Сотрудник',
    'Партнер'
]

const LoginModal = ({isOpen, closeModal}) => {
    const [isLogin, setIsLogin] = useState(null)

    const [password, setPassword] = useState('')
    const [fio, setFio] = useState('')
    const [mail, setMail] = useState('')
    const [role, setRole] = useState(null)

    const [university, setUniversity] = useState('')
    const [faculty, setFaculty] = useState('')
    const [course, setCourse] = useState('')

    const [isLookingForJob, setIsLookingForJob] = useState(null)
    const [jobExperience, setJobExperience] = useState('')

    return (
        <Modal
            title={
                <Image src={logo} alt={'casers'}/>
            }
            footer={null}
            open={isOpen}
            onCancel={closeModal}
            width={'70%'}
        >
            {
                isLogin === null
                    ?
                    <div className={s.cont}>
                        <h2>У вас уже есть аккаунт?</h2>
                        <p>Войдите в аккаунт или зарегистрируйтесь, чтобы использовать возможности сервиса на
                            максимум!</p>
                        <div className={s.btn_block}>
                            <button className={['btn', 'bg_pink'].join(' ')}
                                    onClick={() => setIsLogin(false)}
                            >
                                Зарегистрироваться
                            </button>
                            <button className={'outline_btn'}
                                    onClick={() => setIsLogin(true)}
                            >
                                Войти в свой профиль
                            </button>
                        </div>
                    </div>
                    :
                    isLogin !== true
                        ?
                        <div>
                            <button onClick={() => setIsLogin(null)}
                                    className={['transparent_btn', s.back_btn].join(' ')}
                            >
                                {'<'} Назад
                            </button>
                            <div className={s.cont}>
                                <form>
                                    <div>
                                        <h2>Регистрация</h2>
                                        <p>Для регистрации на сайте заполните поля ниже</p>
                                    </div>
                                    <CustomInput
                                        icon={person}
                                        value={fio}
                                        onChange={e => setFio(e.target.value)}
                                        placeholder={'ФИО*'}
                                    />
                                    <CustomInput
                                        icon={mailIcon}
                                        value={mail}
                                        onChange={e => setMail(e.target.value)}
                                        placeholder={'Электронная почта*'}
                                    />
                                    <div className={s.radio_group}>
                                        Кем вы являетесь?
                                        {
                                            roles.map(el =>
                                                <CustomRadio
                                                    key={el}
                                                    label={el}
                                                    onClick={() => setRole(el)}
                                                    checked={el === role}
                                                />
                                            )
                                        }
                                    </div>
                                    {
                                        role === 'Студент' &&
                                        <>
                                            <CustomInput
                                                icon={universityLogo}
                                                value={university}
                                                onChange={e => setUniversity(e.target.value)}
                                                placeholder={'Университет*'}
                                            />
                                            <CustomInput
                                                icon={graduation}
                                                value={faculty}
                                                onChange={e => setFaculty(e.target.value)}
                                                placeholder={'Направление обучения*'}
                                            />
                                            <CustomInput
                                                icon={book}
                                                value={course}
                                                onChange={e => setCourse(e.target.value)}
                                                placeholder={'Курс обучения*'}
                                            />
                                        </>
                                    }

                                    {
                                        (role === 'Сотрудник' || role === 'Партнер') &&
                                        <>
                                            <div className={s.radio_group}>
                                                Ищите ли вы работу?
                                                <CustomRadio
                                                    label={'Да'}
                                                    onClick={() => setIsLookingForJob(true)}
                                                    checked={isLookingForJob === true}
                                                />
                                                <CustomRadio
                                                    label={'Нет'}
                                                    onClick={() => setIsLookingForJob(false)}
                                                    checked={isLookingForJob === false}
                                                />
                                            </div>
                                            <CustomInput
                                                icon={briefcase}
                                                value={jobExperience}
                                                onChange={e => setJobExperience(e.target.value)}
                                                placeholder={'Опыт работы*'}
                                            />
                                        </>
                                    }

                                    <CustomInput
                                        icon={lock}
                                        value={password}
                                        onChange={e => setPassword(e.target.value)}
                                        placeholder={'Пароль*'}
                                    />
                                    <button className={['btn', 'bg_pink'].join(' ')}>
                                        Зарегистрироваться
                                    </button>
                                </form>
                            </div>
                        </div>
                        :
                        <div>
                            <button onClick={() => setIsLogin(null)}
                                    className={['transparent_btn', s.back_btn].join(' ')}
                            >
                                {'<'} Назад
                            </button>
                            <div className={s.cont}>
                                <form>
                                    <div>
                                        <h2>Вход</h2>
                                        <p>Для входа в аккаунт заполните поля ниже</p>
                                    </div>
                                    <CustomInput
                                        icon={mailIcon}
                                        value={mail}
                                        onChange={e => setMail(e.target.value)}
                                        placeholder={'Электронная почта*'}
                                    />
                                    <CustomInput
                                        icon={lock}
                                        value={password}
                                        onChange={e => setPassword(e.target.value)}
                                        placeholder={'Пароль*'}
                                    />
                                    <button className={['btn', 'bg_pink'].join(' ')}>
                                        Зарегистрироваться
                                    </button>
                                </form>
                            </div>
                        </div>
            }

        </Modal>
    );
};

export default LoginModal;