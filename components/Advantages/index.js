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


                <div className={styles.cardProductAdvantagesList}>
                    <div className={`${styles.cardProductAdvantagesItemContainer} ${styles.cardProductAdvantagesItemContainerLeft}`}>
                        <div className={`${styles.cardProductAdvantagesItem} ${styles.cardProductAdvantagesItemFirst}`}>
                            <div className={`${styles.cardProductAdvantagesIcon} ${styles.first}`} />
                            <p className={styles.cardProductAdvantagesItemText}>
                                Доставим автомобиль к месту назначения
                            </p>
                        </div>
                        <div className={`${styles.cardProductAdvantagesItem} ${styles.cardProductAdvantagesItemSecond}`}>
                            <div className={`${styles.cardProductAdvantagesIcon} ${styles.second}`} />
                            <p className={styles.cardProductAdvantagesItemText}>
                                Нет ограничений по пробегу автомобиля
                            </p>
                        </div>
                    </div>

                    <div className={styles.cardProductAdvantagesImageContainer}>
                        <Image
                            className={styles.cardProductAdvantagesImage}
                            src={ImageAdvantages}
                            alt='Клубника - ягодная ферма'
                        ></Image>
                    </div>

                    <div className={`${styles.cardProductAdvantagesItemContainer}`}>
                        <div className={`${styles.cardProductAdvantagesItem} ${styles.cardProductAdvantagesItemThird}`}>
                            <div className={`${styles.cardProductAdvantagesIcon} ${styles.third}`} />
                            <p className={styles.cardProductAdvantagesItemText}>
                                Все машины застрахованы ОСАГО или КАСКО
                            </p>
                        </div>
                        <div className={`${styles.cardProductAdvantagesItem} ${styles.cardProductAdvantagesItemFourth}`}>
                            <div className={`${styles.cardProductAdvantagesIcon} ${styles.fourth}`} />
                            <p className={styles.cardProductAdvantagesItemText}>
                                Простой возврат автомобиля сразу
                            </p>
                        </div>
                    </div>
                </div>

            </div >
        </section>
    )
};