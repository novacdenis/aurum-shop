export const clsx = (...classes: (string | number | boolean | null | undefined)[]) => {
  return classes.filter(Boolean).join(" ");
};
