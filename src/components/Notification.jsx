import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {
  GiftOutlined,
  MessageOutlined,
  SettingOutlined,
} from "@ant-design/icons";

// Styles for avatars
const avatarSX = {
  width: 36,
  height: 36,
  fontSize: "1rem",
};

// Notification component
export default function Notification() {
  const [read, setRead] = useState(2); // Manage read state for notifications

  return (
    <Box sx={{ flexShrink: 0, ml: 0.75 }}>
      <List
        component="nav"
        sx={{
          p: 0,
          "& .MuiListItemButton-root": {
            py: 0.5,
            "&.Mui-selected": { bgcolor: "grey.50", color: "text.primary" },
            "& .MuiAvatar-root": avatarSX,
          },
        }}
      >
        {/* First Notification */}
        <ListItemButton selected={read > 0}>
          <ListItemAvatar>
            <Avatar sx={{ color: "success.main", bgcolor: "transparent" }}>
              <GiftOutlined />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={
              <Typography variant="subtitle1">
                {" "}
                ad has been approved and...
              </Typography>
            }
            secondary="Apr 4, 2024 12:29 am"
          />
        </ListItemButton>
        <Divider />

        {/* Second Notification */}
        <ListItemButton>
          <ListItemAvatar>
            <Avatar sx={{ color: "error.main", bgcolor: "transparent" }}>
              <SettingOutlined />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={
              <Typography variant="subtitle1">
                {" "}
                campaign budget is 90%...
              </Typography>
            }
            secondary="Apr 3, 2024 10:48 am"
          />
        </ListItemButton>
        <Divider />

        {/* Third Notification */}
        <ListItemButton>
          <ListItemAvatar>
            <Avatar sx={{ color: "primary.main", bgcolor: "transparent" }}>
              <MessageOutlined />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={
              <Typography variant="subtitle1">
                Congratulations! campaign...
              </Typography>
            }
            secondary="Mar 14, 2024 8:09 pm"
          />
        </ListItemButton>
        <Divider />

        {/* Fourth Notification */}
        <ListItemButton>
          <ListItemAvatar>
            <Avatar sx={{ color: "warning.main", bgcolor: "transparent" }}>
              <SettingOutlined />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={
              <Typography variant="subtitle1">
                Your competitor has a...
              </Typography>
            }
            secondary="Mar 8, 2024 8:45 am"
          />
        </ListItemButton>
        {/* <Divider /> */}

    
        <Divider />

        {/* View All Button */}
        <ListItemButton sx={{ textAlign: "center", py: 1.5 }}>
          <ListItemText
            primary={
              <Typography variant="h6" color="primary">
                View All
              </Typography>
            }
          />
        </ListItemButton>
      </List>
    </Box>
  );
}
