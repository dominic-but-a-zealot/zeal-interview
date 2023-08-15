import { Chip } from "@mui/material";
import * as React from "react";

export const Status = ({
  label,
  color,
}: {
  label: string;
  color: "success" | "info" | "error";
}) => <Chip label={label} color={color} />;
