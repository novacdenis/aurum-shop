import { Bars2Icon, ShoppingBagIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

import { useAuth } from "@/features/auth";
import { clsx } from "@/utils";

import { useHeaderStore } from "./Header.store";

export interface MobileBarProps {
  transparent?: boolean;
}

export const MobileBar: React.FC<MobileBarProps> = ({ transparent }) => {
  const { isAuthorized } = useAuth();

  const setIsMobileMenuOpen = useHeaderStore((store) => store.setIsMobileMenuOpen);

  return (
    <header id="mobile-bar" className={clsx("header", transparent && "transparent")}>
      <div className="header__inner">
        <button className="navigation__action" onClick={() => setIsMobileMenuOpen(true)}>
          <Bars2Icon className="h-6 w-6" />
        </button>

        <Link href="/" className="flex items-center justify-center">
          <Image src="/assets/icons/logo.svg" width={96.1} height={21.21} alt="Aurum" />
        </Link>

        <Link href={isAuthorized ? "/cart" : `/auth/login?redirect=${encodeURIComponent("/cart")}`}>
          <button className="navigation__action">
            <ShoppingBagIcon className="h-6 w-6" />
          </button>
        </Link>
      </div>
    </header>
  );
};
