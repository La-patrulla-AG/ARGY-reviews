import api from "./api";

export const me = () => api.get("/users/me").then(({ data }) => data);
