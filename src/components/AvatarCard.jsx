import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Avatar,
  Typography,
  Chip,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import AvatarGroup from "@mui/material/AvatarGroup";

function AvatarCard() {
  return (
    <Card>
      <CardHeader
        avatar={<FacebookIcon />}
        title={
          <AvatarGroup total={5}>
            <Avatar
              alt="User 1"
              src="https://mui.com/static/images/avatar/1.jpg"
            />
            <Avatar
              alt="User 2"
              src="https://mui.com/static/images/avatar/2.jpg"
            />
            <Avatar
              alt="User 3"
              src="https://mui.com/static/images/avatar/3.jpg"
            />
            {/* <Avatar alt="User 4" src="/static/images/avatar/4.jpg" />
            <Avatar alt="User 5" src="/static/images/avatar/5.jpg" /> */}
          </AvatarGroup>
        }
      />
      <CardContent>
        <Typography variant="h6" fontWeight={'bold'} textAlign={'left'}>
          Strategic Email Newsletter Campaign for Subscriber Engagement
        </Typography>
        <Typography variant="body2" color="textSecondary" sx={{ paddingY: '12px',  borderBottom: '1px solid rgba(0, 0, 0, 0.2)', textAlign: 'left', fontSize: '12px' }}>
          Start: Not Started
        </Typography>
        <Typography variant="body2" color="textSecondary" sx={{ paddingY: '12px', textAlign: 'left', fontSize: '16px' }}>
          Last update date: Mar 27, 2024 6:23 am
        </Typography>
      </CardContent>
    </Card>
  );
}

export default AvatarCard;



{/* <Chip label="Start: Not started" color="primary" /> */ }