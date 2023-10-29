import actionTypes from "./actionTypes";
import { getAllCodeService,createNewUserService } from "../../services/userService";
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
        dispatch(saveUserSuccess());
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
  type: 'CREATE_USER_SUCCESS'
})

export const saveUserFailed = () => ({
  type: 'CREATE_USER_FAILDED'
})