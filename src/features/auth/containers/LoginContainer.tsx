import { useTranslation } from "next-i18next";
import Link from "next/link";

import { Section } from "@/components/Elements";

import { LoginForm } from "../components/Forms";

const LoginContainer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Section>
      <div className="mx-auto max-w-screen-sm">
        <div className="mb-10 text-center uppercase">
          <h3 className="mb-7 text-base tracking-widest">{t("login_to_account")}</h3>
          <h5 className="mb-2 text-sm text-aurum-gray">{t("no_account")}</h5>
          <Link href="/auth/register" className="text-sm underline">
            {t("register")}
          </Link>
        </div>

        <LoginForm />

        <div className="mt-6 text-center">
          <Link href="/auth/restore">{t("forgot_password")}</Link>
        </div>
      </div>
    </Section>
  );
};

export default LoginContainer;
