import React from 'react';
import Link from 'next/link';

import styles from './Footer.module.scss';

export default function Footer() {
    return (
        <section className={styles.footer}>

            <div className="container">
                <div className={styles.footerWrapper}>
                    <div className={styles.information}>
                        <span>RIVRENT © 2023</span>
                        <p>Аренда автомобилей в Калининграде и области</p>
                    </div>

                    <ul className={styles.menu}>
                        <li>
                            <Link className={styles.link} href="/catalog">Каталог</Link>
                        </li>
                        <li>
                            <Link className={styles.link} href="/services">Услуги</Link>
                        </li>
                        <li>
                            <Link className={styles.link} href="/about">О нас</Link>
                        </li>
                        <li>
                            <Link className={styles.link} href="/">Контакты</Link>
                        </li>
                    </ul>
                </div>

            </div>
        </section>
    )
};