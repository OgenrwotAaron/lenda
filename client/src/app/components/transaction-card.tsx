import { Box, Typography } from "@mui/material";
import moment from "moment";
import React from "react";
import StatusIcon, { Status } from "./status";

interface TransactionCardProps extends Transaction {}

export interface Transaction {
  title: string;
  status: Status;
  amount: string;
  entity?: string;
  date: string;
  currency?: string;
}

const TransactionCard: React.FC<TransactionCardProps> = ({
  title,
  status,
  amount,
  entity = "",
  currency = "UGX",
  date
}) => {
  return (
    <Box
      p={1}
      m={1}
      display="grid"
      gridTemplateColumns="repeat(7, 1fr)"
      gap={2}
    >
      <Box gridColumn="span 1" alignSelf="flex-end">
        <StatusIcon status={status} />
      </Box>
      <Box gridColumn="span 3" alignSelf="flex-end">
        <Typography variant="body2" fontWeight={500}>
          {title}
        </Typography>
        <Typography fontSize="11px" color="textSecondary" fontWeight={500}>
          {moment(date).fromNow()}
        </Typography>
      </Box>
      <Box gridColumn="span 3" alignSelf="flex-end">
        <Typography textAlign="end" variant="body2" fontWeight={500}>
          {currency} {amount}
        </Typography>
        <Typography
          textAlign="end"
          fontSize="11px"
          color="textSecondary"
          fontWeight={500}
        >
          {entity}
        </Typography>
      </Box>
    </Box>
  );
};

export default TransactionCard;
