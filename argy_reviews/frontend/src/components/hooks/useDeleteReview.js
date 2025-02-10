import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteReview as deleteReviewFn } from "../../api/posts";

export const useDeleteReview = () => {
  const queryClient = useQueryClient();

  const { mutateAsync: deleteReview } = useMutation({
    mutationKey: ["Delete Review"],
    mutationFn: deleteReviewFn,

    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["Posts"] }),
  });

  return {
    deleteReview,
  };
};
