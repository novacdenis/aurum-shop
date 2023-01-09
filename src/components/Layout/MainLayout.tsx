import { useTranslation } from "next-i18next";
import Head from "next/head";

import { Section, SectionHeader, SectionSubtitle, SectionTitle } from "../Elements";
import { Footer } from "../Footer";
import { FeedbackForm } from "../Forms";
import { Header, HeaderProps } from "../Header";

export interface MainLayoutProps {
  children: React.ReactNode;

  pageTitle?: string;
  headerProps?: HeaderProps;
}

export const MainLayout: React.FC<MainLayoutProps> = ({
  pageTitle,
  headerProps = {},
  children,
}) => {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{pageTitle ? `Aurum - ${pageTitle}` : "Aurum"}</title>
      </Head>
      <Header {...headerProps} />
      {children}
      <Section>
        <SectionHeader align="center">
          <SectionSubtitle>{t("any_questions")}</SectionSubtitle>
          <SectionTitle>{t("contact_us")}</SectionTitle>
        </SectionHeader>
        <FeedbackForm />
      </Section>
      <Footer />
    </>
  );
};
