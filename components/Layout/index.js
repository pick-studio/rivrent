import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import VideoPopup from '../../components/VideoPopup';
import OrderPopup from '../../components/OrderPopup';
import { PopupProvider } from '../PopupContext';
import Script from 'next/script';

export default function Layout({ children }) {

    return (
        <>
            <Script id="yandexMetrica" strategy="lazyOnload">
                {`(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
   m[i].l=1*new Date();
   for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
   k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
   (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

   ym(93610070, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true
   });`}

                {`window.replainSettings = {id: '09205fe4-cc81-47ca-89c8-c62b9bfd38ef' };
                (function(u){var s=document.createElement('script');s.async=true;s.src=u;
                var x=document.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);
})('https://widget.replain.cc/dist/client.js');`}
            </Script>

            <main className='main'>
                <Header />

                <PopupProvider>
                    <VideoPopup />
                    <OrderPopup />
                    {children}
                </PopupProvider>

                <Footer />
            </main>
        </>
    )

}