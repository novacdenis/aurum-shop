import {
  Bars3Icon,
  ChevronDownIcon,
  HeartIcon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";

import { useAuth } from "@/features/auth";
import { clsx } from "@/utils";

import { Dropdown, DropdownMenu, DropdownMenuItem, DropdownTrigger } from "../Elements";
import { useHeaderStore } from "./Header.store";

export interface DesktopBarProps {
  transparent?: boolean;
}

export const DesktopBar: React.FC<DesktopBarProps> = ({ transparent }) => {
  const { t } = useTranslation();
  const { isAuthorized } = useAuth();

  const setIsSearchOpen = useHeaderStore((state) => state.setIsSearchOpen);
  const setIsDesktopMenuOpen = useHeaderStore((state) => state.setIsDesktopMenuOpen);

  return (
    <header id="desktop-bar" className={clsx("header", transparent && "transparent")}>
      <div className="header__inner">
        <Link href="/" className="flex items-center justify-center">
          <Image src="/assets/icons/logo.svg" width={128.89} height={28.45} alt="Aurum" />
        </Link>

        <nav className="navigation">
          <ul role="menu" className="flex items-center justify-center space-x-5">
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

        <div className="header__actions">
          <button className="header-actions__button" onClick={() => setIsSearchOpen(true)}>
            <MagnifyingGlassIcon className="h-6 w-6" />
          </button>
          <button className="header-actions__button">
            <HeartIcon className="h-6 w-6" />
          </button>
          <Link href={isAuthorized ? "/account/" : "/auth/login"}>
            <button className="header-actions__button">
              <UserIcon className="h-6 w-6" />
            </button>
          </Link>
          <Link
            href={isAuthorized ? "/cart" : `/auth/login?redirect=${encodeURIComponent("/cart")}`}
          >
            <button className="header-actions__button">
              <ShoppingBagIcon className="h-6 w-6" />
            </button>
          </Link>
          <button className="header-actions__button" onClick={() => setIsDesktopMenuOpen(true)}>
            <Bars3Icon className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  );
};
