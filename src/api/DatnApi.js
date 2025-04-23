import axiosClient from "./axiosClient";
/**
 */
class QLHSApi {
  constructor(table) {
    this.baseUrl = table;
  }
  baseUrl = "";
  /**
   * UpDate Status
   */
  updateStatus = (ids) => {
    try {
      return axiosClient.put(this.baseUrl + "/Update-Status?id=" + ids);
    } catch (error) {
      console.log(error);
    }
  };
  /**
   * UpDate Priority
   */
  updatePriority = (ids) => {
    try {
      return axiosClient.put(this.baseUrl + "/Update-Priority?id=" + ids);
    } catch (error) {
      console.log(error);
    }
  };
}

export default QLHSApi;
