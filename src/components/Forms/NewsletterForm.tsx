import { Form, FormikProvider, useFormik } from "formik";
import { useTranslation } from "next-i18next";
import { z } from "zod";

import { useFormValidationErrors } from "@/hooks";
import { toFormikValidationSchema } from "@/utils";

import { SectionButton } from "../Elements";
import { FormController, TextField } from "../FormElements";

const validationSchema = z.object({
  global_errors: z.string().optional(),
});

const initialValues: z.infer<typeof validationSchema> = {
  global_errors: "",
};

export const NewsletterForm: React.FC = () => {
  const { t } = useTranslation();

  const onSubmit = (values: z.infer<typeof validationSchema>) => {
    try {
      console.log(values);
    } catch (error) {
      setValidationErrors(error);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema: toFormikValidationSchema(validationSchema),
    onSubmit,
  });

  const { setValidationErrors } = useFormValidationErrors(formik);

  return (
    <FormikProvider value={formik}>
      <Form className="newsletter-form">
        <FormController name="email">
          <TextField size="lg" type="email" inputMode="email" placeholder={t("email") ?? ""} />
        </FormController>

        <div className="mt-8 flex items-center justify-center md:mt-16">
          <SectionButton type="submit">{t("send")}</SectionButton>
        </div>
      </Form>
    </FormikProvider>
  );
};
