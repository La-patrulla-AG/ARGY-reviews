import { useMutation, useQueryClient } from "@tanstack/react-query";
import {deletePost} from "../../api/posts"

export const useDeletePost = (setUpdatePosts) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deletePost,
    onSuccess: () => {
      // Invalidar la caché de los posts
      queryClient.refetchQueries(["Posts"]);

      setUpdatePosts((prev) => !prev);
    },
    onError: (error) => {
      console.error("Error deleting post:", error);
    },
  });
};
