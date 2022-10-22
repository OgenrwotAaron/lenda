import { Avatar, Box, IconButton, Typography } from "@mui/material";
import React from "react";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  title: string;
  subtitle?: string;
  back?: boolean;
  avatar?: boolean;
}

const Header: React.FC<HeaderProps> = ({
  title,
  subtitle,
  back = false,
  avatar = false
}) => {
  const navigate = useNavigate();

  return (
    <Box display="grid" gridTemplateColumns={`repeat(20,1fr)`}>
      {back && (
        <Box gridColumn="span 1">
          <IconButton onClick={() => navigate(-1)}>
            <ArrowBackOutlinedIcon />
          </IconButton>
        </Box>
      )}
      <Box gridColumn="span 17">
        <Typography variant="h4" fontWeight={500}>
          {title}
        </Typography>
        {subtitle && (
          <Typography color="textSecondary" variant="caption">
            {subtitle}
          </Typography>
        )}
      </Box>
      {avatar && (
        <Box gridColumn="span 3">
          <IconButton onClick={() => navigate("/profile")} aria-haspopup="true">
            <Avatar
              sx={{
                backgroundColor: "white",
                color: "black",
                border: "2px solid #03a9f0"
              }}
            >
              JD
            </Avatar>
          </IconButton>
        </Box>
      )}
    </Box>
  );
};

export default Header;
