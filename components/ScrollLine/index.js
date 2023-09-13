import React from 'react';
import Marquee from "react-fast-marquee";
import styles from './ScrollLine.module.scss';

export default function ScrollLine() {
    return (
        <Marquee className={styles.scrollLine} speed={25} gradient={false}>
            <span>Новые автомобили</span>
            <span>Страховка осаго или каско</span>
            <span>Максимальная комплектация</span>
            <span>Помощь на дороге</span>
            <span>Чистые автомобили</span>
            <span>Нет ограничений по пробегу</span>
            <span>Быстрый возврат</span>
            <span>Доставка для аренды</span>
            <span>Новые автомобили</span>
            <span>Страховка осаго или каско</span>
            <span>Максимальная комплектация</span>
            <span>Помощь на дороге</span>
            <span>Чистые автомобили</span>
            <span>Нет ограничений по пробегу</span>
            <span>Быстрый возврат</span>
            <span>Доставка для аренды</span>
        </Marquee>
    )
};