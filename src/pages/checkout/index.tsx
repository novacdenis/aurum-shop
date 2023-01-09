import type { NextPageWithLayout } from "@/types";
import type { GetStaticProps } from "next";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { MainLayout } from "@/components/Layout";
import { CheckoutContainer } from "@/containers";

const CheckoutPage: NextPageWithLayout = () => {
  return <CheckoutContainer />;
};

CheckoutPage.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export const getStaticProps: GetStaticProps = async ({ locale = "ro" }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "cart"])),
  },
});

export default CheckoutPage;
