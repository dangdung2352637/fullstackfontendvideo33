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

const deleteUserService = (userId) => {
 return axios.delete("/api/delete-users", {

    data: {
      id: userId
    }
  });
}

const editUserService = (inputData) => {
  return axios.put("/api/edit-users",inputData )
}

export { handleLoginApi ,getAllUsers,createNewUserService, deleteUserService ,editUserService};
