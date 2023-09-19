import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePopup } from '../../../components/PopupContext';
import { motion } from 'framer-motion';
import styles from './Product.module.scss';
// import { usePopup } from '../../../components/ContactPopup/PopupContext';

export default function Product({ car, catalog }) {
    const { openPopup } = usePopup();

    return (
        <>
            {car &&
                <div className={`${catalog && styles.productCatalog}`}>
                    <Link
                        className={styles.product}
                        href={`/catalog/${car.fields.slug}`}
                    >
                        <div className={styles.clickIcon} />
                        <div>

                            <Image
                                className={styles.image}
                                src={"https:" + car.fields.media[0].fields.file.url}
                                fill={true}
                                priority={true}
                                alt={car.title}
                            />

                            {car.fields.maxEquipment &&
                                <div className={styles.equipment}>максимальная комплектация</div>
                            }
                        </div>
                    </Link>

                    <div className={styles.cardTitleWrapper}>
                        <div className={styles.cardTitleContainer}>
                            <h3 className={styles.cardTitle}>{car.fields.name}</h3>
                            <p className={styles.cardText}>от {car.fields.priceFive} руб/сутки</p>
                        </div>

                        <motion.div
                            className={styles.buttonContainer}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                            <button className={styles.popularButton} onClick={() => openPopup(car.fields.name)}>Забронировать</button>
                        </motion.div>


                    </div>
                </div>
            }
        </>
    )
};