import { XMarkIcon } from "@heroicons/react/24/outline";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import { useEventListener, useLockedBody } from "usehooks-ts";

import { Button } from "../Elements";
import { Portal } from "../Portal";
import { useHeaderStore } from "./Header.store";

export const DesktopMenu: React.FC = () => {
  const { t } = useTranslation();

  const isDesktopMenuOpen = useHeaderStore((state) => state.isDesktopMenuOpen);
  const setIsDesktopMenuOpen = useHeaderStore((state) => state.setIsDesktopMenuOpen);

  const [, setLocked] = useLockedBody(false, "__next");

  const searchRef = useRef<HTMLDivElement>(null);

  useEventListener("keyup", (e) => {
    if (e.key === "Escape") {
      setIsDesktopMenuOpen(false);
    }
  });

  useEffect(() => {
    setLocked(isDesktopMenuOpen);
  }, [isDesktopMenuOpen, setLocked]);

  return (
    <Portal>
      <CSSTransition nodeRef={searchRef} in={isDesktopMenuOpen} timeout={300} unmountOnExit>
        <div ref={searchRef} className="desktop-menu">
          <div className="desktop-menu__close">
            <Button variant="text" icon onClick={() => setIsDesktopMenuOpen(false)}>
              <XMarkIcon className="h-8 w-8" />
            </Button>
          </div>
          <div className="desktop-menu__inner">
            <div className="desktop-menu__images">
              <Image
                className="left-top"
                src="/assets/images/model-variant-6.sm.jpg"
                alt="Model Variant 6"
                width={117}
                height={174}
              />
              <Image
                className="left-center"
                src="/assets/images/model-variant-4.sm.jpg"
                alt="Model Variant 4"
                width={178}
                height={127}
              />
              <Image
                className="left-bottom"
                src="/assets/images/model-variant-2.sm.jpg"
                alt="Model Variant 2"
                width={176}
                height={251}
              />
              <Image
                className="right-top"
                src="/assets/images/model-variant-1.sm.jpg"
                alt="Model Variant 1"
                width={117}
                height={174}
              />
              <Image
                className="right-center"
                src="/assets/images/model-variant-7.sm.jpg"
                alt="Model Variant 7"
                width={209}
                height={149}
              />
              <Image
                className="right-bottom"
                src="/assets/images/model-variant-5.sm.jpg"
                alt="Model Variant 5"
                width={117}
                height={145}
              />
            </div>
            <nav className="desktop-menu__nav">
              <Link href="/about" className="desktop-menu__link">
                {t("about_us")}
              </Link>
              <Link href="/contacts" className="desktop-menu__link">
                {t("contacts")}
              </Link>
              <Link href="/career" className="desktop-menu__link">
                {t("career")}
              </Link>
              <Link href="/guarantee-repair" className="desktop-menu__link">
                {t("warranty_and_repair")}
              </Link>
              <Link href="/delivery-return" className="desktop-menu__link">
                {t("delivery_and_return")}
              </Link>
            </nav>
          </div>
        </div>
      </CSSTransition>
    </Portal>
  );
};
