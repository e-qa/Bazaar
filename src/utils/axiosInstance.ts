import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://fakestoreapi.com/products",
});

export default axiosInstance;
