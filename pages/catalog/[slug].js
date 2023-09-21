import { useState, useEffect, useRef } from "react";
import { createClient } from "contentful";
import Head from "next/head";
import BreadCrumbs from "../../components/BreadCrumbs";
import { motion } from "framer-motion";
import Image from "next/image";
import { usePopup } from '../../components/PopupContext';
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Thumbs } from 'swiper/modules';

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import 'swiper/css/thumbs';

import styles from './CardProduct.module.scss';
import Additions from "../../components/Additions";
import Contacts from "../../components/Contacts";

const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export const getStaticPaths = async () => {
    const res = await client.getEntries({
        content_type: "car",
    });

    const paths = res.items.map((item) => {
        return {
            params: { slug: item.fields.slug },
        };
    });

    return {
        paths,
        fallback: true,
    };
};

export async function getStaticProps({ params }) {
    const products = await client.getEntries({ content_type: "car" });

    const { items } = await client.getEntries({
        content_type: "car",
        "fields.slug": params.slug,
    });

    if (!items.length) {
        return {
            redirect: {
                destination: "/",
                permanent: false,
            },
        };
    }

    return {
        props: { cars: products.items, currentItem: items[0] },
        revalidate: 1,
    };
}

export default function Product({ currentItem }) {
    const [arrowImage, setArrowImage] = useState([]);
    const [arrowImageArray, setArrowImageArray] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);

    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    const [currentPrice, setCurrentPrice] = useState();
    const [activeTab, setActiveTab] = useState(4);

    const priceButtons = [
        { buttonName: '1 день', price: currentItem && currentItem.fields.priceOne },
        { buttonName: '2-7 дн', price: currentItem && currentItem.fields.priceTwo },
        { buttonName: '8-15 дн', price: currentItem && currentItem.fields.priceThree },
        { buttonName: '16 дн', price: currentItem && currentItem.fields.priceFour },
        { buttonName: 'от 21 дн', price: currentItem && currentItem.fields.priceFive }
    ]

    useEffect(() => {
        setCurrentPrice(currentItem.fields.priceFive);
        setArrowImage(currentItem.fields.media);
    }, [currentItem]);

    useEffect(() => {
        setArrowImageArray(arrowImage.map(item => item.fields.file.url));
    }, [arrowImage]);

    function changePrice(price, activeIndex) {
        setCurrentPrice(price);
        setActiveTab(activeIndex);
    }

    const { openPopup, openVideoPopup } = usePopup();

    // Работа с формой обратной связи

    const [originUrl, setOriginUrl] = useState("");

    const formTag = useRef();
    const formButton = useRef();

    useEffect(() => {
        setOriginUrl(window.location.origin);
    }, []);

    const paramsSwiper = {
        navigation: {
            nextEl: ".swiper-arrow-next",
            prevEl: ".swiper-arrow-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            renderBullet: (index, className) => {
                return `<div class="${className}"></div>`;
            },
        }
    };

    const breadCrumbsCatalog = [{ name: 'каталог', url: '/catalog' }, { name: currentItem && currentItem.fields.slug, url: '/' }]

    return (
        <div>

            <Head>
                <title>{`${currentItem && currentItem.fields.name} - аренда автомобилей в Калининграде`}</title>
                <meta
                    name="description"
                    content={`${currentItem && currentItem.fields.name} - арендовать по выгодной цене для путешествий по Калининграду и области, с доставкой автомобиля до дома`} />
                <meta property="twitter:description" content={`${currentItem && currentItem.fields.name} - арендовать по выгодной цене для путешествий по Калининграду и области, с доставкой автомобиля до дома`} />
                <meta property="og:description" content={`${currentItem && currentItem.fields.name} - арендовать по выгодной цене для путешествий по Калининграду и области, с доставкой автомобиля до дома`} />
                <meta
                    name="keywords"
                    content="Аренда автомобилей, Прокат машин, Автопрокат, Калининград, Калининградская область, Авто в аренду, Прокат авто, Дешевая аренда, Аэропорт Калининграда, Долгосрочная аренда, Лучший прокат, Семейная аренда, Автомобили для туристов, Минивэны, Экономичная аренда, Автомобиль на свадьбу, Аренда с водителем, Транспорт в Калининграде, Рент кар, Прокат транспорта."
                />
                <meta content="RIVRENT - аренда автомобилей в Калининграде и области" property="twitter:title" />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="RIVRENT" />
                <meta property="og:title" content="Аренда автомобилей в Калининграде и области" />
                <meta property="og:image" content={`https: ${currentItem && currentItem.fields.media[0].fields.file.url}`} />
                <meta property="og:image:type" content="image/jpg" />
                <meta property="twitter:image" content={`https: ${currentItem && currentItem.fields.media[0].fields.file.url}`} />
                <meta name="twitter:image" content={`https: ${currentItem && currentItem.fields.media[0].fields.file.url}`} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta content="summary_large_image" name="twitter:card" />
                <meta content="width=device-width, initial-scale=1" name="viewport" />

            </Head>

            <section className={`card ${styles.card}`}>
                <div className="container">

                    <BreadCrumbs array={breadCrumbsCatalog} />

                    {/* {currentProduct && */}

                    <div className={styles.cardWrapper}>
                        <div className={`${styles.cardSwiper} ${styles.cardSwiperMain}`}>

                            {currentItem && currentItem.fields.youtubeVideo &&
                                <div className={styles.buttonWrapper}>
                                    <motion.div
                                        className={styles.buttonVideoContainer}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                                        <button className={styles.buttonVideo} onClick={() => openVideoPopup(currentItem && currentItem.fields.youtubeVideo)}>Видеообзор</button>
                                    </motion.div>
                                </div>
                            }

                            <Swiper
                                {...paramsSwiper}
                                spaceBetween={0}
                                slidesPerView={1}
                                thumbs={{ swiper: thumbsSwiper }}
                                modules={[Navigation, Thumbs]}
                                loop={true}
                                className="swiperCard"
                            >
                                {currentItem && currentItem.fields.media.map((item, index) => {
                                    return (
                                        <SwiperSlide className={styles.swiperSlide} key={index} onClick={() => {
                                            setIsOpen(true);
                                            setPhotoIndex(index);
                                        }}>
                                            <div className="card-card-img-container">
                                                <Image
                                                    className={styles.cardImage}
                                                    src={"https:" + item.fields.file.url}
                                                    layout="fill"
                                                    alt={item.fields.name}
                                                    priority
                                                ></Image>
                                            </div>
                                        </SwiperSlide>
                                    );
                                })}

                                {currentItem && currentItem.fields.media.length > 1 &&
                                    <>
                                        <motion.div
                                            className={`${styles.buttonArrowContainer} ${styles.left}`}
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                            transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                                            <div className="swiper-arrow-prev" />
                                        </motion.div>

                                        <motion.div
                                            className={`${styles.buttonArrowContainer} ${styles.right}`}
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                            transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                                            <div className="swiper-arrow-next" />
                                        </motion.div>

                                        <div className="swiper-pagination" />
                                    </>
                                }

                            </Swiper>

                            <Swiper
                                onSwiper={setThumbsSwiper}
                                loop={true}
                                spaceBetween={20}
                                breakpoints={{
                                    0: {
                                        slidesPerView: 4,
                                        spaceBetween: 20
                                    },
                                    500: {
                                        slidesPerView: 5,
                                        spaceBetween: 20
                                    },
                                    500: {
                                        slidesPerView: 5,
                                        spaceBetween: 20
                                    },
                                    900: {
                                        slidesPerView: 4,
                                        spaceBetween: 20
                                    },
                                    1100: {
                                        slidesPerView: 5,
                                        spaceBetween: 20
                                    },
                                    1400: {
                                        slidesPerView: 6,
                                        spaceBetween: 20
                                    },
                                    1700: {
                                        slidesPerView: 8,
                                        spaceBetween: 20
                                    }
                                }}
                                watchSlidesProgress={true}
                                slidesPerView={8}
                                modules={[Navigation, Thumbs]}
                                className="swiperThumbs"
                            >
                                {currentItem && currentItem.fields.media.map((item, index) => {
                                    return (
                                        <SwiperSlide className={styles.swiperThumbSlide} key={index}>
                                            <div className="card-card-img-container">
                                                <Image
                                                    className={styles.cardImage}
                                                    src={"https:" + item.fields.file.url}
                                                    layout="fill"
                                                    alt={item.fields.name}
                                                    priority
                                                ></Image>
                                            </div>
                                        </SwiperSlide>
                                    );
                                })}
                            </Swiper>
                        </div>


                        <div className={styles.cardDescriptionBlock}>
                            <div className={styles.cardDescriptionContainer}>

                                <div className={styles.titleContainer}>
                                    <h1 className="title">{currentItem && currentItem.fields.name}</h1>
                                    {currentItem && currentItem.fields.maxEquipment &&
                                        <span className={styles.signature}>Максимальная комплектация</span>
                                    }
                                </div>

                                <div className={styles.priceContainer}>
                                    <div className={styles.price}><motion.div
                                        className={styles.priceAnimate}
                                        key={currentPrice}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.8 }}
                                        exit={{ opacity: 0, position: "absolute", top: 0, left: 0 }}
                                    >{currentPrice}</motion.div> руб/сутки</div>

                                    <div className={styles.buttonPriceWrapper}>
                                        {/* <p>Выберите тариф:</p> */}
                                        {priceButtons.map((item, index) => {
                                            return (
                                                <motion.div
                                                    key={index}
                                                    className={styles.buttonContainer}
                                                    whileHover={{ scale: 1.1 }}
                                                    whileTap={{ scale: 0.9 }}
                                                    transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                                                    <button className={activeTab === index ? `${styles.priceButton} ${styles.active}` : `${styles.priceButton}`} onClick={() => changePrice(item.price, index)} id={index}>{item.buttonName}</button>
                                                </motion.div>
                                            )
                                        })}

                                    </div>
                                </div>

                                <div className={styles.buttonWrapper}>
                                    <motion.div
                                        className={styles.buttonContainer}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                                        <button className="button" onClick={() => openPopup(currentItem && currentItem.fields.name)}>Забронировать</button>
                                    </motion.div>
                                </div>

                                <div className={styles.descriptionContainer}>
                                    {/* <h3 className={styles.miniTitle}>Описание:</h3> */}
                                    <p className={styles.cardProductText}>{currentItem && currentItem.fields.description}</p>
                                </div>

                                <div className={styles.equipmentContainer}>
                                    <h3 className={styles.miniTitle}>Преимущества автомобиля:</h3>

                                    <ul className={styles.equipmentList}>
                                        {currentItem && currentItem.fields.equipment.map((item, index) => {

                                            return (
                                                <li className={styles.equipmentItem} key={index}>
                                                    {item}
                                                </li>
                                            )
                                        })}
                                    </ul>

                                </div>

                                {currentItem &&
                                    <div className={styles.equipmentContainer}>
                                        <h3 className={styles.miniTitle}>Технические характеристики:</h3>
                                        <li className={styles.equipmentTechItem}>
                                            Год выпуска: {currentItem.fields.year}
                                        </li>
                                        <li className={styles.equipmentTechItem}>
                                            Коробка: {currentItem.fields.transmission ? 'Автомат' : 'Механика'}
                                        </li>
                                        <li className={styles.equipmentTechItem}>
                                            Двигатель: {currentItem.fields.engineCapacity} л / {currentItem.fields.powerEngine} лс
                                        </li>
                                        <li className={styles.equipmentTechItem}>
                                            Количество дверей: {currentItem.fields.doorNumber}
                                        </li>
                                        <li className={styles.equipmentTechItem}>
                                            Привод: {currentItem.fields.driveUnit}
                                        </li>
                                        <li className={styles.equipmentTechItem}>
                                            Топливо: {currentItem.fields.fuel}
                                        </li>
                                        <li className={styles.equipmentTechItem}>
                                            Расход: {currentItem.fields.fuelConsumption}
                                        </li>
                                    </div>
                                }

                            </div>
                        </div>
                    </div>
                </div>

                {!!isOpen && (
                    <Lightbox
                        animationDuration={500}
                        closeLabel="Закрыть"
                        zoomInLabel="Увеличить изображение"
                        zoomOutLabel="Отдалить изображение"
                        // imageCaption={items.name}
                        mainSrc={arrowImageArray[photoIndex]}
                        nextSrc={
                            arrowImageArray[
                            (photoIndex + 1) % arrowImage.length
                            ]
                        }
                        prevSrc={
                            arrowImageArray[
                            (photoIndex + arrowImageArray.length - 1) %
                            arrowImageArray.length
                            ]
                        }
                        onCloseRequest={() => setIsOpen(false)}
                        onMovePrevRequest={() =>
                            setPhotoIndex(
                                (photoIndex + arrowImageArray.length - 1) %
                                arrowImageArray.length
                            )
                        }
                        onMoveNextRequest={() =>
                            setPhotoIndex(
                                (photoIndex + 1) % arrowImageArray.length
                            )
                        }
                    />
                )}

                <Additions />
                <Contacts />

            </section >
        </div >
    );
}