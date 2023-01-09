import type { ProductVariantType } from "../../types";

import { HeartIcon, MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";

import { Button } from "@/components/Elements";
import { useAuth } from "@/features/auth";
import { addToCart } from "@/features/cart";
import { getApiErrorMessage } from "@/utils";

export interface ProductViewActionsProps {
  productId?: number;
  variant?: ProductVariantType;
}

const ProductViewActions: React.FC<ProductViewActionsProps> = ({ productId, variant }) => {
  const { t } = useTranslation();
  const { isAuthorized } = useAuth();

  const router = useRouter();

  const [quantity, setQuantity] = useState(1);
  const [isBuyLoading, setIsBuyLoading] = useState(false);

  const onBuyHandler = useCallback(async () => {
    setIsBuyLoading(true);

    if (!isAuthorized) {
      return await router.push({ pathname: "/auth/login", query: { redirect: router.asPath } });
    }

    toast.dismiss();

    try {
      await addToCart(productId!, variant!.id, quantity);

      toast.success(
        <span>
          {t("cart:successfully_added")}.{" "}
          <Link href="/cart" className="underline">
            {t("cart:go_to_cart")}
          </Link>
        </span>,
        { duration: 5000 }
      );
    } catch (error) {
      toast.error(getApiErrorMessage(error) ?? t("cart:could_not_add"));
    } finally {
      setIsBuyLoading(false);
      setQuantity(1);
    }
  }, [isAuthorized, productId, quantity, router, t, variant]);

  useEffect(() => {
    return () => {
      toast.dismiss();
    };
  }, []);

  if (variant && variant.stock < 1) {
    return (
      <div className="product__actions">
        <h3 className="text-lg font-semibold leading-10">
          Извините, данной опции временно нет в наличии
        </h3>
      </div>
    );
  }

  return (
    <>
      <div className="product-view__actions-quantity">
        <Button
          variant="outlined"
          icon
          disabled={!variant || quantity <= 1}
          onClick={() => setQuantity((prev) => prev - 1)}
        >
          <MinusIcon />
        </Button>
        <input type="text" className="" readOnly disabled={!variant} value={quantity} />
        <Button
          variant="outlined"
          icon
          disabled={!variant || quantity >= (variant?.stock ?? 1)}
          onClick={() => setQuantity((prev) => prev + 1)}
        >
          <PlusIcon />
        </Button>
      </div>
      <div className="product-view__actions-row">
        <Button
          className="product-view__actions-buy"
          loading={isBuyLoading}
          disabled={!productId || !variant}
          onClick={onBuyHandler}
        >
          {t("buy")}
        </Button>

        <Button variant="outlined" icon disabled={!productId || !variant}>
          <HeartIcon />
        </Button>
      </div>
    </>
  );
};

export default ProductViewActions;
