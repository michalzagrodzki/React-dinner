import { Instance } from "./index";

export const getDetails = (payload) =>
  Instance({
    method: "GET",
    url: `/dinners/details/${payload.id}`,
    transformResponse: [
      (data) => {
        try {
          return data;
        } catch (error) {
          throw Error(error);
        }
      },
    ],
  });
