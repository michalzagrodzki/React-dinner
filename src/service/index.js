import axios from "axios";

const Instance = axios.create({
  baseURL: "http://localhost:2000/api",
  timeout: 10000,
  responseType: "json",
  responseEncoding: "utf8",
  validateStatus: function (status) {
    return status >= 200 && status < 300;
  },
});

export { Instance };
