import { clientApi } from "../lib/axios";

export const getEventDetails = ({ token, id }) => {
  return clientApi
    .get(`/dashboard/events/details/${id}`, {
      headers: {
        token,
      },
    })
    .then((res) => res.data);
};
