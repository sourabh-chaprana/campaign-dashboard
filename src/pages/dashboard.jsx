import React from "react";
import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  Avatar,
} from "@mui/material";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import SearchIcon from "@mui/icons-material/Search";
import CampaignIcon from "@mui/icons-material/Campaign";
import AvatarCard from "../components/AvatarCard";

// Sample data for graphs
const data = [
  { name: "Jan", uv: 400, pv: 2400, amt: 2400 },
  { name: "Feb", uv: 300, pv: 1398, amt: 2210 },
  { name: "Mar", uv: 200, pv: 9800, amt: 2290 },
  { name: "Apr", uv: 278, pv: 3908, amt: 2000 },
  { name: "May", uv: 189, pv: 4800, amt: 2181 },
  { name: "Jun", uv: 239, pv: 3800, amt: 2500 },
  { name: "Jul", uv: 349, pv: 4300, amt: 2100 },
];

const DashboardCard = () => {
  return (
    <>
      <Grid container spacing={2}>
        {/* Earning Card */}
        <Grid item xs={12} sm={4}>
          <Card>
            <CardContent>
              <Box display="flex" alignItems="center" mb={2}>
                <Avatar sx={{ bgcolor: "teal", mr: 2 }}>
                  <MonetizationOnIcon />
                </Avatar>
                <Typography variant="h6">Earning</Typography>
              </Box>
              <Typography variant="h4" color="textPrimary">
                45k
              </Typography>
              <Typography variant="body2" color="textSecondary">
                ▲ 15% This is Card title
              </Typography>
              <Box mt={2} height={100}>
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                  </LineChart>
                </ResponsiveContainer>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* New Leads Card */}
        <Grid item xs={12} sm={4}>
          <Card>
            <CardContent>
              <Box display="flex" alignItems="center" mb={2}>
                <Avatar sx={{ bgcolor: "orange", mr: 2 }}>
                  <SearchIcon />
                </Avatar>
                <Typography variant="h6">New Leads</Typography>
              </Box>
              <Typography variant="h4" color="textPrimary">
                22
              </Typography>
              <Typography variant="body2" color="textSecondary">
                ▲ 15% This is Card title
              </Typography>
              <Box mt={2} height={100}>
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="uv" stroke="#ffc658" />
                  </LineChart>
                </ResponsiveContainer>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Campaigns Card */}
        <Grid item xs={12} sm={4}>
          <Card>
            <CardContent>
              <Box display="flex" alignItems="center" mb={2}>
                <Avatar sx={{ bgcolor: "red", mr: 2 }}>
                  <CampaignIcon />
                </Avatar>
                <Typography variant="h6">Campaigns</Typography>
              </Box>
              <Typography variant="h4" color="textPrimary">
                4
              </Typography>
              <Typography variant="body2" color="textSecondary">
                ▲ 12% This is Card title
              </Typography>
              <Box mt={2} height={100}>
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="uv" stroke="#ff7300" />
                  </LineChart>
                </ResponsiveContainer>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      {/* <Box sx={{ display: "flex", flexDirection: "row", gap: 2, mt: 5 }}>
        <AvatarCard />
        <AvatarCard />
        <AvatarCard />
      </Box> */}

      <Grid container spacing={2} marginTop={5}>
        <Grid item xs={12} sm={4}>
          <AvatarCard />
        </Grid>
        <Grid item xs={12} sm={4}>
          <AvatarCard />
        </Grid>
        <Grid item xs={12} sm={4}>
          <AvatarCard />
        </Grid>
      </Grid>
    </>
  );
};

export default DashboardCard;
