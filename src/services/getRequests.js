import { clientApi } from "../lib/axios";

export const getRequests = ({ token }) => {
  return clientApi
    .get("/dashboard/myrequests", {
      headers: {
        token,
      },
    })
    .then((res) => res.data);
};
