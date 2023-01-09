import type { ProductAttributeType, ProductVariantType } from "../../types";

import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useCallback } from "react";
import toast from "react-hot-toast";
import { useEffectOnce } from "usehooks-ts";

import {
  Dropdown,
  DropdownMenu,
  DropdownMenuArrow,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownTrigger,
} from "@/components/Elements";

import { useProductViewStore } from "../../stores";
import { findVariantByAttributes } from "../../utils";

export interface ProductViewAttributesProps {
  variants?: ProductVariantType[];
  attributes?: ProductAttributeType[];
}

const ProductViewAttributes: React.FC<ProductViewAttributesProps> = ({
  variants = [],
  attributes = [],
}) => {
  const selectedAttributes = useProductViewStore((store) => store.selectedAttributes);

  const setSelectedVariantId = useProductViewStore((store) => store.setSelectedVariantId);
  const setSelectedAttributes = useProductViewStore((store) => store.setSelectedAttributes);

  const onChangeAttributeValue = useCallback(
    (attributeId: number, value: number) => {
      toast.dismiss();

      const newSelectedAttributes = {
        ...selectedAttributes,
        [attributeId]: value,
      };

      setSelectedAttributes(newSelectedAttributes);
      setSelectedVariantId(findVariantByAttributes(variants, newSelectedAttributes)?.id);
    },
    [selectedAttributes, setSelectedAttributes, setSelectedVariantId, variants]
  );

  useEffectOnce(() => {
    const initialAttributes = attributes.reduce<Record<number, number>>((acc, attribute) => {
      acc[attribute.attribute_id] = attribute.attribute_values_options[0].value;

      return acc;
    }, {});

    setSelectedAttributes(initialAttributes);
    setSelectedVariantId(findVariantByAttributes(variants || [], initialAttributes)?.id);
  });

  return (
    <>
      {attributes.map(({ attribute_id, attribute_values_options }) => (
        <div key={attribute_id} className="product-view__attribute">
          {/* TODO: add name to attributes */}
          <label className="product-view__attribute-label">Размер</label>
          <Dropdown>
            <DropdownTrigger className="product-view__attribute-value">
              <span>
                {
                  attribute_values_options.find(
                    (option) => option.value === selectedAttributes[attribute_id]
                  )?.label
                }
              </span>
              <span>
                <ChevronDownIcon className="h-4 w-4" />
              </span>
            </DropdownTrigger>
            <DropdownMenu align="end">
              <DropdownMenuRadioGroup
                value={selectedAttributes[attribute_id]?.toString()}
                onValueChange={(value) => onChangeAttributeValue(attribute_id, parseInt(value))}
              >
                {attribute_values_options.map((option) => (
                  <DropdownMenuRadioItem key={option.value} value={option.value.toString()}>
                    {option.label}
                  </DropdownMenuRadioItem>
                ))}
              </DropdownMenuRadioGroup>
              <DropdownMenuArrow />
            </DropdownMenu>
          </Dropdown>
        </div>
      ))}
    </>
  );
};

export default ProductViewAttributes;
