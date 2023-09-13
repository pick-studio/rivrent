import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

import styles from "./Additions.module.scss";

import car from '../../public/img/additions/background.png';

export default function Additions() {
    return (
        <section className={styles.about} id="about">
            <div className="container">

                <div className={styles.additionsWrapper}>

                    <div className={styles.imageContainer}>
                        <Image className={styles.image} src={car} alt={"Аренда автомобиля в Калининграде"} fill="true" />
                    </div>

                    <div className={styles.additionsContent}>
                        <div className={styles.titleContainer}>
                            <h2 className="title">Приятные дополнения<br /> в комплекте с машиной</h2>
                            <p className="subTitle">
                                Качество и забота о клиентах наш приоритет, этим мы выгодно отличаемся от конкурентов
                            </p>
                        </div>

                        <div className={styles.aboutListContain}>
                            <ul className={styles.aboutList}>
                                <li className={styles.aboutItem}>
                                    <div className={`${styles.aboutItemImg} ${styles.aboutItemImgFirst}`}></div>
                                    <div className={styles.aboutItemContentContain}>
                                        <p className={styles.aboutItemContentText}>Помощь на дороге 24/7 без выходных</p>
                                    </div>
                                </li>
                                <li className={styles.aboutItem}>
                                    <div className={`${styles.aboutItemImg} ${styles.aboutItemImgSecond}`}></div>
                                    <div className={styles.aboutItemContentContain}>
                                        <p className={styles.aboutItemContentText}>Загружены геометки лучших мест города</p>
                                    </div>
                                </li>
                                <li className={styles.aboutItem}>
                                    <div className={`${styles.aboutItemImg} ${styles.aboutItemImgThird}`}></div>
                                    <div className={styles.aboutItemContentContain}>
                                        <p className={styles.aboutItemContentText}>Обработка машины перед поездкой</p>
                                    </div>
                                </li>
                                <li className={styles.aboutItem}>
                                    <div className={`${styles.aboutItemImg} ${styles.aboutItemImgFourth}`}></div>
                                    <div className={styles.aboutItemContentContain}>
                                        <p className={styles.aboutItemContentText}>Щедрые скидки от наших партнеров</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </section>

        // <section className={styles.about}>
        //     <div className={`${styles.aboutContainer} container`}>
        //         <h2>HOTSNAB это:</h2>
        //         <p>Оснащение гостиничного бизнеса, снабжение отелей, гостиниц, саун, бассейнов и других организаций  широким ассортиментом специализированных товаров.</p>

        //         <p>Преимущества компании HOTSNAB:</p>

        //         <ul>
        //             <li>Широкий ассортимент и высокое качество товаров для гостиниц и отелей</li>
        //             <li>Изысканный дизайн и высокое качество косметики для гостиницы или отеля</li>
        //             <li>Система скидок на продукцию для отелей и гостиниц</li>
        //             <li>Быстрое выполнение заказов любого объема</li>
        //             <li>Бесплатная доставка по Калининграду , Светлогорску и Зеленоградску</li>
        //             <li>Доставка продукции в любую точку России через транспортные компании</li>
        //         </ul>
        //     </div>
        // </section>
    )
};