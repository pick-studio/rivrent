import React, { createContext, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ReactPlayer from 'react-player/lazy';
import { usePopup } from '../PopupContext';
import styles from './VideoPopup.module.scss';

export default function VideoPlayer() {

    const { isVideoPopupOpen, closeVideoPopup, currentUrl } = usePopup();

    return (
        <AnimatePresence>
            {isVideoPopupOpen && (
                <motion.div
                    className={styles.videoPopup}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <button onClick={() => closeVideoPopup()} className={styles.videoPopupButton}></button>
                    <div onClick={() => clickHandler()} className={styles.videoPopupOverlay} />
                    <ReactPlayer className={styles.videoPopupPlayer} wrapper={'div'} url={currentUrl} playing={true} controls />
                </motion.div>
            )
            }
        </AnimatePresence >
    );
}
