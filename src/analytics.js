const measurementId = process.env.REACT_APP_GA_MEASUREMENT_ID;

let analyticsInitialized = false;

export const initializeAnalytics = () => {
  if (
    analyticsInitialized ||
    !measurementId ||
    typeof window === 'undefined' ||
    typeof document === 'undefined'
  ) {
    return;
  }

  analyticsInitialized = true;
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function gtag() {
    window.dataLayer.push(arguments);
  };

  window.gtag('js', new Date());
  window.gtag('config', measurementId);

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
  script.dataset.ga4 = measurementId;
  document.head.appendChild(script);
};

export const trackAnalyticsEvent = (eventName, parameters = {}) => {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', eventName, parameters);
  }
};
