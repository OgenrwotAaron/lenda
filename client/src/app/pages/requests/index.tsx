import { Box } from "@mui/material";
import React from "react";
import { Header, Scaffold } from "../../components";
import LoanCard, { Loan } from "./components/loan-card";

interface RequestsProps {}

const requests: Pick<
  Loan,
  | "amount"
  | "loanRef"
  | "status"
  | "releaseDate"
  | "maturityDate"
  | "repayments"
>[] = [
  {
    releaseDate: "2022-09-02T06:23:22",
    loanRef: "SL001",
    amount: 20000,
    status: "repaid",
    maturityDate: "2022-10-20T06:23:22"
  },
  {
    releaseDate: "2022-10-02T06:23:22",
    loanRef: "BL453",
    amount: 137000,
    status: "cancelled",
    maturityDate: "2022-10-16T06:23:22"
  },
  {
    releaseDate: "2022-10-02T06:23:22",
    loanRef: "CL141",
    amount: 350000,
    status: "active",
    maturityDate: "2022-10-25T06:23:22",
    repayments: [100000, 150000]
  },
  {
    releaseDate: "2022-10-01T06:23:22",
    loanRef: "BL731",
    amount: 70000,
    status: "denied",
    maturityDate: "2022-11-30T06:23:22"
  },
  {
    releaseDate: "2022-10-02T06:23:22",
    loanRef: "S903",
    amount: 850000,
    status: "processing",
    maturityDate: "2022-10-07T06:23:22"
  },
  {
    releaseDate: "2022-10-02T06:23:22",
    loanRef: "SL783",
    amount: 12000000,
    status: "cancelled",
    maturityDate: "2022-12-31T06:23:22"
  },
  {
    releaseDate: "2022-10-02T06:23:22",
    loanRef: "SL783",
    amount: 6000,
    status: "overdue",
    maturityDate: "2022-10-09T06:23:22",
    repayments: [3000, 500]
  }
];

const Requests: React.FC<RequestsProps> = () => {
  return (
    <Box height="100%">
      <Box p={2}>
        <Header title="Requests" subtitle="Loan Requests" />
      </Box>

      <Scaffold title="" height="77%">
        <Box mb={5}>
          {requests
            .sort(
              (a, b) =>
                new Date(b.releaseDate).getTime() -
                new Date(a.releaseDate).getTime()
            )
            .map((request, i) => (
              <LoanCard key={i} {...request} />
            ))}
        </Box>
      </Scaffold>
    </Box>
  );
};

export default Requests;
