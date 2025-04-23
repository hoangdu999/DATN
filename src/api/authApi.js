import axiosClient from "./axiosClient";

export class authApi {
  /**
   * Lấy các nhân viên theo bộ lọc
   */
  signin = (params) => {
    try {
      return axiosClient.post("/signin", params);
    } catch (error) {
      console.log(error);
    }
  };
  signout = (token) => {
    try {
      return axiosClient.delete("/signout/" + token);
    } catch (error) {
      console.log(error);
    }
  };
}

export default authApi;
