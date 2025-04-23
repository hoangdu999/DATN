import axiosClient from "./axiosClient";
/**
 * Các API liên quan đến dữ liệu
 */
class baseApi {
  constructor(table) {
    this.baseUrl = table;
  }
  baseUrl = "";
  /**
   * Lấy các item theo bộ lọc
   */
  getByFilter = (params) => {
    try {
      return axiosClient.post(this.baseUrl + "/filter", params);
    } catch (error) {
      console.log(error);
    }
  };
  /**
   * Lấy các item theo bộ lọc
   */
  getByFilterDetail = (params) => {
    try {
      return axiosClient.post(this.baseUrl + "/filter-detail", params);
    } catch (error) {
      console.log(error);
    }
  };
  getAll = () => {
    try {
      return axiosClient.get(this.baseUrl);
    } catch (error) {
      console.log(error);
    }
  };
  /**
   * Lấy 1 item theo Id
   */
  getById = (id) => {
    try {
      return axiosClient.get(this.baseUrl + id);
    } catch (error) {
      console.log(error);
    }
  };
  /**
   * Lấy 1 item theo Id
   */
  getByIdDetail = (id) => {
    try {
      return axiosClient.get(this.baseUrl + "/detail/" + id);
    } catch (error) {
      console.log(error);
    }
  };
  /**
   * Lấy 1 item theo Id
   */
  getByIdDetail = (id) => {
    try {
      return axiosClient.get(this.baseUrl + "/Detail/" + id);
    } catch (error) {
      console.log(error);
    }
  };
  /**
   * Thêm dữ liệu
   */
  create = (item) => {
    try {
      return axiosClient.post(this.baseUrl, item);
    } catch (error) {
      console.log(error);
    }
  };
  /**
   * Sửa dữ liệu
   */
  update = (newItem) => {
    try {
      return axiosClient.put(this.baseUrl, newItem);
    } catch (error) {
      console.log(error);
    }
  };
  /**
   * Xóa dữ liệu theo Id
   */
  remove = (ids) => {
    try {
      return axiosClient.delete(this.baseUrl + "?id=" + ids);
    } catch (error) {
      console.log(error);
    }
  };
}

export default baseApi;
