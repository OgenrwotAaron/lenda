import React from "react";
import { Box, Grid } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import { Header, StatCard } from "./components";

interface DashboardProps {}

const stats: { title: string; value: number; icon: any }[] = [
  {
    title: "USERS",
    value: 500,
    icon: <PersonAddIcon fontSize="large" />
  },
  {
    title: "DEPOSITS (UGX)",
    value: 50,
    icon: <PointOfSaleIcon fontSize="large" />
  },
  {
    title: "CHARGES (UGX)",
    value: 200,
    icon: <TrafficIcon fontSize="large" />
  },
  {
    title: "BALANCE (UGX)",
    value: 17800,
    icon: <EmailIcon fontSize="large" />
  }
];

const Dashboard: React.FC<DashboardProps> = () => {
  return (
    <Box m="20px">
      <Header title="DASHBOARD" subtitle="Welcome to Lenda Dashboard" />
      <Grid container spacing={4}>
        {stats.map((stat, i) => (
          <Grid key={i} item xs={12} md={3}>
            <StatCard {...stat} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Dashboard;
