import React from 'react';

import styles from './reviewItem.module.scss';

export default function ReviewItem({ item }) {
    const [isExpanded, setIsExpanded] = React.useState(false);

    const showFullText = () => {
        setIsExpanded(true); // Один раз показываем полностью
    };

    // Определяем, нужно ли показывать кнопку "Читать полностью"
    const shouldTruncate = item.text.length > 350; // Условие для обрезки текста (допустим 150 символов — эквивалент трех строк)

    return (
        <div className={styles.item}>
            <div className={styles.content}>
                <div className={styles.wrapper}>
                    <div
                        className={styles.icon}
                        style={{ background: item.color }}
                    >
                        <span className={styles.letter}>{item.avatar}</span>
                    </div>
                    <div>
                        <h4 className={styles.title}>{item.name}</h4>
                        <span className={styles.date}>{item.date}</span>
                    </div>
                </div>
            </div>

            <p className={styles.description}>
                {isExpanded ? item.text : `${item.text.slice(0, 150)}...`} {/* Обрезаем текст, если он не раскрыт */}
            </p>

            {shouldTruncate && !isExpanded && (
                <button className={styles.readMoreButton} onClick={showFullText}>
                    Читать полностью...
                </button>
            )}
        </div>
    );
};