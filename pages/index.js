import { createClient } from "contentful";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Main from '../components/Main';
import Popular from '../components/Popular';
import Additions from '../components/Additions';
import ScrollLine from '../components/ScrollLine';
import Process from '../components/Process';
import Background from '../components/Background';
import Questions from '../components/Questions';
import Contacts from '../components/Contacts';
import Advantages from '../components/Advantages';
import Reviews from "../components/blocks/Reviews";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const data = await client.getEntries({
    content_type: "car",
    'fields.best': true, // Фильтрация по определенному полю, best работает
    limit: 16 // Сколько максимум отдавать значений
  });

  return {
    props: { cars: data.items },
    revalidate: 1,
  };
}

export default function Home({ cars }) {
  const router = useRouter();

  useEffect(() => {
    // При монтировании компонента сохраняем текущую позицию прокрутки,
    // но только если страница не была загружена из истории навигации (например, нажатием "назад")
    if (!router.asPath.startsWith('/product/')) {
      sessionStorage.setItem('scrollPosition', window.scrollY);
    }

    const handleScroll = () => {
      if (!router.asPath.startsWith('/product/')) {
        sessionStorage.setItem('scrollPosition', window.scrollY);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // При размонтировании компонента удаляем обработчик
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // При загрузке главной страницы восстанавливаем позицию прокрутки
    const savedScrollPosition = sessionStorage.getItem('scrollPosition');

    if (savedScrollPosition) {
      window.scrollTo(0, parseInt(savedScrollPosition));
      sessionStorage.removeItem('scrollPosition');
    }
  }, [router.pathname]);

  return (
    <>
      <Head>
        <title>RIV RENT - аренда автомобилей в Калининграде и области</title>
        <meta
          name="description"
          content="Аренда автомобилей в Калининграде и области. Широкий выбор авто по выгодным ценам. Забронируйте и наслаждайтесь поездкой с комфортом и уверенностью."
        />
        <meta property="twitter:description" content="Аренда автомобилей в Калининграде и области. Широкий выбор авто по выгодным ценам. Забронируйте и наслаждайтесь поездкой с комфортом и уверенностью." />
        <meta property="og:description" content="Аренда автомобилей в Калининграде и области. Широкий выбор авто по выгодным ценам. Забронируйте и наслаждайтесь поездкой с комфортом и уверенностью." />
        <meta
          name="keywords"
          content="Аренда автомобилей, Прокат машин, Автопрокат, Калининград, Калининградская область, Авто в аренду, Прокат авто, Дешевая аренда, Аэропорт Калининграда, Долгосрочная аренда, Лучший прокат, Семейная аренда, Автомобили для туристов, Минивэны, Экономичная аренда, Автомобиль на свадьбу, Аренда с водителем, Транспорт в Калининграде, Рент кар, Прокат транспорта."
        />
        <meta content="RIV RENT - аренда автомобилей в Калининграде и области" property="twitter:title" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="RIV RENT" />
        <meta property="og:title" content="Аренда автомобилей в Калининграде и области" />
        <meta property="og:image" content="https://i.ibb.co/c6pzwc1/ef846e68-4941-475b-8508-686e21462848.jpg" />
        <meta property="og:image:type" content="image/jpg" />
        <meta property="twitter:image" content="https://i.ibb.co/c6pzwc1/ef846e68-4941-475b-8508-686e21462848.jpg" />
        <meta name="twitter:image" content="https://i.ibb.co/c6pzwc1/ef846e68-4941-475b-8508-686e21462848.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta content="summary_large_image" name="twitter:card" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>

      <main>

        {/* Главная страница */}

        <Main />
        <ScrollLine />
        <Popular carList={cars} />
        <Additions />
        <div className='reviewsContainer'>
          <Reviews />
        </div>
        <Process />
        <Background />
        <Advantages />
        <Questions />
        <Contacts />
        <ScrollLine />

      </main>
    </>
  )
}
