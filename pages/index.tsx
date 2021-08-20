/* eslint-disable indent,no-underscore-dangle */
import {GetStaticProps} from 'next';
import {QueryListenerOptions, useQuerySubscription} from 'react-datocms';
import {Layout} from '@/components/Layout';
import {Article} from "@/components/Article";


export type HomeProps = {
  subscription: QueryListenerOptions<any, any>;
};

export default function Home({subscription}: HomeProps): JSX.Element {

  return (
    <>
      <Layout>
        <Article/>
        <Article/>
        <Article/>
        <Article/>
      </Layout>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({locale, preview}) => {

  return {
    props: {}
  };
};
