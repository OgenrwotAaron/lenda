import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { colors } from "../../theme";

interface HeaderProps {
  title: string;
  subtitle: string;
}

const Header: React.FC<HeaderProps> = ({ title, subtitle }) => {
  const theme = useTheme();
  return (
    <Box mb="30px">
      <Typography
        variant="h2"
        color={colors[theme.palette.mode].grey[100]}
        fontWeight="bold"
        sx={{ m: "0 0 5px 0" }}
      >
        {title}
      </Typography>
      <Typography
        variant="h5"
        color={colors[theme.palette.mode].greenAccent[400]}
      >
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Header;
