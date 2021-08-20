import React from 'react';
import Head from 'next/head';
// import { Header } from './Header/Header';
// import { Footer } from './Footer/Footer';

type LayoutProps = {
  preview?: boolean;
  children?: React.ReactNode;
};

export const Layout = ({ preview = false, children }: LayoutProps): JSX.Element => {

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#000000" />
      </Head>


      {/*<Header />*/}

      <main id="main" role="main">
        {children}
      </main>

      {/*<Footer />*/}
    </>
  );
};
