import {
  LoginDispatchTypes,
  UserType,
  CHANGE_DATA,
  USER_FAIL,
  USER_LOADING,
  USER_SUCCESS,
} from "../types/LoginActionTypes";

interface DefaultStateI {
  loading: boolean;
  user?: UserType;
  dni?: number;
  birthdate?: string;
  phone?: number;
  acceptDataPolicy?: boolean;
  acceptShippingPolicy?: boolean;
}

const defaultState: DefaultStateI = {
  loading: false,
};

const loginReducer = (
  state: DefaultStateI = defaultState,
  action: LoginDispatchTypes
): DefaultStateI => {
  switch (action.type) {
    case USER_FAIL:
      return {
        loading: false,
      };
    case USER_LOADING:
      return {
        loading: true,
      };
    case USER_SUCCESS:
      return {
        loading: false,
        user: action.payload,
      };
    case CHANGE_DATA:
      return {
        loading: false,
        [action.payload.name]: action.payload.value,
      };
    default:
      return state;
  }
};

export default loginReducer;
