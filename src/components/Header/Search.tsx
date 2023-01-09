import { XMarkIcon } from "@heroicons/react/24/outline";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { useState, useRef, useEffect, useCallback } from "react";
import { CSSTransition } from "react-transition-group";
import { useEventListener, useLockedBody } from "usehooks-ts";

import { Button } from "../Elements";
import { Portal } from "../Portal";
import { useHeaderStore } from "./Header.store";

export const Search: React.FC = () => {
  const { t } = useTranslation();

  const router = useRouter();

  const isSearchOpen = useHeaderStore((state) => state.isSearchOpen);
  const setIsSearchOpen = useHeaderStore((state) => state.setIsSearchOpen);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [, setLocked] = useLockedBody(false, "__next");

  const searchRef = useRef<HTMLDivElement>(null);

  const onSearchSubmit = useCallback(async () => {
    setLoading(true);

    if (input) await router.push(`/shop?q=${input}`);

    setIsSearchOpen(false);
    setLoading(false);
    setInput("");
  }, [input, router, setIsSearchOpen]);

  useEventListener("keyup", (e) => {
    if (e.key === "Escape") {
      setIsSearchOpen(false);
    }

    if (e.key === "Enter" && input.length >= 3) {
      onSearchSubmit();
    }
  });

  useEffect(() => {
    setLocked(isSearchOpen);
  }, [isSearchOpen, setLocked]);

  return (
    <Portal>
      <CSSTransition nodeRef={searchRef} in={isSearchOpen} timeout={300} unmountOnExit>
        <div ref={searchRef} className="search-bar">
          <div className="search-bar__close">
            <Button variant="text" icon onClick={() => setIsSearchOpen(false)}>
              <XMarkIcon className="h-8 w-8" />
            </Button>
          </div>
          <div className="search-bar__inner">
            <h3 className="search-bar__title">{t("search_products")}</h3>
            <div className="search-bar__form">
              <input
                className="search-bar__input"
                type="text"
                placeholder={t("enter_product_name") ?? ""}
                autoComplete="off"
                autoFocus
                value={input}
                disabled={loading}
                onChange={(e) => setInput(e.target.value)}
              />

              <Button
                className="!w-auto min-w-[220px]"
                loading={loading}
                disabled={input.length < 3}
                onClick={onSearchSubmit}
              >
                {t("search")}
              </Button>
            </div>
          </div>
        </div>
      </CSSTransition>
    </Portal>
  );
};
