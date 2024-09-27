import styles from './company.module.scss';

export default function Company({ company }) {
    return (
        <div className={`${styles.company} ${company === 'Yandex' ? styles.yandex : ''} ${company === 'Google' ? styles.google : ''} ${company === '2GIS' ? styles.gis : ''} ${company === 'Avito' ? styles.avito : ''}`} />
    )
};