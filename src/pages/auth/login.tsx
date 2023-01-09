import type { GetStaticProps } from "next";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { MainLayout } from "@/components/Layout";
import { LoginContainer } from "@/features/auth";
import { NextPageWithLayout } from "@/types";

const LoginPage: NextPageWithLayout = () => {
  return <LoginContainer />;
};

LoginPage.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export const getStaticProps: GetStaticProps = async ({ locale = "ro" }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default LoginPage;
