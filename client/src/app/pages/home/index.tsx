import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { Header, Scaffold, History } from "../../components";
import moment from "moment";
import { Wallet } from "./components";
import { transactions } from "../../common/mock-data";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";

interface HomeProps {}

const getTime = () => {
  const hour = moment().hour();

  if (hour > 16) {
    return "Good evening";
  }

  if (hour > 11) {
    return "Good afternoon";
  }

  return "Good morning";
};

const Home: React.FC<HomeProps> = () => {
  return (
    <Box height="100%">
      <Box p={2}>
        <Header title="Lenda" subtitle={`${getTime()}, John`} avatar />
        <Wallet />
      </Box>
      <Box
        p={3}
        borderRadius={2}
        sx={{ background: "#005697" }}
        mb={2}
        marginX={2}
      >
        <Typography sx={{ color: "white" }} fontWeight={500}>
          Loan Request
        </Typography>
        <Typography sx={{ color: "lightgray" }} variant="body2">
          Request for a loan and get money on your Mobile Money or App Wallet
        </Typography>
        <Button
          variant="contained"
          sx={{ borderRadius: 25, padding: 2, marginTop: 2 }}
          startIcon={<AddCircleOutlineOutlinedIcon />}
        >
          Create Loan Application
        </Button>
      </Box>
      <Scaffold title="Recent Transactions" viewAll path="transactions">
        <History history={transactions} />
      </Scaffold>
    </Box>
  );
};

export default Home;
