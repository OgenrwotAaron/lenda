import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { colors } from "../../theme";

interface StatCardProps {
  title: string;
  value: number;
  icon: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, icon }) => {
  const theme = useTheme();
  return (
    <Box
      //backgroundColor={colors[theme.palette.mode].primary[400]}
      width="100%"
      padding="10px"
      borderRadius={2}
      display="flex"
      justifyContent="space-between"
      alignItems={"center"}
      sx={{ backgroundColor: colors[theme.palette.mode].primary[400] }}
    >
      <Box>{icon}</Box>
      <Box>
        <Typography
          variant="h1"
          fontWeight="bold"
          align="right"
          sx={{ color: colors[theme.palette.mode].grey[100] }}
        >
          {value}
        </Typography>
        <Typography
          variant="h5"
          sx={{ color: colors[theme.palette.mode].greenAccent[500] }}
        >
          {title}
        </Typography>
      </Box>
    </Box>
  );
};

export default StatCard;
