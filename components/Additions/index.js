import React from 'react';
import Image from 'next/image';

import styles from "./Additions.module.scss";

import car from '../../public/img/additions/background.png';

export default function Additions() {
    return (
        <section className={styles.additions}>
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

                        <div className={styles.additionsListContain}>
                            <ul className={styles.additionsList}>
                                <li className={styles.additionsItem}>
                                    <div className={`${styles.additionsItemImg} ${styles.additionsItemImgFirst}`}></div>
                                    <div className={styles.additionsItemContentContain}>
                                        <p className={styles.additionsItemContentText}>Помощь на дороге 24/7 без выходных</p>
                                    </div>
                                </li>
                                <li className={styles.additionsItem}>
                                    <div className={`${styles.additionsItemImg} ${styles.additionsItemImgSecond}`}></div>
                                    <div className={styles.additionsItemContentContain}>
                                        <p className={styles.additionsItemContentText}>Загружены геометки лучших мест города</p>
                                    </div>
                                </li>
                                <li className={styles.additionsItem}>
                                    <div className={`${styles.additionsItemImg} ${styles.additionsItemImgFourth}`}></div>
                                    <div className={styles.additionsItemContentContain}>
                                        <p className={styles.additionsItemContentText}>Обработка машины перед поездкой</p>
                                    </div>
                                </li>
                                <li className={styles.additionsItem}>
                                    <div className={`${styles.additionsItemImg} ${styles.additionsItemImgThird}`}></div>
                                    <div className={styles.additionsItemContentContain}>
                                        <p className={styles.additionsItemContentText}>Щедрые скидки от наших партнеров</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
};