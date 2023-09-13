import React from 'react';
import styles from './Background.module.scss';
import { motion } from 'framer-motion';
import Link from 'next/link';

// import backgroundVideo from '../../public/video/background.mp4';

export default function Background() {

    return (
        <section className={styles.production}>

            {/* <video style={{ width: '500px', height: '500px' }} type="video/mp4" autoPlay loop muted>
                <source src={'https://cloud.mail.ru/public/1zab/dyi6CEB1U'}></source>
    </video> */}

            <video autoPlay muted loop className={styles.video}>
                <source src="https://lesopilca.com/video/background.mp4" type="video/mp4" />
            </video>

            <div className={styles.productionWrapper}>
                <div className={styles.productionTitleContainer}>
                    <h2 className={`title ${styles.backgroundTitle}`}>Большой каталог<br /> новых автомобилей</h2>
                </div>
                <div className={styles.productionButtonContainer}>
                    <motion.div
                        className={styles.buttonContainer}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                        <Link href={'/catalog'} className="button">Выбрать свой</Link>
                    </motion.div>
                </div>
            </div>
        </section>
    )
};