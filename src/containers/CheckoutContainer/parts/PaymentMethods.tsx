import { useAuth } from "@/features/auth";
import { getCart } from "@/features/cart";
import { useQuery } from "@tanstack/react-query";

export const PaymentMethods: React.FC = () => {
  const { isAuthorized } = useAuth();

  const { data, isLoading, refetch } = useQuery(["cart"], () => getCart(), {
    enabled: isAuthorized,
  });

  return <></>;
};
