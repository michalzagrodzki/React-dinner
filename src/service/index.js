import axios from "axios";

const Instance = axios.create({
  baseURL: "https://some.base.url",
  timeout: 10000,
  responseType: "json",
  responseEncoding: "utf8",
  validateStatus: function (status) {
    return status >= 200 && status < 300;
  },
});

export { Instance };
