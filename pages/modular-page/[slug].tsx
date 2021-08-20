/* eslint-disable indent,no-underscore-dangle */
import { QueryListenerOptions, SeoMetaTagType, useQuerySubscription } from 'react-datocms';
import { GetStaticPaths, GetStaticProps } from 'next';
import { ProductJsonLd } from 'next-seo';
import { useEffect, useMemo } from 'react';
import { Layout } from '@/components/Layout';

type ModularPageSlug = {
  slug: string;
};

type AllModularPagesType = {
  allModularPages?: Array<ModularPageSlug>;
};

type ModularPageProps = {
  subscription: QueryListenerOptions<any, any>;
  // preview?: boolean;
};

export default function ModularPage({
  subscription
}: // preview = false
ModularPageProps): JSX.Element {
  const {
    data: { site, page }
  } = useQuerySubscription(subscription);

  return (
    <Layout>

    </Layout>
  );
}


export const getStaticProps: GetStaticProps = async ({ locale, params, preview = false }) => {

  return {
    props: {
    }
  };
};
