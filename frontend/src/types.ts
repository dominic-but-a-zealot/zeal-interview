interface ICheck {
  id: string;
  employeeID: string;
  hours: string;
  gross: string;
  status: "failed" | "pre-processing" | "processed";
  workAddressID: string;
}

export interface ISeededCheck extends ICheck {
  employee?: { firstname: string; lastname: string };
}

export interface IEmployee {
  id: string;
  firstname: string;
  lastname: string;
}
