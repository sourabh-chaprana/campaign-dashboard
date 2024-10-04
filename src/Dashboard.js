import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  IconButton,
  Drawer,
} from "@mui/material";
import {
  Dashboard as DashboardIcon,
  Build as BuildIcon,
  TrendingUp as TrendingUpIcon,
  BarChart as BarChartIcon,
  People as PeopleIcon,
  Notifications as NotificationsIcon,
  Help as HelpIcon,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
} from "@mui/icons-material";

const drawerWidth = 300;
const notificationWidth = 300;

const Dashboard = () => {
  // States for left and right drawers
  const [leftOpen, setLeftOpen] = useState(true);
  const [rightOpen, setRightOpen] = useState(true);

  // Toggle Left Drawer
  const toggleLeftDrawer = () => {
    setLeftOpen(!leftOpen);
  };

  // Toggle Right Drawer
  const toggleRightDrawer = () => {
    setRightOpen(!rightOpen);
  };

  return (
    <Box sx={{ display: "flex", height: "100vh", bgcolor: "#f4f5f7" }}>
      {/* Left Sidebar Drawer */}
      <Drawer
        variant="persistent"
        anchor="left"
        open={leftOpen}
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
          <Typography variant="h6" sx={{ marginBottom: 2 }}>
            Favorite
          </Typography>

          {leftOpen && ( <IconButton
        onClick={toggleLeftDrawer}
        sx={{
          position: "absolute",
          right: '20px',
          top: "10px",
          zIndex: 1300,
          bgcolor: "#fff",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          "&:hover": { bgcolor: "#f0f0f0" },
        }}
      >
        {leftOpen ? <ChevronLeftIcon /> : <ChevronRightIcon />}
      </IconButton>)}
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
          {/* Help Center */}
          <Card sx={{ marginTop: 2 }}>
            <CardContent>
              <HelpIcon color="primary" />
              <Typography variant="body2">Help Center</Typography>
              <Typography variant="caption">24/7 Online Support</Typography>
            </CardContent>
          </Card>
        </Box>
      </Drawer>

      {/* Toggle Button for Left Drawer */}
      {/* {leftOpen? <IconButton
        onClick={toggleLeftDrawer}
        sx={{
          position: "absolute",
          left: leftOpen ? drawerWidth : 0,
          top: "10px",
          zIndex: 1300,
          bgcolor: "#fff",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          "&:hover": { bgcolor: "#f0f0f0" },
        }}
      >
        {leftOpen ? <ChevronLeftIcon /> : <ChevronRightIcon />}
      </IconButton>:''  } */}



{!leftOpen && <IconButton
        onClick={toggleLeftDrawer}
        sx={{
          position: "absolute",
          left: leftOpen ? drawerWidth : 0,
          top: "10px",
          zIndex: 1300,
          bgcolor: "#fff",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          "&:hover": { bgcolor: "#f0f0f0" },
        }}
      >
        {leftOpen ? <ChevronLeftIcon /> : <ChevronRightIcon />}
      </IconButton>  }
      

      {/* Main Dashboard Content */}
      <Box
        sx={{
          flexGrow: 1,
          padding: 3,
          transition: "margin-left 0.3s ease-out, margin-right 0.3s ease-out",
          marginLeft: leftOpen ? `${drawerWidth}px` : "0px",
          marginRight: rightOpen ? `${notificationWidth}px` : "0px",
        }}
      >
        <Typography variant="h4">Your total revenue</Typography>
        <Typography variant="h3" sx={{ marginBottom: 3 }}>
          90,238.7
        </Typography>

        {/* Cards */}
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Card>
              <CardContent>
                <Typography variant="h5">Earning</Typography>
                <Typography variant="h4">45k</Typography>
                <Typography variant="body2">15% This is Card title</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card>
              <CardContent>
                <Typography variant="h5">New Leads</Typography>
                <Typography variant="h4">22</Typography>
                <Typography variant="body2">15% This is Card title</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card>
              <CardContent>
                <Typography variant="h5">Campaigns</Typography>
                <Typography variant="h4">4</Typography>
                <Typography variant="body2">12% This is Card title</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Monthly Sales Chart */}
        <Typography variant="h5" sx={{ marginTop: 4 }}>
          Monthly Sales
        </Typography>
        {/* Add chart here (e.g. with Recharts or Chart.js) */}
      </Box>

      {/* Right Sidebar Drawer */}
      <Drawer
        variant="persistent"
        anchor="right"
        open={rightOpen}
        sx={{
          width: notificationWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: notificationWidth,
            boxSizing: "border-box",
            boxShadow: "-3px 0 5px rgba(0, 0, 0, 0.1)",
          },
        }}
      >
        <Box sx={{ padding: 2 }}>
      {rightOpen &&   <IconButton
        onClick={toggleRightDrawer}
        sx={{
          position: "absolute",
          left: '15px',
          top: "10px",
          zIndex: 1300,
          bgcolor: "#fff",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          "&:hover": { bgcolor: "#f0f0f0" },
        }}
      >
        {rightOpen ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </IconButton>
        }
          <Typography variant="h6">Notification Center</Typography>
          <List>
            <ListItem>
              <ListItemIcon>
                <NotificationsIcon color="primary" />
              </ListItemIcon>
              <ListItemText
                primary="Your ad has been approved"
                secondary="Apr 4, 2024"
              />
            </ListItem>
            {/* More notifications */}
          </List>
          <Divider sx={{ marginY: 2 }} />
          <Typography variant="h6">Team Members</Typography>
          <List>
            <ListItem>
              <ListItemIcon>
                <PeopleIcon />
              </ListItemIcon>
              <ListItemText primary="Bessie Cooper" secondary="Web Designer" />
            </ListItem>
            {/* More team members */}
          </List>
        </Box>
      </Drawer>

      {/* Toggle Button for Right Drawer */}

      {!rightOpen && 
      <IconButton
        onClick={toggleRightDrawer}
        sx={{
          position: "absolute",
          right: rightOpen ? notificationWidth : 0,
          top: "10px",
          zIndex: 1300,
          bgcolor: "#fff",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          "&:hover": { bgcolor: "#f0f0f0" },
        }}
      >
        {rightOpen ? <ChevronRightIcon /> : <ChevronLeftIcon />}
      </IconButton>}
    </Box>
  );
};

export default Dashboard;
