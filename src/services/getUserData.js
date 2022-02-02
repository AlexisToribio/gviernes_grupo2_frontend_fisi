import { clientApi } from "../lib/axios";

export const getUserData = ({ token }) => {
  return clientApi
    .get("/auth/user", {
      headers: {
        token,
      },
    })
    .then((res) => res.data);
};
