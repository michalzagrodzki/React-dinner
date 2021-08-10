import { Instance } from "./index";

export const postOrder = (payload) =>
  Instance({
    method: "POST",
    url: `/orders`,
    headers: { "Content-Type": "application/json" },
    data: payload,
  });
