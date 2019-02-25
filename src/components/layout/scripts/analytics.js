import React from 'react'

export const GoogleTagManagerBody = () => (
  <noscript>
    <iframe
      src="https://www.googletagmanager.com/ns.html?id=GTM-58T3LD4"
      height="0"
      width="0"
      style={{ display: 'none', visibility: 'hidden' }}
    />
  </noscript>
)

export const YandexMetrikaBody = () => (
  <noscript>
    <div>
      <img
        src="https://mc.yandex.ru/watch/52508278"
        style={{ position: 'absolute', left: '-9999px' }}
        alt=""
      />
    </div>
  </noscript>
)
