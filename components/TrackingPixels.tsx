'use client';

import Script from 'next/script';
import { useEffect } from 'react';
import { useCookieConsent } from '@/lib/contexts/CookieConsentContext';

// IDs fixos dos pixels para garantir funcionamento no Vercel
const META_PIXEL_ID = '1831229621093127';
const LINKEDIN_INSIGHT_ID = '1234567';
const TIKTOK_PIXEL_ID = '1234567890123456789';
const CLARITY_ID = '1234567890';
const HOTJAR_ID = '1234567';
const INTERCOM_APP_ID = '1234567';
const CRISP_WEBSITE_ID = '12345678-1234-1234-1234-123456789012';

export function TrackingPixels() {
  const { consent } = useCookieConsent();

  // Meta Pixel (Facebook/Instagram)
  useEffect(() => {
    if (META_PIXEL_ID && consent?.marketing && typeof window !== 'undefined') {
      // Meta Pixel já é carregado via GTM, mas podemos adicionar lógica adicional aqui se necessário
      console.log('Meta Pixel ativado');
    }
  }, [consent?.marketing]);

  // LinkedIn Insight Tag
  useEffect(() => {
    if (LINKEDIN_INSIGHT_ID && consent?.marketing && typeof window !== 'undefined') {
      // LinkedIn Insight Tag já é carregado via GTM
      console.log('LinkedIn Insight Tag ativado');
    }
  }, [consent?.marketing]);

  // TikTok Pixel
  useEffect(() => {
    if (TIKTOK_PIXEL_ID && consent?.marketing && typeof window !== 'undefined') {
      // TikTok Pixel já é carregado via GTM
      console.log('TikTok Pixel ativado');
    }
  }, [consent?.marketing]);

  // Microsoft Clarity
  useEffect(() => {
    if (CLARITY_ID && consent?.analytics && typeof window !== 'undefined') {
      // Microsoft Clarity já é carregado via GTM
      console.log('Microsoft Clarity ativado');
    }
  }, [consent?.analytics]);

  // Hotjar
  useEffect(() => {
    if (HOTJAR_ID && consent?.analytics && typeof window !== 'undefined') {
      // Hotjar já é carregado via GTM
      console.log('Hotjar ativado');
    }
  }, [consent?.analytics]);

  // Intercom
  useEffect(() => {
    if (INTERCOM_APP_ID && consent?.functional && typeof window !== 'undefined') {
      // Intercom já é carregado via GTM
      console.log('Intercom ativado');
    }
  }, [consent?.functional]);

  // Crisp Chat
  useEffect(() => {
    if (CRISP_WEBSITE_ID && consent?.functional && typeof window !== 'undefined') {
      // Crisp já é carregado via GTM
      console.log('Crisp Chat ativado');
    }
  }, [consent?.functional]);

  return (
    <>
      {/* Meta Pixel - Carregado sempre para teste */}
      {META_PIXEL_ID && (
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${META_PIXEL_ID}');
              fbq('track', 'PageView');
            `,
          }}
        />
      )}

      {/* LinkedIn Insight Tag - Carregado sempre para teste */}
      {LINKEDIN_INSIGHT_ID && (
        <Script
          id="linkedin-insight"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              _linkedin_partner_id = "${LINKEDIN_INSIGHT_ID}";
              window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
              window._linkedin_data_partner_ids.push(_linkedin_partner_id);
              (function(l) {
                if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
                window.lintrk.q=[]}
                var s = document.getElementsByTagName("script")[0];
                var b = document.createElement("script");
                b.type = "text/javascript";b.async = true;
                b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
                s.parentNode.insertBefore(b, s);})(window.lintrk);
            `,
          }}
        />
      )}

      {/* TikTok Pixel - Carregado condicionalmente via GTM */}
      {TIKTOK_PIXEL_ID && consent?.marketing && (
        <Script
          id="tiktok-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function (w, d, t) {
                w.TikTokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["track","page","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var i="https://analytics.tiktok.com/i18n/pixel/events.js";ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=i,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};var o=document.createElement("script");o.type="text/javascript",o.async=!0,o.src=i+"?sdkid="+e+"&lib="+t;var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(o,a)};
                ttq.load('${TIKTOK_PIXEL_ID}');
                ttq.page();
              }(window, document, 'ttq');
            `,
          }}
        />
      )}

      {/* Microsoft Clarity - Carregado condicionalmente via GTM */}
      {CLARITY_ID && consent?.analytics && (
        <Script
          id="microsoft-clarity"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "${CLARITY_ID}");
            `,
          }}
        />
      )}

      {/* Hotjar - Carregado condicionalmente via GTM */}
      {HOTJAR_ID && consent?.analytics && (
        <Script
          id="hotjar"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:${HOTJAR_ID},hjsv:6};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
              })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
            `,
          }}
        />
      )}

      {/* Intercom - Carregado condicionalmente via GTM */}
      {INTERCOM_APP_ID && consent?.functional && (
        <Script
          id="intercom"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',w.intercomSettings);}else{var d=document;var i=function(){i.c(arguments);};i.q=[];i.c=function(args){i.q.push(args);};w.Intercom=i;var l=function(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/${INTERCOM_APP_ID}';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);};if(document.readyState==='complete'){l();}else if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();
            `,
          }}
        />
      )}

      {/* Crisp Chat - Carregado condicionalmente via GTM */}
      {CRISP_WEBSITE_ID && consent?.functional && (
        <Script
          id="crisp"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.$crisp=[];window.CRISP_WEBSITE_ID="${CRISP_WEBSITE_ID}";(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();
            `,
          }}
        />
      )}
    </>
  );
}
