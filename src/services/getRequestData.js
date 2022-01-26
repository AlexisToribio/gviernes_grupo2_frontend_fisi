import { clientApi } from "../lib/axios";

export const getRequestData = ({ id, token }) => {
  return clientApi
    .get(`/dashboard/myrequests/details/${id}`, {
      headers: {
        token,
      },
    })
    .then((res) => res.data);
};
