import { useMutation, useQueryClient } from "@tanstack/react-query";
import { reviewPost as reviewPostFn } from "../../api/posts";

export const useReviewPost = () => {
  const queryClient = useQueryClient();

  const { mutateAsync: reviewPost } = useMutation({
    mutationKey: ["Review Post"],
    mutationFn: reviewPostFn,

    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["Posts"] }),
  });

  return {
    reviewPost,
  };
};
