// lib/gtag.ts
export const GA_MEASUREMENT_ID = 'G-7FJ28ZD47X'; // your GA ID

export const pageview = (url: string) => {
  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: url,
  });
};
