import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import Process from '../../components/Process';
import Additions from '../../components/Additions';
import Contacts from '../../components/Contacts';
import styles from './About.module.scss';

import { motion } from "framer-motion";

import oneImage from '../../public/img/about/third.jpg';
import twoImage from '../../public/img/about/second.jpg';
import threeImage from '../../public/img/about/first.jpg';

export default function AboutSection({ button = false }) {
    return (
        <>
            <Head>
                <title>О нас - аренда автомобилей в Калининграде и области</title>
                <meta
                    name="description"
                    content="Надежная компания по аренде автомобилей в Калининграде и области. Мы предлагаем широкий выбор автомобилей и много разнообразных услуг по выгодным тарифам. Забронируйте сейчас и наслаждайтесь комфортом и уверенностью в поездке."
                />
                <meta property="twitter:description" content="Надежная компания по аренде автомобилей в Калининграде. Мы предлагаем широкий выбор автомобилей и много разнообразных услуг по выгодным тарифам. Забронируйте сейчас и наслаждайтесь комфортом и уверенностью в поездке." />
                <meta property="og:description" content="Надежная компания по аренде автомобилей в Калининграде. Мы предлагаем широкий выбор автомобилей и много разнообразных услуг по выгодным тарифам. Забронируйте сейчас и наслаждайтесь комфортом и уверенностью в поездке." />
                <meta
                    name="keywords"
                    content="Аренда автомобилей, Прокат машин, Автопрокат, Калининград, Калининградская область, Авто в аренду, Прокат авто, Дешевая аренда, Аэропорт Калининграда, Долгосрочная аренда, Лучший прокат, Семейная аренда, Автомобили для туристов, Минивэны, Экономичная аренда, Автомобиль на свадьбу, Аренда с водителем, Транспорт в Калининграде, Рент кар, Прокат транспорта."
                />
                <meta content="RIVRENT - услуги по аренде автомобилей в Калининграде и области" property="twitter:title" />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="RIVRENT" />
                <meta property="og:title" content="Услуги по аренде автомобилей в Калининграде и области" />
                <meta property="og:image" content="https://i.ibb.co/c6pzwc1/ef846e68-4941-475b-8508-686e21462848.jpg" />
                <meta property="og:image:type" content="image/jpg" />
                <meta property="twitter:image" content="https://i.ibb.co/c6pzwc1/ef846e68-4941-475b-8508-686e21462848.jpg" />
                <meta name="twitter:image" content="https://i.ibb.co/c6pzwc1/ef846e68-4941-475b-8508-686e21462848.jpg" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta content="summary_large_image" name="twitter:card" />
                <meta content="width=device-width, initial-scale=1" name="viewport" />
            </Head>

            <div className={styles.about}>
                <div className='container'>
                    <div className={styles.aboutWrapper}>

                        <div className={styles.information}>

                            <div className={styles.titleContainer}>
                                <h2 className="title">О нас</h2>
                                <p className="subTitle">Лучшие условия для наших клиентов</p>
                            </div>

                            <p className={styles.text}>Компания "RIVRENT" – надежный партнер по аренде автомобилей в Калининграде. Огромный спектр услуг и дополнений к аренде наших автомобилей, чтобы сделать ваше путешествие или деловую поездку максимально комфортной.</p>

                            <ul className={styles.aboutList}>
                                <li className={styles.aboutItem}>
                                    <div className={`${styles.aboutItemImg} ${styles.aboutItemImgFirst}`}></div>
                                    <div className={styles.aboutItemContentContain}>
                                        <p className={styles.aboutItemContentText}>Большой выбор автомобилей</p>
                                    </div>
                                </li>
                                <li className={styles.aboutItem}>
                                    <div className={`${styles.aboutItemImg} ${styles.aboutItemImgThird}`}></div>
                                    <div className={styles.aboutItemContentContain}>
                                        <p className={styles.aboutItemContentText}>Доставка машины по городу и области</p>
                                    </div>
                                </li>
                                <li className={styles.aboutItem}>
                                    <div className={`${styles.aboutItemImg} ${styles.aboutItemImgSecond}`}></div>
                                    <div className={styles.aboutItemContentContain}>
                                        <p className={styles.aboutItemContentText}>Гибкие тарифы и скидки на услуги</p>
                                    </div>
                                </li>
                            </ul>

                            {button &&
                                <motion.div className={styles.buttonAnimate}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                                    <Link href="/catalog" className={styles.button}>Подробнее</Link>
                                </motion.div>
                            }

                        </div>

                        <div className={styles.images}>
                            <div className={styles.imagesContainer}>
                                <div className={styles.imageFirst}>
                                    <Image className={styles.image} src={oneImage} alt='Ягодная ферма - купить клубнику и рассаду в Кадининграде' />
                                </div>
                                <div className={styles.imageSecond}>
                                    <Image className={styles.image} src={twoImage} alt='Ягодная ферма - купить клубнику и рассаду в Кадининграде' />
                                </div>
                            </div>
                            <div className={styles.imageThird}>
                                <Image className={styles.image} src={threeImage} alt='Ягодная ферма - купить клубнику и рассаду в Кадининграде' />
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <Process />
            <Additions />
            <Contacts />
        </>
    )
}