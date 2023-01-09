import type { NextPageWithLayout } from "@/types";
import type { GetStaticPaths, GetStaticProps } from "next";
import type { ParsedUrlQuery } from "querystring";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { MainLayout } from "@/components/Layout";
import { ProductType } from "@/features/product";
import { ProductContainer } from "@/features/product";

interface ShopProductPageProps {
  initialProductData: ProductType;
}

const ShopProductPage: NextPageWithLayout<ShopProductPageProps> = ({ initialProductData }) => {
  return <ProductContainer initialProductData={initialProductData} />;
};

ShopProductPage.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export const getStaticProps: GetStaticProps = async ({ locale = "ro", params }) => {
  const { slug } = params as ParsedUrlQuery & { slug: string };

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${locale}/${slug}`, {
    headers: {
      Accept: "application/json",
    },
  });
  const product = (await response.json()) as ProductType;

  if (!product) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      initialProductData: product,
      ...(await serverSideTranslations(locale, ["common", "cart"])),
    },
    revalidate: 60,
  };
};

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: [],
  fallback: "blocking",
});

export default ShopProductPage;
