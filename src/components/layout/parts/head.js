import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

function HEAD({
  description,
  lang,
  meta,
  keywords,
  title,
  locales,
  landingName
}) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteURL
            defaultLocale
          }
        }
      }
    `
  )
  const metaTitle = title || site.siteMetadata.title
  const metaDescription = description || site.siteMetadata.description
  const metaLocales = locales || site.siteMetadata.defaultLocale
  const metaLandingName = landingName || ''

  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      title={metaTitle}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription
        },
        {
          property: `og:title`,
          content: title
        },
        {
          property: `og:description`,
          content: metaDescription
        },
        {
          property: `og:type`,
          content: `website`
        },
        {
          name: `twitter:card`,
          content: `summary`
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author
        },
        {
          name: `twitter:title`,
          content: title
        },
        {
          name: `twitter:description`,
          content: metaDescription
        }
      ]
        .concat(
          keywords.length > 0
            ? {
                name: `keywords`,
                content: keywords.join(`, `)
              }
            : []
        )
        .concat(meta)}
    >
      <link
        rel="canonical"
        href={site.siteMetadata.siteURL + '/' + metaLandingName + '/'}
      />

      {metaLocales.map(locale => {
        return (
          <link
            rel="alternate"
            href={
              site.siteMetadata.siteURL +
              '/' +
              locale +
              '/' +
              metaLandingName +
              '/'
            }
            hrefLang={locale}
            key={locale}
          />
        )
      })}

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
  )
}

HEAD.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: []
}

HEAD.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
  locales: PropTypes.array,
  landingName: PropTypes.string.isRequired
}

export default HEAD
