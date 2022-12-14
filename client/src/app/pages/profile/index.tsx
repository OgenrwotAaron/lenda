import { Box, Typography } from "@mui/material";
import React from "react";
import { Header, Scaffold } from "../../components";
import { ProfileDetails, ProfileMenu } from "./components";

interface ProfileProps {}

const Profile: React.FC<ProfileProps> = () => {
  return (
    <Box height="100%">
      <Box p={2}>
        <Header title="My Profile" />
      </Box>
      <ProfileDetails />
      <Scaffold title="" height="78%">
        <Box p={2}>
          <ProfileMenu />
          <Typography align="center" fontWeight={700}>
            LENDA &copy;
          </Typography>
          <Typography variant="body2" align="center">
            v0.1.0
          </Typography>
        </Box>
      </Scaffold>
    </Box>
  );
};

export default Profile;
