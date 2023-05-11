import Script from 'next/script';

export const GoogleAnalytics = () => {
  if (process.env.GOOGLE_ANALYTICS_MEASUREMENT_ID === undefined) {
    return null;
  }
  return (
    <>
      <Script
        defer
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_ANALYTICS_ID}`}
        strategy="afterInteractive"
      />
      <Script
        defer
        id="ga-init"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());    
          gtag('config', '${process.env.GOOGLE_ANALYTICS_MEASUREMENT_ID}');
        `,
        }}
        strategy="afterInteractive"
      />
    </>
  );
};
