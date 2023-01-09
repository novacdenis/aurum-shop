import { useField } from "formik";
import { Children, cloneElement } from "react";

import { clsx } from "@/utils";

import { Show } from "../Show";

export interface FormControllerProps extends React.HTMLAttributes<HTMLFieldSetElement> {
  name: string;
  children: React.ReactNode;

  label?: string;
  valuePropName?: string;
}

export const FormController: React.FC<FormControllerProps> = ({
  name,
  label,
  valuePropName = "value",
  className,
  children,
  ...rest
}) => {
  const [{ value, ...filedProps }, meta] = useField(name);

  return (
    <fieldset className={clsx("form-controller", className)} {...rest}>
      <Show when={label}>
        <label htmlFor={name}>{label}</label>
      </Show>

      {Children.map(children, (child) =>
        cloneElement(child as React.ReactElement, {
          ...filedProps,
          [valuePropName]: value,
        })
      )}

      <Show when={meta.touched && meta.error}>
        <div className="form-controller__error">{meta.error}</div>
      </Show>
    </fieldset>
  );
};
