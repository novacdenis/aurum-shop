import { useTranslation } from "next-i18next";

import { FormController, TextField } from "@/components/FormElements";

export const Fields: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="mb-6 flex flex-col md:flex-row md:space-x-6">
        <FormController className="mb-6 flex-1 md:mb-0" name="first_name">
          <TextField placeholder={t("first_name") ?? ""} />
        </FormController>
        <FormController className="mb-0 flex-1" name="last_name">
          <TextField placeholder={t("last_name") ?? ""} />
        </FormController>
      </div>
      <FormController name="country">
        <TextField placeholder={t("country_region") ?? ""} />
      </FormController>
      <FormController name="street">
        <TextField placeholder={t("street") ?? ""} />
      </FormController>
      <FormController name="city">
        <TextField placeholder={t("city") ?? ""} />
      </FormController>
      <div className="mb-6 flex flex-col md:flex-row md:space-x-6">
        <FormController className="mb-6 flex-1 md:mb-0" name="zip">
          <TextField placeholder={t("zip") ?? ""} />
        </FormController>
        <FormController className="mb-0 flex-1" name="phone">
          <TextField inputMode="tel" placeholder={t("phone") ?? ""} />
        </FormController>
      </div>
      <FormController name="email">
        <TextField type="email" inputMode="email" placeholder={t("email") ?? ""} />
      </FormController>
      <FormController name="comments">
        <TextField placeholder={t("comments") ?? ""} />
      </FormController>
    </>
  );
};
