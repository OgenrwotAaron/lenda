import React from "react";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import AutorenewOutlinedIcon from "@mui/icons-material/AutorenewOutlined";
import DoDisturbOutlinedIcon from "@mui/icons-material/DoDisturbOutlined";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import PublishedWithChangesOutlinedIcon from "@mui/icons-material/PublishedWithChangesOutlined";
import SyncProblemOutlinedIcon from "@mui/icons-material/SyncProblemOutlined";
import NoAccountsOutlinedIcon from "@mui/icons-material/NoAccountsOutlined";
import { Chip, Icon } from "@mui/material";
import { LoanStatus } from "../pages/requests/components/loan-card";

interface StatusIconProps {
  status: Status;
}

interface LoanStatusIconProps {
  status: LoanStatus;
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
  Status | LoanStatus,
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
  active: {
    label: "Active",
    color: "success",
    icon: <PublishedWithChangesOutlinedIcon color="success" />
  },
  repaid: {
    label: "Repaid",
    color: "info",
    icon: <CheckCircleOutlineOutlinedIcon color="info" />
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
  },
  denied: {
    label: "Denied",
    color: "error",
    icon: <NoAccountsOutlinedIcon color="error" />
  },
  pending: {
    label: "Pending",
    color: "warning",
    icon: <ErrorOutlineOutlinedIcon color="error" />
  },
  overdue: {
    label: "Overdue",
    color: "error",
    icon: <SyncProblemOutlinedIcon color="error" />
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

export const LoanStatusChip: React.FC<LoanStatusIconProps> = ({ status }) => {
  const { label, color } = statusMapper[status];
  return (
    <Chip
      label={label.toLocaleUpperCase()}
      color={color}
      sx={{ width: "100%", opacity: "0.85" }}
    />
  );
};

export const LoanStatusIcon: React.FC<LoanStatusIconProps> = ({ status }) => {
  const { icon } = statusMapper[status];
  return <Icon>{icon}</Icon>;
};

export default StatusIcon;
