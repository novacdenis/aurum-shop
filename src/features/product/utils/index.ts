import type { ProductVariantAttributeType, ProductVariantType } from "../types";

export const generateVariantAttributesUid = (attributes: ProductVariantAttributeType[]) => {
  return attributes
    .map((attribute) => `${attribute.attribute_id}${attribute.attribute_value_id}`)
    .join("");
};

export const findVariantByAttributes = (
  variants: ProductVariantType[],
  attributes: { [key: number]: number }
) => {
  const attributesUid = Object.entries(attributes)
    .map((entry) => entry.join(""))
    .join("");

  return variants.find((variant) => {
    if (variant.attributes_uid) {
      return variant.attributes_uid === attributesUid;
    }

    return generateVariantAttributesUid(variant.attributes) === attributesUid;
  });
};
