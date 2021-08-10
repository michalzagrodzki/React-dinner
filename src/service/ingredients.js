import { Instance } from "./index";

export const getIngredients = () =>
  Instance({
    method: "GET",
    url: "/ingredients",
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
