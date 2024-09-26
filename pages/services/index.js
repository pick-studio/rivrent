import React from 'react';
import Head from 'next/head';
import styles from './Services.module.scss';
import Additions from '../../components/Additions';
import Contacts from '../../components/Contacts';
import Process from '../../components/Process';

export default function Services() {
    return (
        <>
            <Head>
                <title>Услуги компании - аренда автомобилей в Калининграде и области</title>
                <meta
                    name="description"
                    content="Идеальная аренда автомобилей в Калининграде и области. Мы предлагаем широкий выбор автомобилей и много разнообразных услуг по выгодным тарифам. Забронируйте сейчас и наслаждайтесь комфортом и уверенностью в поездке."
                />
                <meta property="twitter:description" content="Идеальная аренда автомобилей в Калининграде и области. Мы предлагаем широкий выбор автомобилей и много разнообразных услуг по выгодным тарифам. Забронируйте сейчас и наслаждайтесь комфортом и уверенностью в поездке." />
                <meta property="og:description" content="Идеальная аренда автомобилей в Калининграде и области. Мы предлагаем широкий выбор автомобилей и много разнообразных услуг по выгодным тарифам. Забронируйте сейчас и наслаждайтесь комфортом и уверенностью в поездке." />
                <meta
                    name="keywords"
                    content="Аренда автомобилей, Прокат машин, Автопрокат, Калининград, Калининградская область, Авто в аренду, Прокат авто, Дешевая аренда, Аэропорт Калининграда, Долгосрочная аренда, Лучший прокат, Семейная аренда, Автомобили для туристов, Минивэны, Экономичная аренда, Автомобиль на свадьбу, Аренда с водителем, Транспорт в Калининграде, Рент кар, Прокат транспорта."
                />
                <meta content="RIV RENT - услуги по аренде автомобилей в Калининграде и области" property="twitter:title" />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="RIV RENT" />
                <meta property="og:title" content="Услуги по аренде автомобилей в Калининграде и области" />
                <meta property="og:image" content="https://i.ibb.co/c6pzwc1/ef846e68-4941-475b-8508-686e21462848.jpg" />
                <meta property="og:image:type" content="image/jpg" />
                <meta property="twitter:image" content="https://i.ibb.co/c6pzwc1/ef846e68-4941-475b-8508-686e21462848.jpg" />
                <meta name="twitter:image" content="https://i.ibb.co/c6pzwc1/ef846e68-4941-475b-8508-686e21462848.jpg" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta content="summary_large_image" name="twitter:card" />
                <meta content="width=device-width, initial-scale=1" name="viewport" />
            </Head>
            <section className={styles.services}>
                <div className='container'>
                    <div className={styles.servicesWrapper}>
                        <div className={styles.titleContainer}>
                            <h1 className='title'>Услуги</h1>
                            <p className='subTitle'>Круглосуточная доставка по городу и области</p>
                        </div>

                        <ul className={styles.list}>
                            <li className={styles.item}>
                                <h3 className={styles.itemTitle}>
                                    Краткосрочная аренда автомобиля без водителя
                                </h3>
                                <p className={styles.itemText}>
                                    Позволяет решить вопрос с транспортным средством только когда это необходимо.
                                    Это может быть командировка сотрудника, подменный автомобиль на время ремонта или просто для выполнения
                                    задач бизнеса.
                                </p>
                            </li>
                            <li className={styles.item}>
                                <h3 className={styles.itemTitle}>
                                    Долгосрочная аренда автомобиля без водителя
                                </h3>
                                <p className={styles.itemText}>
                                    Решает задачи бизнеса, когда требуется транспортное средство на длительный срок.
                                </p>
                            </li>
                            <li className={styles.item}>
                                <h3 className={styles.itemTitle}>
                                    Оперативный лизинг
                                </h3>
                                <p className={styles.itemText}>
                                    Позволяет бизнесу увеличить или создать собственные парк автомобилей под конкретные задачи. Предоставляются новые автомобили на срок трех лет, количество приобретаемой техники ограничивается только потребностями бизнеса.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <Process />
            <Additions />
            <Contacts />
        </>
    )
};