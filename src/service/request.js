import axios from "axios";

import { BASE_URL, TIMEOUT } from "./config";

//创建axios基准实例，做一层封装
const instance = axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
});

instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

instance.interceptors.response.use(
  (res) => {
    return res.data.data;
  },
  (err) => {
    if (err && err.response) {
      switch (err.response.status) {
        case 400:
          console.log("请求错误");
          break;
        default:
          console.log("其他错误信息");
      }
    }
    return Promise.reject(err);
  }
);

export default instance;
