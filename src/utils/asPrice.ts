const formatter = new Intl.NumberFormat("ro-MD", {
  style: "currency",
  currency: "MDL",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export const asPrice = (value?: number) => {
  if (value) return formatter.format(value);

  return "00.00 L";
};
