import { clientApi } from "../lib/axios";

export const getEvents = ({ token }) => {
  return clientApi
    .get("/dashboard/events", {
      headers: {
        token,
      },
    })
    .then((res) => res.data);
};
