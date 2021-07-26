import { Instance } from "./index";

export const getDetails = (payload) =>
  Instance({
    method: "GET",
    url: `/dinners/details/${payload.id}`,
    transformResponse: [
      (data) => {
        try {
          const response = JSON.parse(data);
          return response;
        } catch (error) {
          throw Error(error);
        }
      },
    ],
  });
