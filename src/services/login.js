import { clientApi } from "../lib/axios";

export const login = ({ data }) => {
  return clientApi
    .post("/auth/login", data, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => res.data);
};
