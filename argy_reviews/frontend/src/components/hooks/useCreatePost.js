import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createPost as createPostFn } from "../../api/posts";

export const useCreatePost = () => {
  const queryClient = useQueryClient();

  const { mutateAsync: createPost } = useMutation({
    mutationKey: ["Create Post"],
    mutationFn: createPostFn,

    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["Posts"] }),
  });

  return {
    createPost,
  };
};
