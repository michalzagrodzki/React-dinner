import { Instance } from "./index";

export const getList = () =>
  Instance({
    method: "GET",
    url: "/list",
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
