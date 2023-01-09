import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link, { LinkProps } from "next/link";
import { useRef } from "react";
import { useIntersectionObserver } from "usehooks-ts";

import { clsx } from "@/utils";

export interface CircleButtonProps extends LinkProps {
  children: React.ReactNode;

  className?: string;
}

export const CircleButton: React.FC<CircleButtonProps> = ({ className, children, ...rest }) => {
  const ref = useRef<HTMLAnchorElement>(null);

  const entry = useIntersectionObserver(ref, { freezeOnceVisible: true, threshold: 0.5 });
  const isOnScreen = !!entry?.isIntersecting;

  return (
    <Link
      ref={ref}
      className={clsx("circle-button", isOnScreen && "on-screen", className)}
      {...rest}
    >
      <div className="circe-button__content">
        <span className="circle-button__text">{children}</span>
        <span className="circle-button__icon">
          <ArrowRightIcon />
        </span>
      </div>
    </Link>
  );
};
