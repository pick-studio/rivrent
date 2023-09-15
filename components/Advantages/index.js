import React from 'react';
import Image from 'next/image';

import styles from './Advantages.module.scss';

import ImageAdvantages from '../../public/img/excellence/auto.png';

export default function Advantages() {
    return (
        <section className={styles.advantages}>

            <div className="container">

                <div className={styles.titleContainer}>
                    <h2 className="title">Мы предлагаем вам лучшие условия аренды</h2>
                </div>


                <div className={styles.advantagesList}>
                    <div className={`${styles.advantagesItemContainer} ${styles.advantagesItemContainerLeft}`}>
                        <div className={`${styles.advantagesItem} ${styles.advantagesItemFirst}`}>
                            <div className={`${styles.advantagesIcon} ${styles.first}`} />
                            <p className={styles.advantagesItemText}>
                                Доставим автомобиль к месту назначения
                            </p>
                        </div>
                        <div className={`${styles.advantagesItem} ${styles.advantagesItemSecond}`}>
                            <div className={`${styles.advantagesIcon} ${styles.second}`} />
                            <p className={styles.advantagesItemText}>
                                Нет ограничений по пробегу автомобиля
                            </p>
                        </div>
                    </div>

                    <div className={styles.advantagesImageContainer}>
                        <Image
                            className={styles.advantagesImage}
                            src={ImageAdvantages}
                            alt='Клубника - ягодная ферма'
                        ></Image>
                    </div>

                    <div className={`${styles.advantagesItemContainer}`}>
                        <div className={`${styles.advantagesItem} ${styles.advantagesItemThird}`}>
                            <div className={`${styles.advantagesIcon} ${styles.third}`} />
                            <p className={styles.advantagesItemText}>
                                Все машины застрахованы ОСАГО или КАСКО
                            </p>
                        </div>
                        <div className={`${styles.advantagesItem} ${styles.advantagesItemFourth}`}>
                            <div className={`${styles.advantagesIcon} ${styles.fourth}`} />
                            <p className={styles.advantagesItemText}>
                                Простой возврат автомобиля сразу
                            </p>
                        </div>
                    </div>
                </div>

            </div >
        </section>
    )
};