import React, { useRef } from 'react';
import styles from './advantages.module.scss';

export default function Advantages({ items }) {
    const containerRef = useRef(null); // Ссылка на контейнер

    const handleMouseDown = (e) => {
        const container = containerRef.current;
        container.style.cursor = 'grabbing'; // Меняем курсор
        container.isDown = true;
        container.startX = e.pageX - container.offsetLeft;
        container.scrollLeftStart = container.scrollLeft;
    };

    const handleMouseLeave = () => {
        const container = containerRef.current;
        container.isDown = false;
        container.style.cursor = 'grab'; // Меняем курсор обратно
    };

    const handleMouseUp = () => {
        const container = containerRef.current;
        container.isDown = false;
        container.style.cursor = 'grab'; // Меняем курсор обратно
    };

    const handleMouseMove = (e) => {
        const container = containerRef.current;
        if (!container.isDown) return;
        e.preventDefault();
        const x = e.pageX - container.offsetLeft;
        const walk = x - container.startX; // На сколько пикселей сдвигается
        container.scrollLeft = container.scrollLeftStart - walk;
    };

    return (
        <div
            className={styles.advantages}
            ref={containerRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
        >
            {items && items.map((item, index) => (
                <div key={index} className={styles.item}>
                    <div>
                        <span className={styles.text}>{item.title}</span>
                        <span className={styles.value}>{item.percent}%</span>
                    </div>
                    <span>{item.numberOfReviews} оценок</span>
                </div>
            ))}
        </div>
    );
};