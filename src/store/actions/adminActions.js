import actionTypes from "./actionTypes";
import { getAllCodeService } from "../../services/userService";
// import { data } from 'jquery';

// export const fetchGenderStart = () => ({
//     type: actionTypes.FETCH_GENDER_START
// })

export const fetchGenderStart = () => {
  return async (dispatch, getState) => {
    try {
      let res = await getAllCodeService("GENDER");
      console.log(res);
      if (res && res.errCode === 0) {
        dispatch(fetchGenderSuccess(res.data));
        console.log(1);
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
  type: actionTypes.FETCH_GENDER_FAIDED,
});

//start doing end
