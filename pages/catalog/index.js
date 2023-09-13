import { createClient } from "contentful";

import React from 'react';
import Head from 'next/head';

import BreadCrumbs from "../../components/BreadCrumbs";
// import CatalogFilters from '../../components/CatalogFilters';
import Additions from "../../components/Additions";
import Contacts from "../../components/Contacts";
import Product from './product';

import styles from './Catalog.module.scss';

export async function getStaticProps() {
    const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_KEY,
    });

    const data = await client.getEntries({
        content_type: "car"
    });

    return {
        props: { cars: data.items },
        revalidate: 1,
    };
}

const breadCrumbsCatalog = { name: 'каталог', url: '/catalog' }

export default function Catalog({ cars }) {
    return (
        <>
            <Head>
                <title>Каталог автомобилей - аренда автомобилей в Калининграде и области</title>
                <meta
                    name="description"
                    content="Аренда автомобилей в Калининграде и области. Насладитесь поездкой с нашим разнообразным парком автомобилей по выгодным ценам. Забронируйте уверенность в комфорте вместе с нами."
                />
                <meta property="twitter:description" content="Аренда автомобилей в Калининграде и области. Насладитесь поездкой с нашим разнообразным парком автомобилей по выгодным ценам. Забронируйте уверенность в комфорте вместе с нами." />
                <meta property="og:description" content="Аренда автомобилей в Калининграде и области. Насладитесь поездкой с нашим разнообразным парком автомобилей по выгодным ценам. Забронируйте уверенность в комфорте вместе с нами." />
                <meta
                    name="keywords"
                    content="Аренда автомобилей, Прокат машин, Автопрокат, Калининград, Калининградская область, Авто в аренду, Прокат авто, Дешевая аренда, Аэропорт Калининграда, Долгосрочная аренда, Лучший прокат, Семейная аренда, Автомобили для туристов, Минивэны, Экономичная аренда, Автомобиль на свадьбу, Аренда с водителем, Транспорт в Калининграде, Рент кар, Прокат транспорта."
                />
                <meta content="RIVRENT - аренда автомобилей в Калининграде и области" property="twitter:title" />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="RIVRENT" />
                <meta property="og:title" content="Аренда автомобилей в Калининграде и области" />
                <meta property="og:image" content="https://i.ibb.co/c6pzwc1/ef846e68-4941-475b-8508-686e21462848.jpg" />
                <meta property="og:image:type" content="image/jpg" />
                <meta property="twitter:image" content="https://i.ibb.co/c6pzwc1/ef846e68-4941-475b-8508-686e21462848.jpg" />
                <meta name="twitter:image" content="https://i.ibb.co/c6pzwc1/ef846e68-4941-475b-8508-686e21462848.jpg" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta content="summary_large_image" name="twitter:card" />
                <meta content="width=device-width, initial-scale=1" name="viewport" />
            </Head>

            <div className={styles.catalog}>
                <div className='container'>

                    <div className={styles.titleContainer}>
                        <h1 className='title'>Каталог машин</h1>
                        <p className='subTitle'>Идеальное состояние машин для комфортной езды</p>
                    </div>

                    <BreadCrumbs array={breadCrumbsCatalog} />

                    <div className={styles.list}>
                        {cars.map((item, index) => {
                            return (
                                <div className={styles.item} key={index}>
                                    <Product car={item} catalog={true} />
                                </div>
                            )
                        })}

                    </div>
                </div>
            </div>

            <Additions />
            <Contacts />
        </>
    )
};