import axios from "axios";
import queryString from "query-string";

/**
 * Config axios
 */
const axiosClient = axios.create({
  baseURL: "https://localhost:7143",
  headers: {
    "content-type": "application/json",
  },
  paramsSerializer: {
    encode: queryString.parse,
    serialize: (params) => queryString.stringify(params),
  },
});

//  Xử lý token
// axiosClient.interceptors.request.use(
//   function (config) {
//     const token = localStorage.getItem("token");
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   function (error) {
//     return Promise.reject(error);
//   }
// );

/**
 * Config response
 */
axiosClient.interceptors.response.use(
  (response) => {
    console.log(response);
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    // console.log("Lỗi", error);
    // //  Xử lý các lỗi của response
    // if (error.response) {
    //   //  Xử lý các lỗi từ phía server
    //   if (error.response.status === 401) {
    //     router.push("/");
    //     localStorage.removeItem("user");
    //     this.$state.isLogin = true;
    //     toastMessage(resources.vi.errorMessageAPI.ERROR_AUTHENTICATE);
    //   }
    // } else if (error.request) {
    //   //  Xử lý các lỗi từ phía client
    //   if (error.code === enumD.ERROR_REQUEST.ERR_NETWORK) {
    //     toastMessage(resources.vi.errorMessageAPI.ERROR_NETWORK);
    //   }
    // } else {
    //   toastMessage(resources.vi.errorMessageAPI.ERROR_SERVER);
    // }
    // //  Xử lý xóa toast
    // setTimeout(async () => {
    //   state.state.toastMessage.splice(state.state.toastMessage.length - 1, 1);
    // }, 4000);
    // delay;
    return Promise.reject(error);
    throw error;
  }
);

const toastMessage = function (msg) {
  state.state.toastMessage.unshift(resources.vi.TOAST_MESSAGE.ERROR(msg));
};

export default axiosClient;
