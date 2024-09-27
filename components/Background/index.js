import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from './Background.module.scss';

const Background = () => {
    const videoRef = useRef(null);
    const [videoLoaded, setVideoLoaded] = useState(false);

    useEffect(() => {
        if (videoLoaded) {
            // Видео уже загружено, не делаем ничего
            return;
        }

        const options = {
            root: null,
            rootMargin: '0px 0px 300px 0px',
            threshold: 0.1,
        };

        const handleIntersection = (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    loadVideo();
                    observer.unobserve(entry.target);
                }
            });
        };

        const loadVideo = () => {
            const source = videoRef.current.querySelector('source');
            const videoSrc = source.getAttribute('data-src');
            source.setAttribute('src', videoSrc);
            videoRef.current.load();
            videoRef.current.play();
            setVideoLoaded(true);
        };

        const observer = new IntersectionObserver(handleIntersection, options);

        observer.observe(videoRef.current);

        return () => {
            observer.disconnect();
        };
    }, [videoLoaded]);

    return (
        <section className={styles.background}>
            <video
                ref={videoRef}
                autoPlay
                loop muted
                preload="auto"
                tabIndex="-1"
                className={styles.video}
            >
                <source data-src="https://rivrent.ru/video/background.mp4" type="video/mp4" />
            </video>

            <div className={styles.backgroundWrapper}>
                <div className={styles.backgroundTitleContainer}>
                    <h2 className={`title ${styles.backgroundTitle}`}>Изучите Янтарный край<br /> вместе с нами</h2>
                </div>
                <div className={styles.backgroundButtonContainer}>
                    <motion.div
                        className={styles.buttonContainer}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                        <Link href={'/catalog'} className="button">Выбрать машину</Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Background;