import * as React from 'react';
import { useEffect } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import GroupIcon from '@mui/icons-material/Group';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import DateRangeIcon from '@mui/icons-material/DateRange';
import MovingIcon from '@mui/icons-material/Moving';
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
import { Avatar, Chip } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import SettingsIcon from '@mui/icons-material/Settings';
import { Link } from 'react-router-dom';

const drawerWidth = 300;

const options = [
  {
    title: 'Dashboard',
    icon: <DashboardIcon />,
    path:'/dashboard'
  },

  {
    title: 'List Of Campaign',
    icon: <ContentPasteIcon />,
    path:'campaign-list'
  },
  {
    title: 'Analytics',
    icon: <AnalyticsIcon />,
    path:'/analytics'
  },
  {
    title: 'Audience Manager',
    icon: <GroupIcon />,
  },
  // {
  //   title: 'List Of Campaign',
  //   icon: <ContentPasteIcon />,
  //   path:'campaign-list'
  // },
  {
    title: 'Content Library',
    icon: <DateRangeIcon />,
  },
  {
    title: 'Campaign Scheduled',
    icon: <DateRangeIcon />,
  },
  {
    title: 'Custom Report Generation',
    icon: <ReportGmailerrorredIcon />,
  },
  {
    title: 'Performance Metrics',
    icon: <MovingIcon />,
  },
];

const settingsOption = {
  title: 'Settings',
  icon: <SettingsIcon />,
};

export default function LeftSidebar({ open, toggleDrawer }) {
  const theme = useTheme();

  const drawerSx = {
    width: open ? drawerWidth : `calc(${theme.spacing(7)} + 1px)`,
    transition: "width 0.3s ease-out",
    overflowX: 'hidden',
    '& .MuiDrawer-paper': {
      overflow: 'hidden',
      width: open ? drawerWidth : `calc(${theme.spacing(7)} + 1px)`,
      transition: "width 0.3s ease-out",
      backgroundColor: open ? 'white' : '#00ADEB', // For example, customize background color based on `open`
    },

  };

  return (
    <>
      <MuiDrawer
        variant="permanent"
        anchor="left"
        open={open}
        sx={drawerSx} // Applying the transition and styles directly with `sx`
      >

        <br />
        {/* User Profile Section */}
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingY: 2 }}>
          <Avatar
            alt="Olivia Rhye"
            src="https://i.pravatar.cc/300"
            sx={{ width: open ? 95 : 45, height: open ? 95 : 45, cursor: 'pointer' }}
            onClick={toggleDrawer}
          />
          {open && (
            <>
              <Typography sx={{ fontSize: '22px', fontWeight: '600' }}>Olivia Rhye</Typography>
              <Typography sx={{ fontSize: '17px', fontWeight: '500', color: '#00ADEB' }}>
                Marketing Manager
              </Typography>
              <Chip
                icon={<EditIcon />}
                label="Edit Profile"
                color="primary"
                size="small"
                sx={{ padding: '8px', marginTop: '4px' }}
              />
            </>
          )}
        </Box>

        <Box sx={{ flexGrow: 1 }}>
          <List sx={{ marginTop: '20PX' }}>
            {options.map((item, index) => (
              <ListItem key={index} disablePadding sx={{ display: 'block' }}>
                <ListItemButton
                   component={Link} 
                   to={item.path}
                  sx={{
                    height: open ? 48 : 50,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      justifyContent: 'center',
                      color: open ? '#00ADEB' : 'white',

                      mr: open ? 2 : 'auto',
                    }}
                  >
                    {React.cloneElement(item.icon, { sx: { fontSize: open ? '30px' : '25px' } })}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.title}
                    primaryTypographyProps={{
                      fontWeight: '600',
                      fontSize: '15px',
                    }}
                    sx={{
                      opacity: open ? 1 : 0,

                      transition: 'opacity 0.3s ease-out', // Ensure the text transitions as well
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>

        <List>
          <ListItem disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              sx={[
                {
                  minHeight: 48,
                  px: 2.5,
                },
                open
                  ? {
                    justifyContent: 'initial',
                  }
                  : {
                    justifyContent: 'center',
                  },
              ]}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                  color: open ? '#00ADEB' : 'white'
                }}
              >
                {settingsOption.icon}
              </ListItemIcon>
              <ListItemText
                primary={settingsOption.title}
                primaryTypographyProps={{
                  fontWeight: '600',
                  fontSize: '15px',
                }}
                sx={{
                  opacity: open ? 1 : 0,
                  display: open ? 'block' : 'none', 
                  transition: 'opacity 0.3s ease-out', // Ensure the text transitions as well
                }}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </MuiDrawer>
    </>
  );
}