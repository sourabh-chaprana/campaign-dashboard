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

const drawerWidth = 300;



const options = [
  {
    title: 'Dashboard',
    icon: <DashboardIcon />,
  },
  {
    title: 'Analytics',
    icon: <AnalyticsIcon />,
  },
  {
    title: 'Audience Manager',
    icon: <GroupIcon />,
  },
  {
    title: 'Budget Allocation',
    icon: <ContentPasteIcon />,
  },
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




export default function LeftSidebar({ open, toggleDrawer }) {
  const theme = useTheme();
  useEffect(()=>{

  },[open])

  
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
    
  }),
  overflowX: 'hidden',
  backgroundColor:`${!open ? '#00ADEB':'white'}`,

});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));


const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    variants: [
      {
        props: ({ open }) => open,
        style: {
          ...openedMixin(theme),
          
          '& .MuiDrawer-paper': openedMixin(theme),
        },
      },
      {
        props: ({ open }) => !open,
        style: {
          ...closedMixin(theme),
          '& .MuiDrawer-paper': closedMixin(theme),
        },
      },
    ],
  }),
);


  return (
    <>

      {/* <Drawer variant="permanent" open={open}> */}
      <Drawer
        variant="permanent"
        anchor="left"
        open={open}


      >
        <DrawerHeader>
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
        </DrawerHeader>

        {/* User Profile Section */}

        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingY: 2 }}>
          <Avatar
            alt="Olivia Rhye"
            src="https://i.pravatar.cc/300"
            sx={{ width: open ? 70 : 40, height: open ? 70 : 40 }}
          />
          {open && (
            <>
              <Typography sx={{ fontSize: '22px', fontWeight: 'bold' }}>Olivia Rhye</Typography>
              <Typography sx={{ fontSize: '18px', fontWeight: '600', color: '#00ADEB' }}>
                Marketing Manager
              </Typography>
              <Chip icon={<EditIcon />} label="Edit Profile" color="primary" size="small" sx={{padding:'10px', marginTop:'4px'}} />
            </>
          )}
        </Box>


        <List sx={{ marginTop: '20PX' }}>
          {options?.map((item, index) => (
            <ListItem key={item} disablePadding sx={{ display: 'block' }}>
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
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: 'center',
                      color: '#00ADEB'
                    },
                    open
                      ? {
                        mr: 3,
                      }
                      : {
                        mr: 'auto',
                      },
                  ]}
                >
                  {item?.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item?.title}
                  sx={[
                    {
                      fontWeight: 'bold',
                      fontSize: '24px'
                    },
                    open
                      ? {
                        opacity: 1,
                      }
                      : {
                        opacity: 0,
                      },
                  ]}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>

    </>
  );
}
