import type { QueryClientConfig } from "@tanstack/react-query";

export const REACT_QUERY_CONFIG: QueryClientConfig = {
  defaultOptions: {
    queries: {
      retry: false,
      staleTime: 1000 * 60 * 1,
    },
  },
};
