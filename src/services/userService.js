// export { default as adminService } from './adminService';
// export { default as userService } from './userService';
import { stringify } from "react-auth-wrapper/helpers";
import axios from "../axios";

const handleLoginApi = (email, password) => {

  return axios.post("/api/login", { email, password });
};

const getAllUsers =  (inputId) => {
console.log("1",1);
  return axios.get(`/api/get-all-users?id=${inputId}`)
}

export { handleLoginApi ,getAllUsers };
