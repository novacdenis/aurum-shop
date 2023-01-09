import { Form, FormikProvider, useFormik } from "formik";
import { useState } from "react";
import { z } from "zod";

import { Button, Section } from "@/components/Elements";
import { useFormValidationErrors } from "@/hooks";
import { toFormikValidationSchema } from "@/utils";

import { Fields, Products } from "./parts";
import { useTranslation } from "next-i18next";

const validationSchema = z.object({
  first_name: z.string().min(2).max(50),
  last_name: z.string().min(2).max(50),
  country: z.string().min(2).max(50),
  street: z.string().min(2).max(50),
  city: z.string().min(2).max(50),
  zip: z.string().min(2).max(50),
  phone: z.string().min(2).max(50),
  email: z.string().email(),
  comments: z.string().optional(),
});

const initialValues: z.infer<typeof validationSchema> = {
  first_name: "",
  last_name: "",
  country: "",
  street: "",
  city: "",
  zip: "",
  phone: "",
  email: "",
  comments: "",
};

const CheckoutContainer: React.FC = () => {
  const { t } = useTranslation();

  const [loading, setLoading] = useState(false);

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
      <Section className="checkout">
        <Form>
          <div className="checkout__container">
            <div className="checkout__fields">
              <h5 className="checkout__section-title">{t("cart:payment_details")}</h5>
              <Fields />
            </div>
            <div className="checkout__details">
              <h5 className="checkout__section-title">{t("products")}</h5>
              <Products />
              <Button type="submit" className="ml-auto mt-8 max-w-xs">
                {t("cart:checkout")}
              </Button>
            </div>
          </div>
        </Form>
      </Section>
    </FormikProvider>
  );
};

export default CheckoutContainer;
