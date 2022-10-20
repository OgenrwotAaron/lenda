import { Box, Typography, IconButton, Button } from "@mui/material";
import React, { useState } from "react";

import AddIcon from "@mui/icons-material/Add";
import ArrowDownwardOutlinedIcon from "@mui/icons-material/ArrowDownwardOutlined";

import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";

interface WalletProps {}

const Wallet: React.FC<WalletProps> = () => {
  const [show, setShow] = useState(false);
  return (
    <Box
      p={2}
      mt={1}
      mb={1}
      borderRadius={3}
      sx={{
        backgroundImage: "url(/bg-wallet.png)",
        backgroundSize: "cover",
        boxShadow: "0 10px 32px 0 rgba( 31, 38, 135, 0.37 )"
      }}
    >
      <Typography variant="body2">My Wallet</Typography>
      <Box display="grid" gridTemplateColumns="repeat(3, 1fr)" gap={2}>
        <Box gridColumn="span 2" alignSelf="flex-end">
          <Typography variant="h2" fontWeight={500}>
            UGX {show ? "5000" : "****"}
          </Typography>
        </Box>
        <Box gridColumn="span 1">
          <IconButton onClick={() => setShow(prev => !prev)}>
            {show ? (
              <VisibilityOffOutlinedIcon color="primary" fontSize="large" />
            ) : (
              <VisibilityOutlinedIcon color="primary" fontSize="large" />
            )}
          </IconButton>
        </Box>
      </Box>

      <Box display="grid" gridTemplateColumns="repeat(2, 1fr)" gap={2} mt={1}>
        <Box gridColumn="span 1">
          <Button startIcon={<AddIcon />} variant="contained" size="small">
            Deposit
          </Button>
        </Box>
        <Box gridColumn="span 1" sx={{ placeSelf: "flex-end" }}>
          <Button
            startIcon={<ArrowDownwardOutlinedIcon />}
            variant="outlined"
            size="small"
          >
            Withdraw
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Wallet;
