import React from "react";
import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Typography,
} from "@mui/material";

const teamMembers = [
  {
    name: "John Doe",
    title: "Software Engineer",
    img: "https://mui.com/static/images/avatar/1.jpg",
  },
  {
    name: "Jane Smith",
    title: "Product Manager",
    img: "https://mui.com/static/images/avatar/2.jpg",
  },
  {
    name: "Alice Johnson",
    title: "UX Designer",
    img: "https://mui.com/static/images/avatar/3.jpg",
  },
  // {
  //   name: "Alice Johnson",
  //   title: "UX Designer",
  //   img: "https://mui.com/static/images/avatar/3.jpg",
  // },
  // {
  //   name: "Alice Johnson",
  //   title: "UX Designer",
  //   img: "https://mui.com/static/images/avatar/3.jpg",
  // },
];

function TeamMembersList() {
  return (
    <List>
      {teamMembers.map((member, index) => (
        <ListItem key={index}>
          <ListItemAvatar>
            <Avatar src={member.img} />
          </ListItemAvatar>
          <ListItemText
            primary={
              <Typography variant="body1" fontWeight="bold">
                {member.name}
              </Typography>
            }
            secondary={
              <Typography variant="body2" color="textSecondary">
                {member.title}
              </Typography>
            }
          />
        </ListItem>
      ))}
    </List>
  );
}

export default TeamMembersList;
