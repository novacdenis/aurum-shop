import {
  ChevronDownIcon,
  HeartIcon,
  LanguageIcon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { i18n, useTranslation } from "next-i18next";
import Link from "next/link";

import { useAuth } from "@/features/auth";

import { Drawer, Dropdown, DropdownMenu, DropdownMenuItem, DropdownTrigger } from "../Elements";
import { useHeaderStore } from "./Header.store";

export const MobileMenu: React.FC = () => {
  const { t } = useTranslation();
  const { isAuthorized } = useAuth();

  const isMobileMenuOpen = useHeaderStore((store) => store.isMobileMenuOpen);
  const setIsMobileMenuOpen = useHeaderStore((store) => store.setIsMobileMenuOpen);
  const setIsSearchOpen = useHeaderStore((store) => store.setIsSearchOpen);

  return (
    <Drawer
      className="mobile-menu"
      isOpen={isMobileMenuOpen}
      onClose={() => setIsMobileMenuOpen(false)}
    >
      <div className="mobile-menu__inner">
        <header className="mobile-menu__header">
          <button
            className="mobile-menu__button justify-between"
            onClick={() => setIsSearchOpen(true)}
          >
            <span className="mobile-menu__button-text">{t("search")}...</span>
            <span className="mobile-menu__button-icon">
              <MagnifyingGlassIcon className=" h-4 w-4" />
            </span>
          </button>
        </header>

        <div className="space-y-5">
          <Link
            href={isAuthorized ? "/cart" : `/auth/login?redirect=${encodeURIComponent("/cart")}`}
          >
            <button className="mobile-menu__button" onClick={() => setIsSearchOpen(true)}>
              <span className="mobile-menu__button-text">{t("cart")}</span>
              <span className="mobile-menu__button-icon flex items-center justify-center">
                <ShoppingBagIcon className="ml-1.5 h-4 w-4" />
              </span>
            </button>
          </Link>
          <button className="mobile-menu__button" onClick={() => setIsSearchOpen(true)}>
            <span className="mobile-menu__button-text">{t("favorites")}</span>
            <span className="mobile-menu__button-icon flex items-center justify-center">
              <HeartIcon className="ml-1.5 h-4 w-4" />
            </span>
          </button>
          <Link href={isAuthorized ? "/account/" : "/auth/login"}>
            <button className="mobile-menu__button" onClick={() => setIsSearchOpen(true)}>
              <span className="mobile-menu__button-text">{t("account")}</span>
              <span className="mobile-menu__button-icon flex items-center justify-center">
                <UserIcon className="ml-1.5 h-4 w-4" />
              </span>
            </button>
          </Link>
        </div>

        <div className="my-6 h-px bg-aurum-gray" />

        <nav className="navigation">
          <ul role="menu" className="flex flex-col items-start justify-center space-y-5 pl-4">
            <li role="menuitem" className="navigation__item">
              <Link href="/shop" className="navigation__link">
                <span className="navigation__link-text">{t("new_products")}</span>
              </Link>
            </li>
            <li role="menuitem" className="navigation__item">
              <Dropdown>
                <DropdownTrigger className="navigation__link">
                  <span className="navigation__link-text">{t("jewelry")}</span>
                  <span className="navigation__link-icon">
                    <ChevronDownIcon className="ml-1 h-4 w-4" />
                  </span>
                </DropdownTrigger>
                <DropdownMenu side="bottom" align="start">
                  <DropdownMenuItem>{t("gifts")}</DropdownMenuItem>
                  <DropdownMenuItem>{t("services")}</DropdownMenuItem>
                </DropdownMenu>
              </Dropdown>
            </li>
            <li role="menuitem" className="navigation__item">
              <Link href="/shop" className="navigation__link">
                <span className="navigation__link-text">{t("engagement_and_wedding")}</span>
              </Link>
            </li>
            <li role="menuitem" className="navigation__item">
              <Link href="/shop" className="navigation__link">
                <span className="navigation__link-text">{t("for_kids")}</span>
              </Link>
            </li>
            <li role="menuitem" className="navigation__item">
              <Link href="/shop" className="navigation__link">
                <span className="navigation__link-text">{t("watch")}</span>
              </Link>
            </li>
            <li role="menuitem" className="navigation__item">
              <Dropdown>
                <DropdownTrigger className="navigation__link">
                  <span className="navigation__link-text">{t("gifts")}</span>
                  <span className="navigation__link-icon">
                    <ChevronDownIcon className="ml-1 h-4 w-4" />
                  </span>
                </DropdownTrigger>
                <DropdownMenu side="bottom" align="start">
                  <DropdownMenuItem>{t("gifts")}</DropdownMenuItem>
                  <DropdownMenuItem>{t("services")}</DropdownMenuItem>
                </DropdownMenu>
              </Dropdown>
            </li>
            <li role="menuitem" className="navigation__item">
              <Link href="/services" className="navigation__link">
                <span className="navigation__link-text">{t("services")}</span>
              </Link>
            </li>
          </ul>
        </nav>

        <button
          className="mobile-menu__button mobile-menu__language"
          onClick={() => setIsSearchOpen(true)}
        >
          <span className="mobile-menu__button-icon flex items-center justify-center">
            <LanguageIcon className="mr-1.5 h-4 w-4" />
          </span>
          <span className="mobile-menu__button-text">
            {i18n?.language === "ru" ? "Română" : "Русский"}
          </span>
        </button>
      </div>
    </Drawer>
  );
};
