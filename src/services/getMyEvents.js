import { clientApi } from "../lib/axios";

export const getMyEvents = ({ token }) => {
  return clientApi
    .get("/dashboard/myevents", {
      headers: {
        token,
      },
    })
    .then((res) => res.data);
};
