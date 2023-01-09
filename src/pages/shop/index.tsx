import type { NextPageWithLayout } from "@/types";
import type { GetStaticProps } from "next";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { MainLayout } from "@/components/Layout";
import { ShopContainer } from "@/containers";

const ShopPage: NextPageWithLayout = () => {
  return <ShopContainer />;
};

ShopPage.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export const getStaticProps: GetStaticProps = async ({ locale = "ro" }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default ShopPage;
