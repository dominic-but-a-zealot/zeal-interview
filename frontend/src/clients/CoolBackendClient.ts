import { AllEmployees, AllWorkAddresses } from "./sampleChecks";

const CreateCheck =
  (status: "failed" | "pre-processing" | "processed") =>
  (employeeID: string) => ({
    id: "" + Math.random().toString(16).slice(2),
    employeeID,
    hours: "40",
    gross: `$ ${Math.floor(Math.random() * 10) * 1000}`,
    status,
    workAddressID: "1234567",
  });

export class CoolBackendClient {
  updatedAddress: Record<string, string>;

  constructor() {
    this.updatedAddress = {};
  }

  generatePayrollChecks = (users: Array<string>) =>
    Promise.resolve(
      users.map(CreateCheck("pre-processing")).map((a) => ({
        ...a,
        employee: AllEmployees.find((em) => em.id === a.employeeID),
        workaddressID: this.updatedAddress[a.employeeID] ?? a.workAddressID,
      })),
    );

  getWorkAddress = (workAddressID: string) =>
    Promise.resolve(AllWorkAddresses.find(({ id }) => id === workAddressID));

  getUserPayrollHistory = (user: string) =>
    Promise.resolve(
      [...Array(4)].map((_, idx) =>
        CreateCheck(idx / 2 !== 1 ? "processed" : "failed")(user),
      ),
    );

  updateUserWorkAddress = ({
    employeeID,
    workAddressID,
  }: {
    employeeID: string;
    workAddressID: string;
  }) =>
    Promise.resolve(
      (this.updatedAddress = {
        ...this.updatedAddress,
        [employeeID]: workAddressID,
      }),
    );
}