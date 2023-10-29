import actionTypes from "./actionTypes";
import { getAllCodeService,createNewUserService ,getAllUsers,deleteUserService, editUserService } from "../../services/userService";
import { toast } from "react-toastify";
// import { data } from 'jquery';

// export const fetchGenderStart = () => ({
//     type: actionTypes.FETCH_GENDER_START
// })

export const fetchGenderStart = () => {
  return async (dispatch, getState) => {
    try {
      dispatch({ type: actionTypes.FETCH_GENDER_START });
      // dispatch({type: actionTypes.FETCH_GENDER_STAR});
      let res = await getAllCodeService("GENDER");
      if (res && res.errCode === 0) {
        dispatch(fetchGenderSuccess(res.data));
      } else {
        dispatch(fetchGenderFailed());
      }
    } catch (e) {
      dispatch(fetchGenderFailed());
      console.log(e);
    }
  };
};

export const fetchGenderSuccess = (genderData) => ({
  type: actionTypes.FETCH_GENDER_SUCCESS,
  data: genderData,
});

export const fetchGenderFailed = () => ({
  type: actionTypes.FETCH_GENDER_FAILDED,
});

export const fetchPositionStart = () => {
  return async (dispatch, getState) => {
    try {
      // dispatch({type: actionTypes.FETCH_GENDER_STAR});
      let res = await getAllCodeService("POSITION");
      console.log(res);
      if (res && res.errCode === 0) {
        dispatch(fetchPositionSuccess(res.data));
      } else {
        dispatch(fetchPosittionFailed());
      }
    } catch (e) {
      dispatch(fetchPosittionFailed());
      console.log("fetchPosittionFailed ERROR", e);
    }
  };
};

export const fetchPositionSuccess = (positionData) => ({
  type: actionTypes.FETCH_POSITION_SUCCESS,
  data: positionData,
});

export const fetchPosittionFailed = () => ({
  type: actionTypes.FETCH_POSITION_FAIDED,
});

export const fetchRoleStart = () => {
  return async (dispatch, getState) => {
    try {
      // dispatch({type: actionTypes.FETCH_GENDER_STAR});
      let res = await getAllCodeService("ROLE");
      console.log(res);
      if (res && res.errCode === 0) {
        dispatch(fetchRoleSuccess(res.data));
      } else {
        dispatch(fetchRoleFailed());
      }
    } catch (e) {
      dispatch(fetchRoleFailed());
      console.log("fetchRoleFailed ERROR", e);
    }
  };
};

export const fetchRoleSuccess = (roleData) => ({
  type: actionTypes.FETCH_ROLE_START,
  data: roleData,
});

export const fetchRoleFailed = () => ({
  type: actionTypes.FETCH_ROLE_FAIDED,
});

//start doing end


export const createNewUser = (data) => {
  return async (dispatch, getState) => {
    try {
      // dispatch({type: actionTypes.FETCH_GENDER_STAR});
      let res = await createNewUserService(data) ;
      console.log(res);
      if (res && res.errCode === 0) {
        console.log('hoi dan it check create redux',res);
        toast.success("create a new user succeed!");
        dispatch(saveUserSuccess());
        dispatch(fetchAllUsersStart())
      } else {
        dispatch(saveUserFailed());
      }
    } catch (e) {
      dispatch(saveUserFailed());
      console.log("saveUserFailed ERROR", e);
    }
  };
}
 
export const saveUserSuccess = () => ({
  type: actionTypes.CREATE_USER_SUCCESS
})

export const saveUserFailed = () => ({
  type: actionTypes.CREATE_USER_FAILDED
})


export const fetchAllUsersStart = () => {
  return async (dispatch, getState) => {
    try {
      // dispatch({type: actionTypes.FETCH_GENDER_STAR});
      let res = await getAllUsers("ALL");
      console.log(res);
      if (res && res.errCode === 0) {
      
        dispatch(fetchAllUsersSuccess(res.users.reverse()));
      } else {
        toast.error("fetch all user error!");
        dispatch(fetchAllUsersFailed());
      }
    } catch (e) {
      toast.error("fetch all user error!");
      dispatch(fetchAllUsersFailed());
      console.log("fetchAllUsersFailed ERROR", e);
    }
  };
};

export const fetchAllUsersSuccess = (data) => ({
  type:actionTypes.FETCH_ALL_USERS_SUCCESS,
  users: data
})

export const fetchAllUsersFailed = () => ({
  type:actionTypes.FETCH_ALL_USERS_FAIDED,
})


export const deleteUser = (userId) => {
  return async (dispatch, getState) => {
    try {
      // dispatch({type: actionTypes.FETCH_GENDER_STAR});
      let res = await deleteUserService(userId) ;
      console.log(res);
      if (res && res.errCode === 0) {
        toast.success("delete user succeed!");
        dispatch(deleteUserSuccess());
        dispatch(fetchAllUsersStart())
      } else {
        toast.error("delete user error!");
        dispatch(saveUserFailed());
      }
    } catch (e) {
      toast.error("delete user error!");
      dispatch(saveUserFailed());
      console.log("saveUserFailed ERROR", e);
    }
  };
}

export const deleteUserSuccess = () => ({
  type: actionTypes.DELETE_USER_SUCCESS
})

export const deleteUserFailed = () => ({
  type: actionTypes.DELETE_USER_FAILDED
})

export const editAUser = (data) => {
  return async (dispatch, getState) => {
    try {
      // dispatch({type: actionTypes.FETCH_GENDER_STAR});
      let res = await editUserService(data) ;
      console.log(res);
      if (res && res.errCode === 0) {
        toast.success("update user succeed!");
        dispatch(editUserSuccess());
        dispatch(fetchAllUsersStart())
      } else {
        toast.error("update user error!");
        dispatch(editUserFailed());
      }
    } catch (e) {
      toast.error("update user error!");
      dispatch(editUserFailed());
      console.log("editUserFailed ERROR", e);
    }
  };
}

export const editUserSuccess = () => ({
  type: actionTypes.EDIT_USER_SUCCESS
})

export const editUserFailed = () => ({
  type: actionTypes.EDIT_USER_FAILDED
})