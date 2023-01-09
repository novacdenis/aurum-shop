import { useTranslation } from "next-i18next";
import Link from "next/link";

import {
  Accordion,
  AccordionItem,
  AccordionItemContent,
  AccordionItemHeader,
  Drawer,
} from "@/components/Elements";

import { useShopStore } from "../store";

export const Categories: React.FC = () => {
  const { t } = useTranslation();

  return (
    <nav className="shop__categories-nav">
      <Link href="/shop" className="categories-nav__link">
        {t("all_products")}
      </Link>
      <Link href="/shop" className="categories-nav__link">
        {t("new_products")}
      </Link>

      <Accordion type="single" collapsible>
        <AccordionItem value="jewelry">
          <AccordionItemHeader className="categories-nav__link">{t("jewelry")}</AccordionItemHeader>
          <AccordionItemContent>
            <div className="categories-nav__sub">
              <Link href="/shop" className="categories-nav__sub-link">
                {t("category_1")}
              </Link>
            </div>
          </AccordionItemContent>
        </AccordionItem>
      </Accordion>

      <Link href="/shop" className="categories-nav__link">
        {t("engagement_and_wedding")}
      </Link>
      <Link href="/shop" className="categories-nav__link">
        {t("for_kids")}
      </Link>
      <Link href="/shop" className="categories-nav__link">
        {t("watch")}
      </Link>

      <Accordion type="single" collapsible>
        <AccordionItem value="gifts">
          <AccordionItemHeader className="categories-nav__link">{t("gifts")}</AccordionItemHeader>
          <AccordionItemContent>
            <div className="categories-nav__sub">
              <Link href="/shop" className="categories-nav__sub-link">
                {t("category_1")}
              </Link>
            </div>
          </AccordionItemContent>
        </AccordionItem>
      </Accordion>
    </nav>
  );
};

export const CategoriesSidebar: React.FC = () => {
  const isShopCategoriesSidebarOpen = useShopStore((store) => store.isShopCategoriesSidebarOpen);
  const setShopCategoriesSidebarOpen = useShopStore((store) => store.setShopCategoriesSidebarOpen);

  return (
    <Drawer
      className="shop-categories__sidebar-drawer"
      isOpen={isShopCategoriesSidebarOpen}
      onClose={() => setShopCategoriesSidebarOpen(false)}
    >
      <div className="shop-categories__sidebar">
        <Categories />
      </div>
    </Drawer>
  );
};
