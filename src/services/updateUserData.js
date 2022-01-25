import { clientApi } from "../lib/axios";

export const updateUserData = ({ id, token, data }) => {
  return clientApi
    .put(`/dashboard/profile/${id}`, data, {
      headers: {
        "Content-Type": "application/json",
        token,
      },
    })
    .then((res) => res.data);
};
