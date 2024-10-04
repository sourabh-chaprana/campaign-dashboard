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
  Card,
  CardContent,
} from "@mui/material";
import {
  Dashboard as DashboardIcon,
  Build as BuildIcon,
  TrendingUp as TrendingUpIcon,
  BarChart as BarChartIcon,
  People as PeopleIcon,
  Help as HelpIcon,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
} from "@mui/icons-material";
import SingleAvatarList from "../components/SingleAvatarList";

const drawerWidth = 300;

const LeftSidebar = ({ open, toggleDrawer }) => {
  return (
    <Drawer
      variant="persistent"
      anchor="left"
      open={open}
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          boxShadow: "3px 0 5px rgba(0, 0, 0, 0.1)",
        },
      }}
    >
      <Box sx={{ padding: 2 }}>
        <SingleAvatarList />
        <Typography variant="h6" sx={{ marginBottom: 2 }}>
          Favorite
        </Typography>

        <IconButton
          onClick={toggleDrawer}
          sx={{
            position: "absolute",
            right: "20px",
            top: "10px",
            zIndex: 1300,
            bgcolor: "#fff",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            "&:hover": { bgcolor: "#f0f0f0" },
          }}
        >
          {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>

        <List>
          <ListItem button>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <BuildIcon />
            </ListItemIcon>
            <ListItemText primary="Customization Options" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <TrendingUpIcon />
            </ListItemIcon>
            <ListItemText primary="Campaign Trend" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="Target Audience" />
          </ListItem>
        </List>
        <Divider />
        <Typography variant="h6" sx={{ marginTop: 2, marginBottom: 2 }}>
          Main Menu
        </Typography>
        <List>
          <ListItem button>
            <ListItemIcon>
              <BarChartIcon />
            </ListItemIcon>
            <ListItemText primary="Budget Allocation" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="Content Creation Tools" />
          </ListItem>
        </List>
        <Card sx={{ marginTop: 2 }}>
          <CardContent>
            <HelpIcon color="primary" />
            <Typography variant="body2">Help Center</Typography>
            <Typography variant="caption">24/7 Online Support</Typography>
          </CardContent>
        </Card>
      </Box>
    </Drawer>
  );
};

export default LeftSidebar;
