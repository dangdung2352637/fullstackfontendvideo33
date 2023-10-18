import actionTypes from "../actions/actionTypes";
import { getAllCodeService } from "../../services/userService";


const initialState = {
    genders: [],
    roles: [],
    positions: []
};

const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_GENDER_START:
        console.log("check state",action);
      return {
        ...state,
      };
    case actionTypes.FETCH_GENDER_SUCCESS:
        let copyState = {...state};
        copyState.genders = action.data;
        console.log("check copy initstate",initialState);
    return {
        ...copyState,
      };

      case actionTypes.FETCH_GENDER_FAIDED:
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default adminReducer;
