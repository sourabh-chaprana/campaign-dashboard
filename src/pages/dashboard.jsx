import React,{useEffect} from "react";
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
import { styled, useTheme } from '@mui/material/styles';
import CampaignTable from "../components/table";
import { useSelector,useDispatch } from "react-redux";
import { fetchTeamsDetailsSlice } from "../redux/teamSlice/team.slice";

const DashboardCard = () => {


  const dispatch = useDispatch();
  useEffect(()=>{
  
    dispatch(fetchTeamsDetailsSlice())
  },[])

  return (
    <>
     
   <Card  sx={{ p: 3, mt: 5 }} elevation={3}>
      <Grid container spacing={2} >
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
      </Card>

      <CampaignTable/>
      
    </>
  );
};

export default DashboardCard;
