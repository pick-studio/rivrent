import Link from 'next/link';
import React from 'react';
import { usePopup } from '../PopupContext';
import styles from "./Main.module.scss";
import { motion } from 'framer-motion';

export default function Main() {
    const { openPopup } = usePopup();

    return (
        <>
            <section className={styles.main}>
                <div className={`${styles.mainContainer} container`}>
                    <div className={styles.mainWrapper}>
                        <a href="tel:+79111111150" className={styles.phoneMobileLink}>+7 (911) 111-11-50</a>
                        <div className={styles.mainTextContainer}>
                            <h1>Аренда<br /> автомобилей<br /> в Калининграде</h1>
                            <p>Круглосуточная доставка по городу и области</p>
                            <motion.div
                                className={styles.buttonContainer}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                                <Link className={`button ${styles.blackColor}`} href="/catalog">
                                    Каталог машин
                                </Link>
                            </motion.div>

                            <motion.div
                                className={styles.buttonContainer}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                                <button className={`button`} onClick={() => openPopup()} href="/catalog">
                                    Быстрый подбор
                                </button>
                            </motion.div>
                        </div>
                        <div className={styles.massengerList}>
                            <a className={`${styles.massengerItem} ${styles.whatsapp}`} href="https://wa.me/79111111150">
                                <span>whatsapp</span>
                            </a>
                            <a className={`${styles.massengerItem} ${styles.telegram}`} href="https://t.me/rivrent">
                                <span>telegram</span>
                            </a>
                            <a className={`${styles.massengerItem} ${styles.viber}`} href="https://viber.click/79111111150">
                                <span>viber</span>
                            </a>
                            <a className={`${styles.massengerItem} ${styles.vk}`} href="https://vk.com/rivrent">
                                <span>vkontakte</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
};