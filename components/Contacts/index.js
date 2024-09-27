import React from "react";
import { motion } from 'framer-motion';

import { useForm } from "react-hook-form";
import axios from "axios";

import styles from "./Contacts.module.scss";

export default function Footer({ product }) {
    const [originUrl, setOriginUrl] = React.useState("");

    const formTag = React.useRef();
    const formButton = React.useRef();

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
                setTimeout(() => formButton.current.classList.remove("button--success"), 3000);
            }
        } catch (err) {
            formTag.current.reset();
            formButton.current.setAttribute("disabled", "disabled")
            formButton.current.classList.remove("button--delivery");
            formButton.current.classList.add("button--error");
        }

    }

    return (
        <section id="contacts">
            <footer className={styles.contacts}>
                <div className="container">
                    <div className={styles.contactsWrapper}>

                        <div className={styles.contactsLeft}>
                            <div className={styles.contactsLeftWrapper}>
                                <div className={styles.titleContainer}>
                                    <h2 className="title">
                                        Контакты
                                    </h2>
                                    <p className="subTitle">
                                        {!product ? `Оставьте заявку и мы свяжемся с вами в течении 5 минут` : `C радостью ответим на ваши вопросы и поможем вам в выборе автомобиля. Оформим за 10 минут и встретим с готовым договором`}
                                    </p>
                                </div>
                                <div className={styles.contactsContacts}>
                                    <div className={styles.contactsContactsPhone}>
                                        <div className={styles.phoneContainer}>
                                            <a href="tel:+79111111150" className={styles.phone}>+7 (911) 111-11-50</a>
                                            <a href="mailto:riv.autorent@gmail.com">riv.autorent@gmail.com</a>
                                        </div>
                                    </div>

                                    <div className={styles.massengerList}>
                                        <motion.div
                                            className={styles.buttonOrderContainer}
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                            transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                                            <a href="https://t.me/rivrent" className={`${styles.massengerItem} ${styles.telegram}`} />
                                        </motion.div>
                                        <motion.div
                                            className={styles.buttonOrderContainer}
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                            transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                                            <a href="https://wa.me/79111111150" className={`${styles.massengerItem} ${styles.whatsapp}`} />
                                        </motion.div>
                                        <motion.div
                                            className={styles.buttonOrderContainer}
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                            transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                                            <a href="https://viber.click/79111111150" className={`${styles.massengerItem} ${styles.viber}`} />
                                        </motion.div>
                                        <motion.div
                                            className={styles.buttonOrderContainer}
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                            transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                                            <a href="https://vk.com/rivrent" className={`${styles.massengerItem} ${styles.vk}`} />
                                        </motion.div>
                                    </div>

                                    <div className={styles.adressContainer}>
                                        <p>Калининград, улица Гагарина 228, офис 4</p>
                                        <p>Ежедневно с 09:00 до 18:00, на связи 24/7</p>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className={styles.contactsRight}>
                            <div className={styles.contactsRightWrapper}>
                                <h2 className={`${styles.title} ${styles.mobileTitle}`}>Обратная связь</h2>
                                <form ref={formTag} onSubmit={handleSubmit(onSubmitForm)} className={styles.form}>
                                    <input
                                        placeholder="Ваше имя"
                                        className={styles.input}
                                        {...register("name")}
                                        autoComplete="off" required />
                                    <input
                                        placeholder="Номер телефона"
                                        className={styles.input}
                                        {...register("phone")}
                                        autoComplete="off" required />
                                    <input
                                        placeholder="Email"
                                        className={styles.input}
                                        {...register("email")}
                                        autoComplete="off" />
                                    <span className={styles.signature}>Мы не передаем личные данные третьим лицам</span>

                                    {/* Кнопка отправки */}

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
                            </div>
                        </div>
                    </div>

                </div>

            </footer>
        </section>
    );
}