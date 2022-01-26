import { clientApi } from "../lib/axios";

export const getRequests = ({ token }) => {
  return clientApi("/dashboard/myrequests", {
    headers: {
      token,
    },
  }).then((res) => res.data);
};
