import { useQuery } from "@tanstack/react-query";
import { getPosts } from "../../api/posts";

export const usePosts = () => {
  const { data, ...rest } = useQuery({
    queryKey: ["Posts"],
    queryFn: getPosts,
    staleTime: Infinity, //5 minutos
    refetchOnWindowFocus: true
  });

  return {
    ...data,
    ...rest,
  };
};