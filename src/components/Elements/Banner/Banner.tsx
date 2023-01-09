import { clsx } from "@/utils";

export interface BannerProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

export const Banner: React.FC<BannerProps> = ({ className, children, ...rest }) => {
  return (
    <section className={clsx("banner", className)} {...rest}>
      {children}
    </section>
  );
};

export interface BannerTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

export const BannerTitle: React.FC<BannerTitleProps> = ({ className, children, ...rest }) => {
  return (
    <h2 className={clsx("banner__title", className)} {...rest}>
      {children}
    </h2>
  );
};

export interface BannerParagraphProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
}

export const BannerParagraph: React.FC<BannerParagraphProps> = ({
  className,
  children,
  ...rest
}) => {
  return (
    <p className={clsx("banner__paragraph", className)} {...rest}>
      {children}
    </p>
  );
};
