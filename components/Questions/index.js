import React from "react";
// import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import styles from "./Questions.module.scss";

const array = [
  { questions: 'Есть ли какие то требования по возрасту и стажу водителя?', answer: 'Да, мы сдаем автомобили только лицам достигшим 23 лет и имеющим стаж вождения от 3-х лет.' },
  { questions: 'Можно ли вернуть автомобиль с неполным баком?', answer: 'Да, возможно, компенсировав 70 рублей за каждый недостающий литр топлива.' },
  { questions: 'Какой суточный пробег?', answer: 'Суточный пробег на автомобили не ограничен.' },
  { questions: 'Можно ли получить автомобиль в аэропорту или в другом месте?', answer: 'Возможна доставка/возврат автомобиля в любую точку Калининграда, в аэропорт Храброво и по Калининградской области. Стоимость доставки необходимо уточнить у менеджера по телефону 8 (911) 111-11-50' },
  { questions: 'Можно ли получить автомобиль в ночное время?', answer: 'Да, мы осуществляем доставку наших транспортных средств круглосуточно за дополнительную стоимость в ночное время.' },
  { questions: 'Как оплачиваются штрафы?', answer: 'Арендатор несет полную материальную ответственность за все штрафы и нарушения, которые могут возникнуть во время эксплуатации автомобиля. Арендодатель вправе удержать сумму штрафов из залогового платежа.' },
  { questions: 'Включена ли страховка в тариф проката?', answer: 'Да, стоимость аренды автомобиля включает страхование гражданской ответственности по КАСКО или ОСАГО.' },
]

export default function Questions({ questionsList }) {

  const questionsClickHandler = (event) => {
    if (event.currentTarget && event.currentTarget.classList.contains(`${styles.active}`)) {
      event.currentTarget.classList.remove(`${styles.active}`);
    } else {
      event.currentTarget.classList.add(`${styles.active}`);
    }
  };

  return (
    <section className={styles.questions}>
      <div className="container">
        <div className={styles.titleContainer}>
          <h2 className={styles.title}>Популярные вопросы</h2>
          <p className={`${styles.subTitle} ${styles.white}`}>Частые вопросы которые задают наши клиенты</p>
        </div>
        <ul className={styles.questionsList}>

          {array.map((item, index) => {

            return (
              <li key={index} onClick={(event) => { questionsClickHandler(event) }} className={styles.questionsItem}>
                <div className={styles.qeustionsIcon}></div>
                <div className={styles.questionsItemQuestion}>
                  <p>{item.questions}</p>
                </div>

                <div className={styles.questionsItemAnswer}>
                  <p>{item.answer}</p>
                </div>
              </li>
            );
          })}

        </ul>
      </div>
    </section>
  );
}
