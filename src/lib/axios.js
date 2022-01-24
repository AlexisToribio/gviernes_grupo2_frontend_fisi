import Axios from "axios";
import { URL } from "../constants/api-url";

export const clientApi = Axios.create({
  baseURL: URL,
});
