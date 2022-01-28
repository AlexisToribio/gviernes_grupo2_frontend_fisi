import { clientApi } from "../lib/axios";

export const inscription = ({ token, idevent, data }) => {
  return clientApi
    .post(`dashboard/events/inscription/${idevent}`, data, {
      headers: {
        token,
      },
    })
    .then((res) => res.data);
};
