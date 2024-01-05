import axios from "axios";

const axiosInstance = axios.create({
    baseURL:"https://todo-backend-u5ci.onrender.com"
})
export default axiosInstance;