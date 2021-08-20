import { AppProps, NextWebVitalsMetric } from 'next/app';
import { PageTransition } from 'next-page-transitions';
import { SSRProvider } from '@react-aria/ssr';
import { PageProvider, PageState } from '@/components/PageProvider';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import '../styles/app.scss';
import '../styles/fonts.css';

// globally register for gsap ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function App({ Component, pageProps, router }: AppProps): JSX.Element {
  const log = [
    {
      nodeEnv: process.env.NODE_ENV,
      environment: process.env.NEXT_PUBLIC_DATOCMS_ENVIRONMENT
    }
  ];

  // eslint-disable-next-line no-console
  console.table(log);

  const { initialData } = pageProps.subscription;

  /**
   * Set the initial state of the page putting in the PageStateContext all the shared data
   */
  const { menu, footerMenu, socialLinks, allModularPages, allLabels, header, footer } = initialData;
  const initialPageState: PageState = {
    menu,
    footerMenu,
    socialLinks,
    allModularPages,
    allLabels,
    header,
    footer
  };

  // eslint-disable-next-line react/jsx-props-no-spreading
  return (
    <SSRProvider>
      <PageProvider initialState={initialPageState}>
        <PageTransition timeout={500} classNames="page-transition">
          <Component {...pageProps} key={router.route} />
        </PageTransition>
      </PageProvider>
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
