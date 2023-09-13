import React from 'react';
// import { createClient } from "contentful";
import Link from 'next/link';
// import { openVideoPopup } from '../../../redux/slices/videoPopup';
import Image from 'next/image';
import { Swiper, SwiperSlide } from "swiper/react";
// import { useDispatch } from 'react-redux';
// import { addItem } from '../../../redux/slices/cartSlice';
import Product from '../../pages/catalog/product';

import { motion } from "framer-motion";
import styles from './Popular.module.scss';

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination } from 'swiper/modules';

export async function getStaticProps() {
    const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_KEY,
    });

    const prt = await client.getEntries({
        content_type: "product",
        order: '-fields.filtration', // Фильтровать по полю фильтрация
    });

    return {
        props: { products: prt.items },
        revalidate: 1,
    };
}

const filterButtonsArray = [
    {
        id: 1,
        title: 'Все',
        category: 'All'
    },
    {
        id: 2,
        title: 'Клубника',
        category: 'Ягоды'
    },
    {
        id: 3,
        title: 'Саженцы',
        category: 'Саженцы'
    },
]

export default function Popular({ carList }) {
    // const filtrationHandler = (category, index) => {
    //     setActiveFilterButton(index);
    //     setDefaultKey(defaultKey + 1);

    //     if (category) {
    //         if (category === 'Ягоды') {
    //             const filteredProducts = products.filter(product => product.fields.category === 'Клубника');
    //             setCurrentProducts(filteredProducts);
    //         } else if (category === 'Саженцы') {
    //             const filteredProducts = products.filter(product => product.fields.category === 'Саженцы');
    //             setCurrentProducts(filteredProducts);
    //         } else {
    //             setCurrentProducts(products);
    //         }
    //     }
    // }

    // const dispatch = useDispatch();

    const params = {
        navigation: {
            nextEl: ".swiper-arrow-next",
            prevEl: ".swiper-arrow-prev",
        },
        pagination: {
            type: "progressbar"
        }
    };

    function handleAddToCart(productId) {
        const selectedProduct = currentProducts.find(product => product.sys.id === productId);
        selectedProduct.fields.id = selectedProduct.sys.id;
        if (selectedProduct.fields.id) {
            dispatch(addItem(selectedProduct.fields));
        }
    }

    return (
        <div className={styles.services}>

            <div className='container'>

                <div className={styles.titleContainer}>
                    <h2 className="title">Популярные автомобили</h2>
                    <p className="subTitle">Эти автомобили наши клиенты арендуют чаще всего</p>
                </div>

                <div className={styles.topBlock}>

                    {/* <div className={styles.filter}>

                        {filterButtonsArray && filterButtonsArray.map((item, index) => {
                            return (
                                <motion.div
                                    key={item.id}
                                    className={styles.itemAnimateButton}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 1 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                                    <button
                                        className={`${styles.filterButton} ${activeFilterButton === index ? [styles.active] : ''}`}
                                        onClick={() => filtrationHandler(item.category, index)}>{item.title}</button>
                                </motion.div>
                            )
                        })}
                    </div> */}

                    {/* {currentCars.length > 0 &&
                        <div className={styles.arrows}>
                            <motion.div
                                className={styles.itemAnimateArrow}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 1 }}
                                transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                                <div className="swiper-arrow-prev" />
                            </motion.div>
                            <motion.div
                                className={styles.itemAnimateArrow}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 1 }}
                                transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                                <div className="swiper-arrow-next" />
                            </motion.div>
                        </div>
                    } */}

                </div>
                {carList &&

                    <Swiper
                        {...params}
                        className={styles.swiper}
                        modules={[Pagination, Navigation]}
                        breakpoints={{
                            0: {
                                slidesPerView: 1.2,
                                spaceBetween: 20
                            },
                            500: {
                                slidesPerView: 1.4,
                                spaceBetween: 40
                            },
                            800: {
                                slidesPerView: 1.8,
                                spaceBetween: 20
                            },
                            1200: {
                                slidesPerView: 2.1,
                                spaceBetween: 40
                            },
                            1600: {
                                slidesPerView: 2.6,
                                spaceBetween: 40
                            },
                            2000: {
                                slidesPerView: 3.2,
                                spaceBetween: 40
                            },
                        }}
                    >
                        {/* Отображаем товары с логикой работы с корзиной */}
                        {carList.map((item, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <Product car={item} catalog={false} />
                                </SwiperSlide>
                            )
                        })}
                    </Swiper >
                }
            </div >

        </div >
    )
}