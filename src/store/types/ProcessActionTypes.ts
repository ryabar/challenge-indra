export const CHANGE_DATA = "CHANGE_DATA";

// FAMILY TYPE
export type FamilyType = {
  familyBond: string;
  birthdate: string;
};

// PLAN TYPE
export type PlanType = {
  name: string;
  price: number;
  recurrence: string;
  maxCoverage: number;
  features: FeatureType[];
};

export type FeatureType = {
  feature: string;
  active: boolean;
};

export type DataType = {
  name: string;
  value: any;
};

export interface ChangeData {
  type: typeof CHANGE_DATA;
  payload: DataType;
}

export type ProcessDispatchTypes = ChangeData;
