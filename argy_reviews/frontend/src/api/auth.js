import api, { setNewToken } from "./api";

export const login = ({ username, password }) =>
  api
    .post("/login/", {
      username_or_email: username,
      password,
    })
    .then(({ data }) => {
      setNewToken(data.token);
      return data;
    });

export const logout = async () => setNewToken(false);
