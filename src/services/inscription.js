import { clientApi } from "../lib/axios";

export const inscription = ({ token, data, idevent }) => {
  return clientApi
    .post(`dashboard/events/inscription/${idevent}`, data, {
      headers: {
        token,
      },
    })
    .then((res) => res.data);
};
