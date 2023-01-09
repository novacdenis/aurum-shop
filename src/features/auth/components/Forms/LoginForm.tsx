import { Form, FormikProvider, useFormik } from "formik";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { useState } from "react";
import { z } from "zod";

import { Button } from "@/components/Elements";
import { Checkbox, FormController, TextField } from "@/components/FormElements";
import { useFormValidationErrors } from "@/hooks";
import { toFormikValidationSchema } from "@/utils";

import { login } from "../../api";
import { useAuth } from "../../providers";

const validationSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8).max(50),
  remember_me: z.boolean(),
});

const initialValues: z.infer<typeof validationSchema> = {
  email: "",
  password: "",
  remember_me: false,
};

export const LoginForm: React.FC = () => {
  const { t } = useTranslation();
  const { setAuthorized } = useAuth();
  const { replace, query } = useRouter();

  const [loading, setLoading] = useState(false);

  const onSubmit = async (values: z.infer<typeof validationSchema>) => {
    setLoading(true);

    try {
      const response = await login(values);
      setAuthorized(response.user, response.token);

      if (query.redirect) await replace(query.redirect as string);
      else await replace("/"); // TODO: Redirect to account page
    } catch (error) {
      setValidationErrors(error);
      setLoading(false);
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
      <Form>
        <FormController name="email">
          <TextField type="email" inputMode="email" placeholder={t("email") ?? ""} />
        </FormController>
        <FormController name="password">
          <TextField type="password" placeholder={t("password") ?? ""} />
        </FormController>
        <FormController name="remember_me" valuePropName="checked">
          <Checkbox onCheckedChange={(checked) => formik.setFieldValue("remember_me", checked)}>
            {t("remember_me")}
          </Checkbox>
        </FormController>

        <div className="flex items-center justify-center">
          <Button className="max-w-xs" type="submit" loading={loading}>
            {t("login")}
          </Button>
        </div>
      </Form>
    </FormikProvider>
  );
};
