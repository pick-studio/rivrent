import styles from './title.module.scss';

export default function Title({ title, company }) {
    return (
        <div className={styles.titleContainer}>
            <h2 className={styles.title}>{title}</h2>
            {company === 'Yandex' &&
                <p className={styles.subTitle}>Отзывы из Яндекс карт</p>
            }
            {company === '2GIS' &&
                <p className={styles.subTitle}>Отзывы из 2GIS</p>
            }
            {company === 'Google' &&
                <p className={styles.subTitle}>Отзывы из Google карт</p>
            }
        </div>
    )
};