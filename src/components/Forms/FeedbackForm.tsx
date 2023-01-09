import { Form, FormikProvider, useFormik } from "formik";
import { useTranslation } from "next-i18next";
import { z } from "zod";

import { useFormValidationErrors } from "@/hooks";
import { toFormikValidationSchema } from "@/utils";

import { SectionButton } from "../Elements";
import { FormController, TextField } from "../FormElements";

const validationSchema = z.object({
  name: z.string().min(3).max(50).optional(),
  email: z.string().email(),
  message: z.string().min(10).max(500),
  global_errors: z.string().optional(),
});

const initialValues: z.infer<typeof validationSchema> = {
  name: "",
  email: "",
  message: "",
  global_errors: "",
};

export const FeedbackForm: React.FC = () => {
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
      <Form className="feedback-form">
        <div className="mb-10 flex flex-col space-y-5 sm:flex-row sm:space-y-0 sm:space-x-20">
          <FormController className="mb-0 flex-1" name="name">
            <TextField size="lg" placeholder={t("fullname") ?? ""} />
          </FormController>
          <FormController className="flex-1" name="email">
            <TextField size="lg" type="email" inputMode="email" placeholder={t("email") ?? ""} />
          </FormController>
        </div>
        <FormController name="message">
          <TextField size="lg" placeholder={t("message") ?? ""} />
        </FormController>

        <div className="mt-8 flex items-center justify-center md:mt-16">
          <SectionButton type="submit">{t("send")}</SectionButton>
        </div>
      </Form>
    </FormikProvider>
  );
};
