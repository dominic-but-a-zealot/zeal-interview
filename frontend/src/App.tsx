import * as React from "react";
import "./App.css";
import { useState } from "react";
import { AllEmployees } from "./clients/sampleChecks";
import {
  Box,
  Button,
  Checkbox,
  Typography,
  FormControlLabel,
} from "@mui/material";
import { CoolBackendClient } from "./clients/CoolBackendClient";
import { IEmployee, ISeededCheck } from "./types";
import { EmployeeCheck } from "./components/EmployeeCheck";

function App() {
  // TODO: Fix adding users
  // TODO: Get checks for a list of users
  const backendClient = new CoolBackendClient();
  const [employees, setEmployees] = useState<Array<IEmployee>>([]);
  const [users, setUsers] = useState<Array<string>>([]);
  const [checks, setChecks] = useState<Array<ISeededCheck>>([]);

  const addUser = (empID: string) => {
    users.push(empID);
    setUsers(users);
  };

  const fetchEmployees = async () => {
    const emps = await backendClient.getEmployees();
    setEmployees(emps);
  };

  React.useEffect(() => {
    fetchEmployees();
  }, []);

  const createCheck = async () => {
    const checks = await backendClient.generatePayrollChecks(users) as Array<ISeededCheck>;
    setChecks(checks);
  };

  return (
    <div className="App">
      <header className="App-header">
        Welcome to Federation Payroll Inc.
      </header>
      <Typography variant="h3" mt={1} ml={2} textAlign={"left"}>
        Upcoming payroll
      </Typography>
      <Box style={{ display: "flex", gap: "100px" }} p={2}>
        <div>
          <Typography variant="h6" textAlign={"left"}>
            All employees{" "}
          </Typography>
          <Box
            alignItems={"flex-start"}
            sx={{ display: "flex", flexDirection: "column" }}
          >
            {employees.map((emp) => (
              <Box>
                <FormControlLabel
                  control={<Checkbox onChange={() => addUser(emp.id)} />}
                  label={`${emp.firstname} ${emp.lastname}`}
                />
              </Box>
            ))}
            <Button
              disabled={users.length === 0}
              onClick={createCheck}
              sx={{ textTransform: "capitalize" }}
              variant="contained"
              fullWidth
            >
              Preview checks
            </Button>
          </Box>{" "}
        </div>
        <Box>
          <Typography variant="h6">Employee checks for Aug 14 2023</Typography>
          {checks.length && (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                mt: 2,
              }}
            >
              {checks.map((check) => (
                <EmployeeCheck check={check} />
              ))}
            </Box>
          )}
        </Box>
      </Box>
      <Box mt={4} p={2}>
        <Typography variant="h3" textAlign={"left"}>
          Previous payrolls
        </Typography>
        <Typography variant="subtitle1" textAlign={"left"}>
          Choose an employee to view their payroll history
        </Typography>
        {/* // TODO: List employees and fetch previous checks */}
      </Box>
    </div>
  );
}

export default App;
