import { Chip } from "@mui/material";
import * as React from "react";

type Color="success" | "info" | "error";

interface IStatusProps {
  label: "failed" | "pre-processing" | "processed";
}

export const labelColorMap: Record<IStatusProps["label"], Color> = {
  "failed": "error",
  "pre-processing": "info",
  "processed": "success",
};

export const Status = ({
  label,
}: IStatusProps) => <Chip label={label} color={labelColorMap[label]} />;
