import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import styles from './Footer.module.scss';

import vk from '../../public/img/social/vk.webp';
import rut from '../../public/img/social/rutube.webp';
import inst from '../../public/img/social/instagram.webp';
import tik from '../../public/img/social/tiktok.webp';
import yout from '../../public/img/social/youtube.webp';

export default function Footer() {
    return (
        <section className={styles.footer}>

            <div className="container">
                <div className={styles.footerWrapper}>
                    <div className={styles.information}>
                        <div className={styles.social}>
                            <span className={styles.socialText}>
                                Присоединяйтесь к нам:
                            </span>
                            <div className={styles.socialList}>
                                <a href='https://vk.com/rivrent' className={styles.socialItem}>
                                    <Image className={styles.socialImage} src={vk} width='30' height='30' alt='Rivrent - вконтакте'></Image>
                                </a>
                                <a href='https://vk.com/rivrent' className={styles.socialItem}>
                                    <Image className={styles.socialImage} src={rut} width='30' height='30' alt='Rivrent - Rutube'></Image>
                                </a>
                                <a href='https://www.instagram.com/rivrent39?igsh=bm5tbm81bDA0NWR5' className={styles.socialItem}>
                                    <Image className={styles.socialImage} src={inst} width='30' height='30' alt='Rivrent - Instagram'></Image>
                                </a>
                                <a href='https://www.instagram.com/rivrent39?igsh=bm5tbm81bDA0NWR5' className={styles.socialItem}>
                                    <Image className={styles.socialImage} src={tik} width='30' height='30' alt='Rivrent - TikTok'></Image>
                                </a>
                                <a href='https://youtube.com/@rivrent?si=jZ0SwvMAtFQoSRBZ' className={styles.socialItem}>
                                    <Image className={styles.socialImage} src={yout} width='30' height='30' alt='Rivrent - Youtube'></Image>
                                </a>
                            </div>
                        </div>

                        <span>Riv Rent © 2024</span>
                    </div>

                    <ul className={styles.menu}>
                        <li>
                            <Link className={styles.link} href="/catalog">Каталог автомобилей</Link>
                        </li>
                        <li>
                            <Link className={styles.link} href="/services">Услуги и условия</Link>
                        </li>
                        <li>
                            <Link className={styles.link} href="/about">О нашей компании</Link>
                        </li>
                        <li>
                            <Link className={styles.link} href="/policy">Политика конфиденциальности</Link>
                        </li>
                    </ul>
                </div>

            </div>
        </section>
    )
};