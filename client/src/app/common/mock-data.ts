import { Transaction } from "../components/transaction-card";

export const transactions: Transaction[] = [
  {
    title: "Deposit",
    amount: "55,000",
    status: "cancelled",
    date: "2022-10-20T06:23:22",
    entity: "Wallet"
  },
  {
    title: "Deposit",
    amount: "55,000",
    status: "completed",
    date: "2022-10-20T07:23:22",
    entity: "Wallet"
  },
  {
    title: "Withdraw",
    amount: "5,000",
    status: "completed",
    date: "2022-10-02T06:23:22",
    entity: "Wallet"
  },
  {
    title: "Bonus",
    amount: "200",
    status: "completed",
    date: "2022-10-15T06:23:22",
    entity: "Account Bonus"
  },
  {
    title: "Deposit",
    amount: "10,000",
    status: "processing",
    date: "2022-10-04T06:23:22",
    entity: "Wallet"
  },
  {
    title: "Withdraw",
    amount: "100,000",
    status: "failed",
    date: "2022-10-18T06:23:22",
    entity: "Wallet"
  }
];
