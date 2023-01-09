import { useRef } from "react";
import { CSSTransition } from "react-transition-group";

import { clsx } from "@/utils";

import { SpinnerIcon } from "../SpinnerIcon";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "contained" | "outlined" | "text";
  loading?: boolean;
  icon?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  className,
  type = "button",
  variant = "contained",
  icon = false,
  loading = false,
  disabled = false,
  children,
  ...rest
}) => {
  const loadingNodeRef = useRef<HTMLSpanElement>(null);

  return (
    <button
      className={clsx(
        "button",
        `variant-${variant}`,
        icon && "is-icon-only",
        loading && "is-loading",
        className
      )}
      disabled={disabled || loading}
      type={type}
      {...rest}
    >
      <span className="button__content">{children}</span>
      <CSSTransition nodeRef={loadingNodeRef} in={loading} timeout={150} mountOnEnter>
        <span className="button__loading" ref={loadingNodeRef}>
          <SpinnerIcon />
        </span>
      </CSSTransition>
    </button>
  );
};
