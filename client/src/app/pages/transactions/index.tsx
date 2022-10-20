import { Box } from "@mui/material";
import React from "react";
import { Header } from "../../components";

interface TransactionsProps {}

const Transactions: React.FC<TransactionsProps> = () => {
  return (
    <Box p={2}>
      <Header back title="Transactions" subtitle="List of all transactions" />
    </Box>
  );
};

export default Transactions;
