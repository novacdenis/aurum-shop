import type { CheckboxProps as CheckboxRootProps } from "@radix-ui/react-checkbox";

import { CheckIcon } from "@heroicons/react/24/outline";
import { Root, Indicator } from "@radix-ui/react-checkbox";

import { clsx } from "@/utils";

import { Show } from "../Show";

export interface CheckboxProps extends CheckboxRootProps {}

export const Checkbox: React.FC<CheckboxProps> = ({ className, name, children, ...rest }) => {
  return (
    <div className={clsx("checkbox", className)}>
      <Root id={name} className="checkbox__root" name={name} {...rest}>
        <Indicator className="checkbox__indicator">
          <CheckIcon />
        </Indicator>
      </Root>
      <Show when={children}>
        <label className="checkbox__label" htmlFor={name}>
          {children}
        </label>
      </Show>
    </div>
  );
};
