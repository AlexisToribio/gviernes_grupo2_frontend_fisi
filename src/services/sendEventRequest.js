import { clientApi } from "../lib/axios";

export const sendEventRequest = ({ data, token }) => {
  return clientApi
    .post("/dashboard/events/register", data, {
      headers: {
        "Content-Type": "application/json",
        token,
      },
    })
    .then((res) => res.data.message);
};
