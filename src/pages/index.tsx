import type { NextPageWithLayout } from "@/types";
import type { GetStaticProps } from "next";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { MainLayout } from "@/components/Layout";
import { HomeContainer } from "@/containers";

const HomePage: NextPageWithLayout = () => {
  return <HomeContainer />;
};

HomePage.getLayout = (page) => <MainLayout headerProps={{ transparent: true }}>{page}</MainLayout>;

export const getStaticProps: GetStaticProps = async ({ locale = "ro" }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default HomePage;
