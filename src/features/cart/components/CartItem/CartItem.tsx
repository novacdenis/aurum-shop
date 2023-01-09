import type { CartItemType } from "../../types";

import { ShoppingCartIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { Children } from "react";

import { Button } from "@/components/Elements";
import { useCurrentLocale } from "@/hooks";
import { asPrice } from "@/utils";

import { removeFromCart } from "../../api";

export interface CartItemProps {
  data: CartItemType;
}

export const CartItem: React.FC<CartItemProps> = ({ data }) => {
  const { showVersion } = useCurrentLocale();

  const { id, quantity, product, variant } = data;

  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation({
    mutationFn: removeFromCart,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });

  return (
    <div className="cart__item">
      <div className="cart__item-image">
        <img
          src={product.uploaded_images[0].url}
          alt={showVersion({ ru: product.name_ru, ro: product.name_ro })}
        />
      </div>
      <div className="cart__item-body">
        <div className="cart__item-caption">
          <h4 className="cart__item-category">{product.category_id}</h4>
          <h3 className="cart__item-name">
            {showVersion({ ru: product.name_ru, ro: product.name_ro })}
          </h3>
        </div>
        <div className="cart__item-price">
          {asPrice(Number(variant.price) * quantity)} (x {quantity})
        </div>
        <div className="cart__item-actions">
          <Button
            variant="text"
            loading={isLoading}
            icon
            onClick={() => mutate({ cartItemId: id, quantity })}
          >
            <XMarkIcon />
          </Button>
        </div>
      </div>
    </div>
  );
};

export interface CartItemsListProps {
  children: React.ReactNode;

  loading?: boolean;
}

export const CartItemsList: React.FC<CartItemsListProps> = ({ loading, children }) => {
  const { t } = useTranslation();

  if (loading) {
    return (
      <div className="cart__items animate-pulse">
        {Array.from(Array(3)).map((_, index) => (
          <div key={index} className="cart__item">
            <div className="cart__item-image h-20 w-20 bg-zinc-300" />
            <div className="cart__item-body">
              <div className="cart__item-caption">
                <h4 className="cart__item-category mb-1 h-5 w-20 rounded-sm bg-zinc-300" />
                <h3 className="cart__item-name h-6 w-40 rounded-sm bg-zinc-300" />
              </div>
              <div className="cart__item-price h-7 w-28 rounded-sm bg-zinc-300" />
            </div>
            <div className="cart__item-actions" />
          </div>
        ))}
      </div>
    );
  }

  if (Children.count(children) === 0) {
    return (
      <div className="cart__empty">
        <div className="cart__empty-icon">
          <ShoppingCartIcon />
        </div>
        <div className="cart__empty-text">{t("cart:your_cart_is_empty")}</div>
        <div className="cart__empty-action">
          <Link href="/shop">
            <Button>{t("cart:continue_shopping")}</Button>
          </Link>
        </div>
      </div>
    );
  }

  return <div className="cart__items">{children}</div>;
};
