import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  List,
  Button
} from "@mui/material";
import React from "react";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import LockResetIcon from "@mui/icons-material/LockReset";
import ContactSupportOutlinedIcon from "@mui/icons-material/ContactSupportOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { useNavigate } from "react-router-dom";

interface ProfileMenuProps {}

const menuItems: {
  icon: React.ReactElement;
  title: string;
  href?: string;
}[] = [
  {
    icon: <DescriptionOutlinedIcon />,
    title: "Terms & Condition",
    href: "/terms"
  },
  { icon: <ContactSupportOutlinedIcon />, title: "Contact Support", href: "#" },
  { icon: <LockResetIcon />, title: "Reset Password", href: "/password-reset" },
  { icon: <SettingsOutlinedIcon />, title: "Settings", href: "/settings" }
];

const ProfileMenu: React.FC<ProfileMenuProps> = () => {
  const navigate = useNavigate();
  return (
    <List>
      {menuItems.map(({ icon, title, href = "" }, key) => (
        <ListItem key={key}>
          <ListItemButton href={href}>
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText primary={title} />
          </ListItemButton>
        </ListItem>
      ))}
      <ListItem>
        <ListItemButton>
          <ListItemIcon></ListItemIcon>
          <ListItemText
            primary={
              <>
                <Button
                  variant="contained"
                  endIcon={<PowerSettingsNewIcon />}
                  onClick={() => navigate("/login")}
                >
                  Sign Out
                </Button>
              </>
            }
          />
        </ListItemButton>
      </ListItem>
    </List>
  );
};

export default ProfileMenu;
