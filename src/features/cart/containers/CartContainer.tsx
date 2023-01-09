import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "next-i18next";
import Link from "next/link";

import { Button, Section, SectionHeader, SectionTitle } from "@/components/Elements";
import { useAuth, useProtectedRoute } from "@/features/auth";
import { asPrice } from "@/utils";

import { getCart } from "../api";
import { CartItem, CartItemsList } from "../components";

const CartContainer: React.FC = () => {
  useProtectedRoute({ shouldRedirectBack: true });

  const { t } = useTranslation();
  const { isAuthorized } = useAuth();

  const { data, isLoading, refetch } = useQuery(["cart"], () => getCart(), {
    enabled: isAuthorized,
  });

  return (
    <Section className="cart__page">
      <SectionHeader>
        <SectionTitle>{t("cart")}</SectionTitle>
      </SectionHeader>

      <CartItemsList loading={isLoading}>
        {data?.cartItems.map((item) => (
          <CartItem key={item.id} data={item} />
        ))}
      </CartItemsList>

      <Button className="ml-auto mt-6 max-w-xs md:mt-8" onClick={() => refetch()}>
        {t("cart:update_cart")}
      </Button>

      <div className="mt-20 ml-auto flex max-w-md flex-col items-start justify-center space-y-6 text-lg uppercase tracking-widest">
        <div className="flex w-full justify-between border-b border-aurum-border py-5">
          <span>{t("cart:total")}</span>
          <span>{asPrice(data?.totalPrice)}</span>
        </div>
      </div>

      <Link href="/checkout">
        <Button className="ml-auto mt-6 max-w-xs md:mt-8">{t("cart:checkout")}</Button>
      </Link>
    </Section>
  );
};

export default CartContainer;
