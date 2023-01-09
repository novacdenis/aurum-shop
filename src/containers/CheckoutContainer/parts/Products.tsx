import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "next-i18next";

import { useAuth } from "@/features/auth";
import { getCart } from "@/features/cart";
import { useCurrentLocale } from "@/hooks";
import { asPrice } from "@/utils";

export const Products: React.FC = () => {
  const { t } = useTranslation();
  const { isAuthorized } = useAuth();
  const { showVersion } = useCurrentLocale();

  const { data } = useQuery(["cart"], () => getCart(), {
    enabled: isAuthorized,
  });

  return (
    <>
      <ul className="space-y-5">
        {data?.cartItems.map((item) => (
          <li key={item.id} className="flex items-start justify-between">
            <div className="pr-10">
              <h3 className="text-lg uppercase tracking-wide line-clamp-2">
                {showVersion({ ru: item.product.name_ru, ro: item.product.name_ro })}
                <span className="whitespace-nowrap">(x {item.quantity})</span>
              </h3>
            </div>
            <div className="text-lg uppercase">
              {asPrice(Number(item.variant.price) * item.quantity)}
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-5 ml-auto flex max-w-md flex-col items-start justify-center space-y-6 text-lg uppercase tracking-widest lg:max-w-full">
        <div className="flex w-full justify-between border-b border-aurum-border py-5">
          <span>{t("cart:total")}</span>
          <span>{asPrice(data?.totalPrice)}</span>
        </div>
      </div>
    </>
  );
};
