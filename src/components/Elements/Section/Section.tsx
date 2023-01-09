import { clsx } from "@/utils";

export interface SectionProps extends React.HtmlHTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ className, children, ...props }) => {
  return (
    <section className={clsx("section", className)} {...props}>
      <div className="section__content">{children}</div>
    </section>
  );
};

export interface SectionHeaderProps extends React.HtmlHTMLAttributes<HTMLElement> {
  children: React.ReactNode;

  align?: "left" | "center" | "right";
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  className,
  align = "left",
  children,
  ...props
}) => {
  return (
    <header className={clsx("section__header", `align-${align}`, className)} {...props}>
      {children}
    </header>
  );
};

export interface SectionTitleProps extends React.HtmlHTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;

  align?: "left" | "center" | "right";
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ className, children, ...props }) => {
  return (
    <h2 className={clsx("section__title", className)} {...props}>
      {children}
    </h2>
  );
};

export interface SectionSubtitleProps extends React.HtmlHTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

export const SectionSubtitle: React.FC<SectionSubtitleProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <h3 className={clsx("section__subtitle", className)} {...props}>
      {children}
    </h3>
  );
};

export interface SectionParagraphProps extends React.HtmlHTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
}

export const SectionParagraph: React.FC<SectionParagraphProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <p className={clsx("section__paragraph", className)} {...props}>
      {children}
    </p>
  );
};

export interface SectionButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const SectionButton: React.FC<SectionButton> = ({ className, children, ...props }) => {
  return (
    <button className={clsx("section__button", className)} {...props}>
      {children}
    </button>
  );
};
