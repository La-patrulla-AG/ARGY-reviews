import api, { setNewToken } from "./api";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "./constants";

document.cookie = "sessionid=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT;";

export const login = ({ username, password }) =>
  api
    .post("/token/", {
      username: username,
      password,
    })
    .then(({ data }) => {
      localStorage.setItem(ACCESS_TOKEN, data.access);
      localStorage.setItem(REFRESH_TOKEN, data.refresh);
      return data;
    });

export const logout = async () => {
  localStorage.removeItem(ACCESS_TOKEN);
  localStorage.removeItem(REFRESH_TOKEN);
  api.post("/logout/")

}