import { useQuery } from "@tanstack/react-query";
import { me as meFn } from "../../api/users";
import { useToken } from "./useToken";

export const useMe = () => {
  const { token } = useToken();

  const { data: me, ...rest } = useQuery({
    queryKey: ["Me"],
    queryFn: meFn,
    staleTime: Infinity,
    enabled: !!token,
  });

  return {
    me,
    ...rest,
  };
};
