import React from 'react'
import { Helmet } from 'react-helmet'
import 'src/common.blocks/index.less'
import LanguageContext from 'src/contexts/language'
import Navbar from 'src/components/navbar'
import { GoogleTagManagerBody, YandexMetrikaBody } from './scripts/analytics'

const LayoutPure = props => {
  const { pageTitle, language = 'en', children } = props

  return (
    <LanguageContext.Provider value={language}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{pageTitle}</title>
        {/*Google Tag Manager*/}
        <script>
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-58T3LD4');
          `}
        </script>
        {/*Yandex Metrica*/}
        <script type="text/javascript">
          {`
            (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
            (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
            ym(52508278, "init", {
            id:52508278,
            clickmap:true,
            trackLinks:true,
            accurateTrackBounce:true,
            webvisor:true
            });
          `}
        </script>
        {/*Luckyorange*/}
        <script type="text/javascript">
          {`
            window.__lo_site_id = 133827;
            (function() {
            var wa = document.createElement('script'); wa.type = 'text/javascript'; wa.async = true;
            wa.src = 'https://d10lpsik1i8c69.cloudfront.net/w.js';
            var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(wa, s);
            })();
          `}
        </script>
      </Helmet>
      <GoogleTagManagerBody />
      <YandexMetrikaBody />
      <Navbar />
      {children}
    </LanguageContext.Provider>
  )
}

export default LayoutPure
