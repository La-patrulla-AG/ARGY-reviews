import { useQuery, useQueryClient } from "@tanstack/react-query";
import { ACCESS_TOKEN } from "../../api/constants";
import api from "../../api/api";
import { useEffect } from "react";

export const useMe = () => {
  const queryClient = useQueryClient();
  const token = localStorage.getItem(ACCESS_TOKEN);

  const fetchUser = async () => {
    try {
      const response = await api.get("/check-auth/");
      return response.data;
    } catch (error) {
      if (error.response?.status === 403) {
        console.warn("Token expirado, intentando refrescar...");
        return { error: "token_expired" };
      }
      throw error;
    }
  };

  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ["me"],
    queryFn: fetchUser,
    enabled: !!token, // Solo ejecuta la query si hay un token
  });

  // Detecta cambios en el token y actualiza "me"
  useEffect(() => {
    if (token) {
      queryClient.invalidateQueries(["me"]);
    }
  }, [token, queryClient]);

  return { user: data, error, isLoading, refetch };
};
