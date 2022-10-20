import { Box } from "@mui/material";
import React from "react";
import { Header, Scaffold } from "../../components";
import LoanCard from "./components/loan-card";

interface RequestsProps {}

const Requests: React.FC<RequestsProps> = () => {
  return (
    <Box height="100%">
      <Box p={2}>
        <Header title="Requests" subtitle="Loan Requests" />
      </Box>

      <Scaffold title="" height="78%">
        <LoanCard
          releaseDate="02/10/2024"
          loanRef="SL001"
          amount={20000}
          status="completed"
        />
        <LoanCard
          releaseDate="02/10/2024"
          loanRef="BL453"
          amount={137000}
          status="cancelled"
        />
        <LoanCard
          releaseDate="02/10/2024"
          loanRef="CL141"
          amount={350000}
          status="completed"
        />
        <LoanCard
          releaseDate="02/10/2024"
          loanRef="BL731"
          amount={70000}
          status="failed"
        />
        <LoanCard
          releaseDate="02/10/2024"
          loanRef="S903"
          amount={850000}
          status="processing"
        />
        <LoanCard
          releaseDate="02/10/2024"
          loanRef="SL783"
          amount={12000000}
          status="completed"
        />
      </Scaffold>
    </Box>
  );
};

export default Requests;
