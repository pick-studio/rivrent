'use client'

import React from 'react';

import Title from './title';
import Advantages from './advantages';
import Companies from './companies';
import Clients from './clients';
import Rating from './rating';

import { data } from './data';

import styles from './reviews.module.scss';

export default function Reviews() {
    return (
        <div id="rating" className={styles.reviews}>
            <div className='container'>
                <div className={styles.titleContainer}>
                    <h2 className="title">Отзывы клиентов</h2>
                </div>
            </div>
            <section>
                <div className='container'>

                    <div className={styles.wrapperContainer}>
                        <div className={styles.wrapper}>
                            <Title title={data.title} company={data.company} />
                            <Rating company={data.company} grade={data.grade} numberOfReviews={data.numberOfReviews} />
                            <Advantages items={data.advantagesList} />
                            <Clients reviews={data.reviews} />
                        </div>
                        <Companies companiesList={data.companiesList} />
                    </div>

                </div>
            </section >
        </div>
    )
};