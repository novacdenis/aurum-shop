import type {
  AccordionSingleProps,
  AccordionMultipleProps,
  AccordionItemProps,
  AccordionContentProps,
  AccordionTriggerProps,
} from "@radix-ui/react-accordion";

import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { Root, Trigger, Item, Header, Content } from "@radix-ui/react-accordion";

import { clsx } from "@/utils";

export const Accordion: React.FC<AccordionSingleProps | AccordionMultipleProps> = ({
  className,
  children,
  ...rest
}) => {
  return (
    <Root className={clsx("accordion", className)} {...rest}>
      {children}
    </Root>
  );
};

export const AccordionItem: React.FC<AccordionItemProps> = ({ className, children, ...rest }) => {
  return (
    <Item className={clsx("accordion__item", className)} {...rest}>
      {children}
    </Item>
  );
};

export const AccordionItemHeader: React.FC<AccordionTriggerProps> = ({
  className,
  children,
  ...rest
}) => {
  return (
    <Header className="accordion__item-header">
      <Trigger className={clsx("accordion__item-trigger", className)} {...rest}>
        {children}
        <span className="accordion__item-chevron">
          <ChevronDownIcon className="h-5 w-5" />
        </span>
      </Trigger>
    </Header>
  );
};

export const AccordionItemContent: React.FC<AccordionContentProps> = ({
  className,
  children,
  ...rest
}) => {
  return (
    <Content className={clsx("accordion__item-content", className)} {...rest}>
      {children}
    </Content>
  );
};
