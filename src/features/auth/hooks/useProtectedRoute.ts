import { useRouter } from "next/router";
import { useUpdateEffect } from "usehooks-ts";

import { useAuth } from "../providers";

export interface UseProtectedRouteProps {
  shouldRedirectBack?: boolean;
}

export const useProtectedRoute = (options: UseProtectedRouteProps) => {
  const { isReady, isAuthorized } = useAuth();

  const router = useRouter();

  useUpdateEffect(() => {
    if (isReady && !isAuthorized) {
      router.push({
        pathname: "/auth/login",
        query: {
          redirect: options.shouldRedirectBack ? router.asPath : undefined,
        },
      });
    }
  }, [isReady, isAuthorized]);
};
