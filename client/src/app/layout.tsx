import {
  BottomNavigation,
  BottomNavigationAction,
  Paper,
  ThemeProvider
} from "@mui/material";
import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import PersonIcon from "@mui/icons-material/Person";
import { defaultTheme } from "./theme";
import HomeIcon from "@mui/icons-material/Home";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import HomeRepairServiceOutlinedIcon from "@mui/icons-material/HomeRepairServiceOutlined";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";

interface LayoutProps {}

const routes: string[] = ["/requests", "/", "/profile"];

const Layout: React.FC<LayoutProps> = () => {
  const [value, setValue] = useState(1);
  const navigate = useNavigate();

  return (
    <ThemeProvider theme={defaultTheme}>
      <div
        style={{
          height: "100vh",
          background: "linear-gradient(271deg, #007ad6ff, #03a9f0)"
        }}
      >
        <Outlet />
      </div>
      <Paper
        elevation={0}
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(_event, val) => {
            setValue(val);
            navigate(routes[val]);
          }}
        >
          <BottomNavigationAction
            label="Loans"
            icon={
              value === 0 ? (
                <HomeRepairServiceIcon />
              ) : (
                <HomeRepairServiceOutlinedIcon />
              )
            }
          />
          <BottomNavigationAction
            label="Home"
            icon={value === 1 ? <HomeIcon /> : <HomeOutlinedIcon />}
          />
          <BottomNavigationAction
            label="Profile"
            icon={value === 2 ? <PersonIcon /> : <PermIdentityOutlinedIcon />}
          />
        </BottomNavigation>
      </Paper>
    </ThemeProvider>
  );
};

export default Layout;
