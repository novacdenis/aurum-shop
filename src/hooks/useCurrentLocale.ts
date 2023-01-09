import type { AppLocales } from "@/types";

import { useRouter } from "next/router";
import { useCallback, useMemo } from "react";

export type versions = { [key in AppLocales]: string };

export const useCurrentLocale = () => {
  const { locale } = useRouter();

  const activeLocale = useMemo(() => {
    return (locale ?? "ru") as AppLocales;
  }, [locale]);

  const showVersion = useCallback(
    (versions: { [key in AppLocales]?: string }) => {
      return versions[activeLocale];
    },
    [activeLocale]
  );

  return { locale: activeLocale, showVersion };
};
