export type ModelsType = {
  MAKE_ID: number;
  Model_ID: number;
  Model_Name: string;
  Make_Name: string;
};

export type MakeType = {
  MakeId: number;
  MakeName: string;
  VehicleTypeId: number;
  VehicleTypeName: string;
};

export type Option = { value: number; label: string | number };
