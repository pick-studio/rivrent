import React from 'react';
import { usePopup } from '../PopupContext';
import Link from 'next/link';
import styles from './Process.module.scss';

export default function Process() {
    const { openPopup } = usePopup();

    return (
        <section className={styles.process}>
            <div className="container">
                <div className={styles.titleContainer}>
                    <h2 className="title">Арендуйте автомобиль за 3 простых шага</h2>
                </div>
                <ul className={styles.processList}>
                    <li className={styles.item}>
                        <div>
                            <span>#1</span>
                            <h5>Выберите автомобиль</h5>
                            <p>Посмотрите наш новый автопарк</p>
                            <Link className={styles.button} href="/catalog">Посмотреть</Link>
                        </div>
                    </li>
                    <li className={styles.item}>
                        <div>
                            <span>#2</span>
                            <h5>Оставьте заявку</h5>
                            <p>Через форму обратной связи на нашем сайте</p>
                            <button className={styles.button} onClick={() => openPopup()}>Оставить</button>
                        </div>
                    </li>
                    <li className={styles.item}>
                        <div>
                            <span>#3</span>
                            <h5>Получите машину</h5>
                            <p>Заберите авто у нас или мы доставим его вам</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
};