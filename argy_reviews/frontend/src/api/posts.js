import api from "./api";

export const getPosts = () => api.get("/carousels/").then(({ data }) => data);

export const deletePost = (postId) => api.delete(`/posts/${postId}/`);

export const createPost = async ({ files, ...rest }) => {
  api.post("/posts/", rest).then(async ({ data }) => {
    if (files?.length)
      await Promise.allSettled(
        files.map((file) => {
          const imageData = new FormData();
          imageData.append("image", file);
          imageData.append("post", data.id);
          return api.post(`/posts/${data.id}/images/`, imageData);
        })
      );
    return data;
  });
};

export const reviewPost = ({ postId, formData }) => {
  return api.post(`/posts/${postId}/reviews/`, formData);
};

export const deleteReview = ({postId, reviewId}) => {
  return api.delete(`/posts/${postId}/reviews/${reviewId}/`);
}