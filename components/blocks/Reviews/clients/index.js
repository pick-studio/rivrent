'use client'

import React from 'react';
import ReviewItem from './reviewItem';

import styles from './clients.module.scss';

export default function Clients({ reviews }) {
    const [visibleReviews, setVisibleReviews] = React.useState(4); // Показываем сначала 6 отзывов
    const allReviewsShown = visibleReviews >= reviews.length; // Условие для скрытия кнопки

    const loadMoreReviews = () => {
        setVisibleReviews((prevVisible) => prevVisible + 4); // Добавляем еще 4 отзывов
    };

    return (
        <>
            <div className={styles.list}>
                {reviews.slice(0, visibleReviews).map((item, index) => {
                    return (
                        <ReviewItem key={index} item={item} />
                    )
                })}
            </div>

            {!allReviewsShown && (
                <button className={styles.loadMoreButton} onClick={loadMoreReviews}>
                    Показать еще
                </button>
            )}
        </>
    )
};