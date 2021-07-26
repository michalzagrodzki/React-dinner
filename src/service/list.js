import { Instance } from "./index";

export const getList = () =>
  Instance({
    method: "GET",
    url: "/dinners",
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
