import React from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  IconButton,
  Drawer,
} from "@mui/material";
import {
  People as PeopleIcon,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
} from "@mui/icons-material";
import TeamMembersList from "../components/TeamMemberList";
import Notification from "../components/Notification";
import { styled, useTheme } from '@mui/material/styles';


const notificationWidth = 350;



const RightSidebar = ({ open, toggleDrawer }) => {
  const theme = useTheme();

  const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));

  return (
    <Drawer
      variant="persistent"
      anchor="right"
      open={open}
      sx={{
        width: open ? notificationWidth : 0, // Adjust width based on open state
        transition: "width 0.3s ease-out",
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: open ? notificationWidth : 0, // Adjust width based on open state
          boxSizing: "border-box",
          boxShadow: "-3px 0 5px rgba(0, 0, 0, 0.1)",
        },
      }}
    >

          <DrawerHeader>
        <IconButton
          onClick={toggleDrawer}
          sx={{
            position: "absolute",
            left: "15px",
            top: "10px",
            zIndex: 1300,
            bgcolor: "#fff",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            "&:hover": { bgcolor: "#f0f0f0" },
          }}
        >
          {open ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </IconButton>

        </DrawerHeader>
        <Divider />   
      <Box sx={{ padding: 2 }}>
 
       
        <Typography variant="h6">Team Members</Typography>
        <List>
          {/* More team members */}
          <TeamMembersList />
        </List>
        <Divider sx={{ marginY: 2 }} />
         

        <Typography variant="h6">Notification Center</Typography>
         <List>
          <Notification />
          {/* More notifications */}
        </List>
      </Box>
    </Drawer>
  );
};

export default RightSidebar;
