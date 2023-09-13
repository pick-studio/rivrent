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
                        <a className={styles.phoneMobileLink}>+7 (921) 111-11-50</a>
                        <div className={styles.mainTextContainer}>
                            <h1>Аренда<br /> автомобилей<br /> в Калининграде</h1>
                            <p>Круглосуточная доставка по городу и области</p>
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
                            <a className={`${styles.massengerItem} ${styles.telegram}`} href="#">
                                <span>telegram</span>
                            </a>
                            <a className={`${styles.massengerItem} ${styles.whatsapp}`} href="#">
                                <span>whatsapp</span>
                            </a>
                            <a className={`${styles.massengerItem} ${styles.viber}`} href="#">
                                <span>viber</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};