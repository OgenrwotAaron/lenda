import React from "react";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import AutorenewOutlinedIcon from "@mui/icons-material/AutorenewOutlined";
import DoDisturbOutlinedIcon from "@mui/icons-material/DoDisturbOutlined";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import { Chip } from "@mui/material";

interface StatusIconProps {
  status: Status;
}

export type Status = "completed" | "cancelled" | "processing" | "failed";

export type Color =
  | "success"
  | "info"
  | "warning"
  | "error"
  | "default"
  | "primary"
  | "secondary"
  | undefined;

const statusMapper: Record<
  Status,
  { color: Color; icon: React.ReactElement; label: string }
> = {
  completed: {
    label: "Completed",
    color: "success",
    icon: <CheckCircleOutlineOutlinedIcon color="success" />
  },
  processing: {
    label: "Processing",
    color: "info",
    icon: <AutorenewOutlinedIcon color="info" />
  },
  cancelled: {
    label: "Cancelled",
    color: "warning",
    icon: <DoDisturbOutlinedIcon color="warning" />
  },
  failed: {
    label: "Failed",
    color: "error",
    icon: <ErrorOutlineOutlinedIcon color="error" />
  }
};

const StatusIcon: React.FC<StatusIconProps> = ({ status }) => {
  return <>{statusMapper[status].icon}</>;
};

export const StatusChip: React.FC<StatusIconProps> = ({ status }) => {
  const { label, color } = statusMapper[status];
  return (
    <Chip
      label={label.toLocaleUpperCase()}
      color={color}
      size="small"
      sx={{ width: "100%", opacity: "0.85" }}
    />
  );
};
export default StatusIcon;
