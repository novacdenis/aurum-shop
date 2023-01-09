import { useTranslation } from "next-i18next";
import Link from "next/link";

import { Section } from "@/components/Elements";

export const Categories: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Section>
      <div className="home-categories">
        <div
          className="home-categories__image home-categories__left-image"
          style={{ backgroundImage: "url(/assets/images/model-variant-1.jpg)" }}
        />
        <ul role="menu" tabIndex={0} className="home-categories__menu">
          <Link href="/shop">
            <li role="menuitem" className="home-categories__menu-item">
              <span className="home-categories__menu-link-text">{t("new_products")}</span>
            </li>
          </Link>
          <Link href="/shop">
            <li role="menuitem" className="home-categories__menu-item">
              <span className="home-categories__menu-link-text">{t("jewelry")}</span>
            </li>
          </Link>
          <Link href="/shop">
            <li role="menuitem" className="home-categories__menu-item">
              <span className="home-categories__menu-link-text">{t("engagement_and_wedding")}</span>
            </li>
          </Link>
          <Link href="/shop">
            <li role="menuitem" className="home-categories__menu-item">
              <span className="home-categories__menu-link-text">{t("for_kids")}</span>
            </li>
          </Link>
          <Link href="/shop">
            <li role="menuitem" className="home-categories__menu-item">
              <span className="home-categories__menu-link-text">{t("watch")}</span>
            </li>
          </Link>
          <Link href="/shop">
            <li role="menuitem" className="home-categories__menu-item">
              <span className="home-categories__menu-link-text">{t("gifts")}</span>
            </li>
          </Link>
        </ul>
        <div
          className="home-categories__image home-categories__right-image"
          style={{ backgroundImage: "url(/assets/images/model-variant-2.jpg)" }}
        />
      </div>
    </Section>
  );
};
