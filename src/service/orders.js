import { Instance } from "./index";

export const postOrder = (payload) =>
  Instance({
    method: "POST",
    url: `/dinners/order/${payload.id}`,
  });

export const postCustomOrder = (payload) =>
  Instance({
    method: "POST",
    url: `/dinners/custom/order`,
    headers: { "Content-Type": "multipart/form-data" },
    data: payload.body,
  });
