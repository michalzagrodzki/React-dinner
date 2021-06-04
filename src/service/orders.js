import { Instance } from "./index";

export const postOrder = (payload) =>
  Instance({
    method: "POST",
    url: `/order/${payload.id}`,
  });

export const postCustomOrder = (payload) =>
  Instance({
    method: "POST",
    url: `/custom/order`,
    headers: { "Content-Type": "multipart/form-data" },
    data: payload.body,
  });
