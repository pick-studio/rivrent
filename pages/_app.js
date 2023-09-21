import '@/styles/globals.css';
import '../styles/swiper.css'
import '../styles/swiper-thumbs.css';
import '../styles/swiper-card.css';
import '../styles/swiper-lightbox.css';
import Layout from '@/components/Layout';
import { motion } from 'framer-motion';
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <Layout>
      <motion.div
        key={router.route}

        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        exit={{ opacity: 0 }}
      >
        <Component {...pageProps} />
      </motion.div>
    </Layout>
  )
}
