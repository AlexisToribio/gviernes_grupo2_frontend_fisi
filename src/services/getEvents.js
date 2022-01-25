import { clientApi } from "../lib/axios";

export const getEvents = ({ token }) => {
  return clientApi("/dashboard/events", {
    headers: {
      token,
    },
  }).then((res) => res.data);
};
