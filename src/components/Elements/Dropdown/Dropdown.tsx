import type {
  DropdownMenuProps,
  DropdownMenuTriggerProps,
  DropdownMenuContentProps,
  MenuItemProps,
  MenuSeparatorProps,
  DropdownMenuRadioGroupProps,
  DropdownMenuRadioItemProps,
  DropdownMenuArrowProps,
} from "@radix-ui/react-dropdown-menu";

import { CheckIcon } from "@heroicons/react/24/outline";
import {
  Root,
  Trigger,
  Portal,
  Content,
  Arrow,
  Item,
  Separator,
  RadioGroup,
  RadioItem,
  ItemIndicator,
} from "@radix-ui/react-dropdown-menu";

export const Dropdown: React.FC<DropdownMenuProps> = ({ children, ...rest }) => {
  return <Root {...rest}>{children}</Root>;
};

export const DropdownTrigger: React.FC<DropdownMenuTriggerProps> = ({ children, ...rest }) => {
  return (
    <Trigger className="dropdown__trigger" {...rest}>
      {children}
    </Trigger>
  );
};

export const DropdownMenu: React.FC<DropdownMenuContentProps> = ({ children, ...rest }) => {
  return (
    <Portal className="dropdown__portal">
      <Content className="dropdown__content" sideOffset={5} {...rest}>
        {children}
      </Content>
    </Portal>
  );
};

export const DropdownMenuItem: React.FC<MenuItemProps> = ({ children, ...rest }) => {
  return (
    <Item className="dropdown__item" {...rest}>
      {children}
    </Item>
  );
};

export const DropdownMenuRadioGroup: React.FC<DropdownMenuRadioGroupProps> = ({
  children,
  ...rest
}) => {
  return (
    <RadioGroup className="dropdown__radio-group" {...rest}>
      {children}
    </RadioGroup>
  );
};

export const DropdownMenuRadioItem: React.FC<DropdownMenuRadioItemProps> = ({
  children,
  ...rest
}) => {
  return (
    <RadioItem className="dropdown__item dropdown__radio-item" {...rest}>
      <ItemIndicator className="dropdown__radio-item-indicator">
        <CheckIcon className="h-4 w-4" />
      </ItemIndicator>
      {children}
    </RadioItem>
  );
};

export const DropdownMenuSeparator: React.FC<MenuSeparatorProps> = ({ children, ...rest }) => {
  return (
    <Separator className="dropdown__separator" {...rest}>
      {children}
    </Separator>
  );
};

export const DropdownMenuArrow: React.FC<DropdownMenuArrowProps> = ({ children, ...rest }) => {
  return (
    <Arrow className="dropdown__arrow" {...rest}>
      {children}
    </Arrow>
  );
};
