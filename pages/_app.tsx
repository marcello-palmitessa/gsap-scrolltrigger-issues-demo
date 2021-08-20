import {AppProps, NextWebVitalsMetric} from 'next/app';
import {SSRProvider} from '@react-aria/ssr';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger';
import '../styles/app.scss';

// globally register for gsap ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function App({Component, pageProps, router}: AppProps): JSX.Element {


  // eslint-disable-next-line react/jsx-props-no-spreading
  return (
    <SSRProvider>
      <Component {...pageProps} key={router.route}/>
    </SSRProvider>
  );
}

/**
 * Report WebVitals metrics
 * @param metric
 */
export function reportWebVitals(metric: NextWebVitalsMetric) {
  if (metric.label === 'web-vital') {
    // eslint-disable-next-line no-console
    // console.log(metric);
    // send metric to Google Analytics
    // see: https://github.com/GoogleChrome/web-vitals#send-the-results-to-google-analytics
    //
    // // Use `window.gtag` if you initialized Google Analytics as this example:
    // // https://github.com/vercel/next.js/blob/canary/examples/with-google-analytics/pages/_document.js
    // window.gtag('event', name, {
    //   event_category:
    //     label === 'web-vital' ? 'Web Vitals' : 'Next.js custom metric',
    //   value: Math.round(name === 'CLS' ? value * 1000 : value), // values must be integers
    //   event_label: id, // id unique to current page load
    //   non_interaction: true, // avoids affecting bounce rate.
    // })
  }
}

export default App;
