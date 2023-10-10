// export { default as adminService } from './adminService';
// export { default as userService } from './userService';
import { stringify } from "react-auth-wrapper/helpers";
import axios from "../axios";

const handleLoginApi = (email, password) => {

  return axios.post("/api/login", { email, password });
};

const getAllUsers =  (inputId) => {
  return axios.get(`/api/get-all-users?id=${inputId}`)
}

const createNewUserService = (data) => {
  console.log("check data from service",data);
  return axios.post('/api/create-new-users',data)
}

export { handleLoginApi ,getAllUsers,createNewUserService };
