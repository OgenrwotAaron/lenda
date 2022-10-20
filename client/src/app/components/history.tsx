import { Box } from "@mui/material";
import React from "react";
import TransactionCard, { Transaction } from "./transaction-card";

interface HistoryProps {
  history?: Transaction[];
}

const History: React.FC<HistoryProps> = ({ history = [] }) => {
  return (
    <Box mb={10}>
      {history
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .map((item, i) => (
          <TransactionCard key={i} {...item} />
        ))}
    </Box>
  );
};

export default History;
