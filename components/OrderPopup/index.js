import React from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { usePopup } from '../PopupContext';
import { useForm } from "react-hook-form";
import axios from "axios";
import styles from './OrderPopup.module.scss';

export default function Popup() {
    const [originUrl, setOriginUrl] = React.useState("");
    const { isPopupOpen, closePopup, currentCar } = usePopup();

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
        reset,
    } = useForm();

    React.useEffect(() => {
        setOriginUrl(window.location.origin)
    }, []);

    const formTag = React.useRef();
    const formButton = React.useRef();

    async function onSubmitForm(values) {

        formButton.current.setAttribute("disabled", "disabled");
        formButton.current.classList.add("button--delivery");

        let config = {
            method: "post",
            url: `${originUrl}/api/feedback`,
            headers: {
                "Content-Type": "application/json",
            },
            data: values,
        };

        try {
            const response = await axios(config);
            if (response.status == 200) {
                formTag.current.reset();
                formButton.current.classList.remove("button--delivery");
                formButton.current.classList.add("button--success");

                formButton.current.setAttribute("disabled", "disabled");
                setTimeout(() => closePopup(), 4000);
            }
        } catch (err) {
            formTag.current.reset();
            formButton.current.setAttribute("disabled", "disabled")
            formButton.current.classList.remove("button--delivery");
            formButton.current.classList.add("button--error");

            setTimeout(() => formButton.current.classList.remove("button--error"), 5000);
            setTimeout(() => formButton.current.setAttribute("disabled", ""), 5000);
        }

    }

    const handleCloseClick = () => {
        closePopup();
    };

    return (
        <AnimatePresence>
            {isPopupOpen && (
                <motion.div
                    className={styles.cardOverlay}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <motion.div
                        className={styles.cardPopup}
                        initial={{ translateY: 1200 }}
                        animate={{ translateY: 0 }}
                        exit={{ translateY: 1200 }}
                    >
                        <button className={styles.closeButton} onClick={handleCloseClick} />
                        <div className={styles.image} />

                        <h3 className={styles.title}>{currentCar ? `Бронирование` : `Обратная связь`}</h3>
                        <p className={`subTitle ${styles.subTitle}`}>{currentCar ? `Забронируйте ${currentCar} по специальной цене с доставкой в любую точку города` : `Подберем лучший вариант для вас`}</p>

                        <form ref={formTag} onSubmit={handleSubmit(onSubmitForm)} className={styles.form}>
                            <label htmlFor="phone" className={styles.label}>Введите ваш номер телефона:</label>
                            <input
                                id="phone"
                                placeholder="8 911 111-11-50"
                                className={styles.input}
                                {...register("phone")}
                                autoComplete="off" required />
                            <span className={styles.signature}>*При нажатии на кнопку отправить заявку вы даете согласие на обработку <Link href='/policy' className={styles.policyLink} onClick={handleCloseClick}>персональных данных</Link></span>

                            <p className={styles.timeSignature}>Свяжемся с вами в течении 2 минут</p>

                            <motion.div
                                className={styles.buttonOrderContainer}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                                <button ref={formButton} type="submit" className="button-order">
                                    <span className="button-order__standart-state">Оставить заявку</span>
                                    <span className="button-order__delivery-state">Идет отправка 🚗</span>
                                    <span className="button-order__success-state">Скоро свяжемся! 👌</span>
                                    <span className="button-order__error-state">Ошибка, не отправлено!</span>
                                </button>
                            </motion.div>

                        </form>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}