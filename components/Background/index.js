import React from 'react';
import styles from './Background.module.scss';
import { motion } from 'framer-motion';
import Link from 'next/link';

// import backgroundVideo from '../../public/video/background.mp4';

export default function Background() {

    return (
        <section className={styles.background}>
            <video autoPlay muted loop className={styles.video}>
                <source src="https://rivrent.vercel.app/video/background.mp4" type="video/mp4" />
            </video>

            <div className={styles.backgroundWrapper}>
                <div className={styles.backgroundTitleContainer}>
                    <h2 className={`title ${styles.backgroundTitle}`}>Изучите Янтарный край<br /> вместе с нами</h2>
                </div>
                <div className={styles.backgroundButtonContainer}>
                    <motion.div
                        className={styles.buttonContainer}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                        <Link href={'/catalog'} className="button">Выбрать машину</Link>
                    </motion.div>
                </div>
            </div>
        </section>
    )
};