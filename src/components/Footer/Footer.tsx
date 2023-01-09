import { useTranslation } from "next-i18next";
import Link from "next/link";

import { SectionHeader, SectionSubtitle, SectionTitle } from "../Elements";
import { NewsletterForm } from "../Forms";

export const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer__top">
        <SectionHeader align="center">
          <SectionSubtitle>{t("subscribe_to_newsletter")}</SectionSubtitle>
          <SectionTitle>Lorem ipsum dolor</SectionTitle>
        </SectionHeader>
        <NewsletterForm />
      </div>
      <div className="footer__bottom">
        <nav className="footer__nav">
          <div className="footer__nav-block">
            <h4 className="nav-block__title">{t("social_networks")}</h4>
            <ul className="nav-block__items">
              <li className="nav-block__item">
                <a href="#" className="nav-block__link">
                  Instagram
                </a>
              </li>
              <li className="nav-block__item">
                <a href="#" className="nav-block__link">
                  Facebook
                </a>
              </li>
              <li className="nav-block__item">
                <a href="#" className="nav-block__link">
                  Twitter
                </a>
              </li>
            </ul>
          </div>

          <div className="footer__nav-block">
            <h4 className="nav-block__title">{t("categories")}</h4>
            <ul className="nav-block__items grid-cols-2">
              <li className="nav-block__item">
                <Link href="/shop" className="nav-block__link">
                  {t("new_products")}
                </Link>
              </li>
              <li className="nav-block__item">
                <Link href="/shop" className="nav-block__link">
                  {t("jewelry")}
                </Link>
              </li>
              <li className="nav-block__item">
                <Link href="/shop" className="nav-block__link">
                  {t("engagement_and_wedding")}
                </Link>
              </li>
              <li className="nav-block__item">
                <Link href="/shop" className="nav-block__link">
                  {t("for_kids")}
                </Link>
              </li>
              <li className="nav-block__item">
                <Link href="/shop" className="nav-block__link">
                  {t("watch")}
                </Link>
              </li>
              <li className="nav-block__item">
                <Link href="/shop" className="nav-block__link">
                  {t("gifts")}
                </Link>
              </li>
              <li className="nav-block__item">
                <Link href="/services" className="nav-block__link">
                  {t("services")}
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer__nav-block">
            <h4 className="nav-block__title">{t("useful_links")}</h4>
            <ul className="nav-block__items grid-cols-2">
              <li className="nav-block__item">
                <Link href="/about" className="nav-block__link">
                  {t("about_us")}
                </Link>
              </li>
              <li className="nav-block__item">
                <Link href="/contacts" className="nav-block__link">
                  {t("contacts")}
                </Link>
              </li>
              <li className="nav-block__item">
                <Link href="/career" className="nav-block__link">
                  {t("career")}
                </Link>
              </li>
              <li className="nav-block__item">
                <Link href="/warranty-repair" className="nav-block__link">
                  {t("warranty_repair")}
                </Link>
              </li>
              <li className="nav-block__item">
                <Link href="/delivery-return" className="nav-block__link">
                  {t("delivery_return")}
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer__nav-block">
            <h4 className="nav-block__title">{t("store")}</h4>
            <ul className="nav-block__items">
              <li className="nav-block__item">
                <Link href="/faq" className="nav-block__link">
                  FAQ
                </Link>
              </li>
              <li className="nav-block__item">
                <Link href="/delivery-return" className="nav-block__link">
                  {t("delivery")}
                </Link>
              </li>
              <li className="nav-block__item">
                <Link href="/privacy-policy" className="nav-block__link">
                  {t("privacy_policy")}
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </footer>
  );
};
