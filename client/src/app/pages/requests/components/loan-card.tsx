import { Box, Typography } from "@mui/material";
import React from "react";
import { Status, StatusChip } from "../../../components/status";

interface LoanCardProps
  extends Pick<Loan, "amount" | "loanRef" | "status" | "releaseDate"> {}

export interface Loan {
  amount: number;
  duration: string;
  repaymentType: "daily" | "monthly" | "yearly" | "weekly" | "fortnighly";
  repaymentAmount: string;
  releaseDate: string;
  maturityDate: string;
  balance: number;
  status: Status;
  loanRef: string;
}

const LoanCard: React.FC<LoanCardProps> = ({
  amount,
  loanRef,
  status,
  releaseDate
}) => {
  return (
    <Box
      display="grid"
      gridTemplateColumns="repeat(3, 1fr)"
      gap={2}
      mb={2}
      p={2}
      borderRadius={2}
      sx={{ border: "1px solid lightgray" }}
    >
      <Box gridColumn="span 2">
        <Typography fontWeight={700}>#{loanRef}</Typography>
        <Typography variant="body2" mt={1} color="textSecondary">
          UGX {amount}
        </Typography>
      </Box>
      <Box gridColumn="span 1">
        <StatusChip status={status} />
        <Typography variant="body2" mt={1} color="textSecondary">
          {releaseDate}
        </Typography>
      </Box>
    </Box>
  );
};

export default LoanCard;
