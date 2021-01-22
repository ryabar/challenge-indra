import {
  ProcessDispatchTypes,
  FamilyType,
  PlanType,
  CHANGE_DATA,
} from "../types/ProcessActionTypes";

interface DefaultStateI {
  dni?: number;
  name?: string;
  fatherLastname?: string;
  motherLastname?: string;
  birthdate?: string;
  gender?: string;
  typeInsured?: string;
  family?: FamilyType[];

  plans?: PlanType[];
  plan?: PlanType;
}

const defaultState: DefaultStateI = {};

const processReducer = (
  state: DefaultStateI = defaultState,
  action: ProcessDispatchTypes
): DefaultStateI => {
  switch (action.type) {
    case CHANGE_DATA:
      return {
        [action.payload.name]: action.payload.value,
      };
    default:
      return state;
  }
};

export default processReducer;
