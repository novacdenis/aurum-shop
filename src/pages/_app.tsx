import type { NextPageWithLayout } from "@/types";
import type { AppProps } from "next/app";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { appWithTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { useState } from "react";
import { Toaster } from "react-hot-toast";
import { useEffectOnce } from "usehooks-ts";
import { z } from "zod";

import { REACT_QUERY_CONFIG } from "@/config";
import { AuthProvider } from "@/features/auth";
import { zodErrorMap } from "@/lib/zod";

import "@/styles/globals.css";

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const App: React.FC<AppPropsWithLayout> = ({ pageProps, Component }) => {
  const router = useRouter();

  const [queryClient] = useState(() => new QueryClient(REACT_QUERY_CONFIG));

  const getLayout = Component.getLayout ?? ((page) => page);

  useEffectOnce(() => {
    z.setErrorMap(zodErrorMap);
  });

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>{getLayout(<Component key={router.asPath} {...pageProps} />)}</AuthProvider>
      <Toaster
        toastOptions={{
          className: "toast",
          position: "top-right",
        }}
      />
    </QueryClientProvider>
  );
};

export default appWithTranslation(App);
