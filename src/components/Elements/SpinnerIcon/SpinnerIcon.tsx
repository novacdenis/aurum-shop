import { clsx } from "@/utils";

export interface SpinnerIconProps extends React.SVGProps<SVGSVGElement> {}

export const SpinnerIcon: React.FC<SpinnerIconProps> = ({ className, ...rest }) => {
  return (
    <svg
      style={{
        boxSizing: "content-box",
      }}
      width="32"
      height="32"
      viewBox="0 0 16 16"
      fill="none"
      data-view-component="true"
      className={clsx("animate-spin", className)}
      {...rest}
    >
      <circle
        cx="8"
        cy="8"
        r="7"
        stroke="currentColor"
        strokeOpacity="0.25"
        strokeWidth="2"
        vectorEffect="non-scaling-stroke"
      />
      <path
        d="M15 8a7.002 7.002 0 00-7-7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
};
