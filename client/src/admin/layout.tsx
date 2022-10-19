import React from "react";
import {
  AppBar,
  AppBarProps,
  ToggleThemeButton,
  Layout,
  LayoutProps
} from "react-admin";
import { Box, Typography } from "@mui/material";
import { defaultTheme, darkTheme } from "./theme";

interface MyAppBarProps {}

const MyAppBar: React.FC<MyAppBarProps & AppBarProps> = props => {
  return (
    <AppBar {...props}>
      <Box flex={1}>
        <Typography variant="h6" id="react-admin-title"></Typography>
      </Box>
      <ToggleThemeButton lightTheme={defaultTheme} darkTheme={darkTheme} />
    </AppBar>
  );
};

const MyLayout = (props: LayoutProps) => (
  <Layout {...props} appBar={MyAppBar} />
);

export default MyLayout;
