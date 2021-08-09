import { Instance } from "./index";

export const postOrder = (payload) =>
  Instance({
    method: "POST",
    url: `/orders`,
    headers: { "Content-Type": "multipart/form-data" },
    data: payload,
  });
