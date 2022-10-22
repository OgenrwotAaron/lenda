import { Avatar, Box, Button, Typography } from "@mui/material";
import React from "react";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";

interface ProfileDetailsProps {}

const ProfileDetails: React.FC<ProfileDetailsProps> = () => {
  return (
    <Box p={2} display="grid" gap={1} gridTemplateColumns="repeat(5,1fr)">
      <Box gridColumn="span 1">
        <Avatar
          sx={{
            bgcolor: "white",
            color: "black",
            borderRadius: 2,
            width: 100,
            height: 100
          }}
          variant="rounded"
        >
          JD
        </Avatar>
      </Box>
      <Box gridColumn="span 3">
        <Typography>John Doe</Typography>
        <Typography variant="body2">+256 (0)78 1234 567</Typography>
        <Typography variant="body2">NIN CM0123456789</Typography>
        <Typography variant="body2">john@doe.com</Typography>
        <Button
          endIcon={
            <CheckCircleOutlineOutlinedIcon
              sx={{ color: "white" }}
              fontSize="small"
            />
          }
          size="small"
          sx={{ color: "white", padding: 0 }}
        >
          Verified
        </Button>
      </Box>
    </Box>
  );
};

export default ProfileDetails;
