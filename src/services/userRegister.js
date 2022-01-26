import { clientApi } from "../lib/axios";

export const userRegister = ({ data }) => {
  return clientApi
    .post("/auth/signup", data, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => res.data.message);
};
