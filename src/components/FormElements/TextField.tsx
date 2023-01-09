import { clsx } from "@/utils";

export interface TextFieldProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  size?: "sm" | "md" | "lg";
}

export const TextField: React.FC<TextFieldProps> = ({
  className,
  type = "text",
  size = "md",
  ...rest
}) => {
  return <input type={type} className={clsx("text-field", `size-${size}`, className)} {...rest} />;
};
