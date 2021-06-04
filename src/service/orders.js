import { Instance } from "./index";

export const postOrder = (payload) =>
  Instance({
    method: "POST",
    url: `/order/${payload.id}`,
  });
