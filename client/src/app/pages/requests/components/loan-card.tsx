import { Box, CardActionArea, Divider, Typography } from "@mui/material";
import React from "react";
import { LoanStatusChip, LoanStatusIcon } from "../../../components/status";
import moment from "moment";
import { LinearProgressWithLabel } from "../../../components";
import { formatNumber } from "../../../../utils/string";
import { useNavigate } from "react-router-dom";

interface LoanCardProps
  extends Pick<
    Loan,
    | "amount"
    | "loanRef"
    | "status"
    | "releaseDate"
    | "maturityDate"
    | "repayments"
  > {}

export type LoanStatus =
  | "denied"
  | "cancelled"
  | "pending"
  | "processing"
  | "active"
  | "repaid"
  | "overdue";
export interface Loan {
  id: string;
  amount: number;
  duration: string;
  repaymentType: "daily" | "monthly" | "yearly" | "weekly" | "fortnighly";
  repaymentAmount: string;
  releaseDate: string;
  maturityDate: string;
  balance: number;
  status: LoanStatus;
  loanRef: string;
  interest: number;
  repayments?: number[];
}

const LoanCard: React.FC<LoanCardProps> = ({
  amount,
  loanRef,
  status,
  releaseDate,
  maturityDate,
  repayments = []
}) => {
  const navigate = useNavigate();

  const start = moment(releaseDate);
  const end = moment(maturityDate);
  const current = moment(Date.now());

  const duration = end.diff(start, "days");
  const daysLeft = end.diff(current, "days");
  const daysPast = current.diff(end, "days");

  const totalRepayments = repayments.reduce<number>((a, b) => a + b, 0);
  const paid = (totalRepayments / amount) * 100;

  return (
    <CardActionArea
      onClick={() => navigate(`/requests/${loanRef}`)}
      sx={{
        borderRadius: 2,
        padding: 2,
        marginBottom: 2,
        border: "2px solid #efefef",
        background: "white"
      }}
    >
      <Box display="grid" gridTemplateColumns="repeat(3, 1fr)" gap={1}>
        <Box gridColumn="span 2">
          <Box display="grid" gridTemplateColumns="repeat(10, 1fr)" gap={1}>
            <Box gridColumn="span 1">
              <LoanStatusIcon status={status} />
            </Box>
            <Box gridColumn="span 9" alignSelf="center">
              <Typography variant="body2" fontWeight={500}>
                #{loanRef}
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box gridColumn="span 1" alignSelf="center">
          <Typography fontSize="11px" color="textSecondary" textAlign="right">
            {duration} Days
          </Typography>
        </Box>
        <Box gridColumn="span 3" m={0} p={0}>
          <Divider />
        </Box>

        <Box gridColumn="span 2" alignSelf="center">
          <Typography fontWeight={700} variant="h5">
            UGX {formatNumber(amount, 0)}
          </Typography>
          {status === "overdue" && (
            <>
              <Typography variant="caption" color="textSecondary">
                Overdue by {daysPast} days
              </Typography>
              <LinearProgressWithLabel color="error" value={paid} />
            </>
          )}{" "}
          {status === "active" && (
            <>
              <Typography variant="caption" color="textSecondary">
                Loan due in {daysLeft} days.
              </Typography>
              <LinearProgressWithLabel color="info" value={paid} />
            </>
          )}
        </Box>
        <Box gridColumn="span 1">
          <LoanStatusChip status={status} />
        </Box>
      </Box>
    </CardActionArea>
  );
};

export default LoanCard;
