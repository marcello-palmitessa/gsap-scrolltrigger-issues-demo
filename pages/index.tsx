/* eslint-disable indent,no-underscore-dangle */
import {GetStaticProps} from 'next';
import {QueryListenerOptions, useQuerySubscription} from 'react-datocms';
import {Layout} from '@/components/Layout';
import {Article} from "@/components/Article";
import {ArticleWithScrollTrigger} from "@/components/ArticleWithScrollTrigger";


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
        <ArticleWithScrollTrigger/>
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
