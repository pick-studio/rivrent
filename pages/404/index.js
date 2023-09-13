import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from './errorPage.module.scss';

export default function ErrorPage() {
    return (
        <>
            <Head>
                <title>404 - такой страницы не существует</title>
                <meta
                    name="description"
                    content="Аренда автомобилей в Калининграде и области. Широкий выбор авто по выгодным ценам. Забронируйте и наслаждайтесь поездкой с комфортом и уверенностью."
                />
            </Head>
            <div className={styles.errorPage}>
                <div className='container'>
                    <div className={styles.titleContainer}>
                        <h1>Такой страницы не существует</h1>
                        <p>К сожалению такой страницы нет на нашем сайте, пожалуйста перейдите на другую страницу</p>
                    </div>
                    <Link className="button" href="/">Перейти на главную</Link>
                </div>
            </div>
        </>
    )
};