import * as React from "react";
import { ISeededCheck } from "../types";

import "./../App.css";
import { Status } from "./Status";

interface ICheckProps {
  check: ISeededCheck;
}

// TODO: An employee checks that includes the Status component
// and uses colors
// success for processed checks
// error for failed checks
// info for preprocessed checks
export const EmployeeCheck = (props: ICheckProps) => {
  // fname, lname, status
  // hours, gross

  const statusLabel = props.check.status;
  return (
    <div className="checkWrapper col">
      <div className="row childRow">
        <div className="col">{props.check.employee?.firstname} {props.check.employee?.lastname}</div>
        <div className="col">
          <Status
            label={statusLabel}
          />
        </div>
      </div>
      <div className="row childRow">
        <div className="col">Hours: {props.check.hours}</div>
        <div className="col">Gross: {props.check.gross}</div>
      </div>
    </div>
  );
};
