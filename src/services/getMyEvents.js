import { clientApi } from "../lib/axios";

export const getMyEvents = ({ token }) => {
  return clientApi("/dashboard/myevents", {
    headers: {
      token,
    },
  }).then((res) => res.data);
};
