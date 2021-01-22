export const CHANGE_DATA = "CHANGE_DATA";
export const USER_LOADING = "USER_LOADING";
export const USER_FAIL = "USER_FAIL";
export const USER_SUCCESS = "USER_SUCCESS";

// USER TYPE
export type UserType = {
  gender: string;
  name: NameUserType;
};

export type NameUserType = {
  title: string;
  first: string;
  last: string;
};

export type DataType = {
  name: string;
  value: any;
};

export interface UserLoading {
  type: typeof USER_LOADING;
}

export interface UserFail {
  type: typeof USER_FAIL;
}

export interface UserSuccess {
  type: typeof USER_SUCCESS;
  payload: UserType;
}

export interface ChangeData {
  type: typeof CHANGE_DATA;
  payload: DataType;
}

export type LoginDispatchTypes =
  | UserLoading
  | UserFail
  | UserSuccess
  | ChangeData;
