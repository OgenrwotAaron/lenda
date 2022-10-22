import {
  Box,
  Button,
  Icon,
  IconButton,
  InputAdornment,
  TextField,
  Typography
} from "@mui/material";
import React, { useState } from "react";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import KeyOutlinedIcon from "@mui/icons-material/KeyOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import { Link, useNavigate } from "react-router-dom";

interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
  const [showPwd, setShowPwd] = useState(false);

  const navigate = useNavigate();

  return (
    <Box
      p={3}
      height="94.5%"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      sx={{ background: "white", overflow: "hidden" }}
    >
      <Box height={"100%"}>
        <Icon sx={{ fontSize: 150, width: "100%" }}>
          <AdminPanelSettingsOutlinedIcon sx={{ fontSize: 150 }} />
        </Icon>

        <Typography align="center" variant="h4" fontWeight={700}>
          Log In to your account
        </Typography>
        <Typography variant="body2" color="textSecondary" align="center">
          Enter your Password and Username to login to your Lenda account
        </Typography>
        <Box
          p={3}
          mt={5}
          borderRadius={3}
          sx={{ border: "1px solid lightgray" }}
          mb={2}
        >
          <Box mb={2}>
            <TextField
              placeholder="Email"
              fullWidth
              size="small"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailOutlinedIcon />
                  </InputAdornment>
                )
              }}
            />
          </Box>
          <Box mb={2}>
            <TextField
              placeholder="Password"
              fullWidth
              size="small"
              type={showPwd ? "text" : "password"}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <KeyOutlinedIcon />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => setShowPwd(prev => !prev)}>
                      {showPwd ? (
                        <VisibilityOutlinedIcon />
                      ) : (
                        <VisibilityOffOutlinedIcon />
                      )}
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
          </Box>
          <Button
            fullWidth
            variant="contained"
            onClick={() => navigate("/home")}
          >
            Log In
          </Button>
        </Box>
        <Typography
          sx={{ marginBottom: 2 }}
          variant="body2"
          color="textSecondary"
          align="center"
        >
          Don't have an account? <Link to="/sign-up">Register</Link>
        </Typography>
        <Typography align="center" variant="body2">
          <Link to="/forgot">Forgot Password</Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default Login;
