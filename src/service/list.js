import { Instance } from "./index";

export const getList = () =>
  Instance({
    method: "GET",
    url: "/dinners",
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
