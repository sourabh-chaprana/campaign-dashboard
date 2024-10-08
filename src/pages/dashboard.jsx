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

const cardData = [
  {
    socialIcon: 'facebook',
    title: 'Strategic Email Newsletter Campaign for Subscriber Engagement',
    status: 'Not Started',
    lastUpdatedData: 'March 24, 6:23pm',
  },
  {
    socialIcon: 'instagram',
    title: 'Maximinzing Reach with targeted instagram sponsored Posts',
    status: 'Apr 1, 2024 12:02 pm',
    lastUpdatedData: 'March 24, 6:23pm',
  },
  {
    socialIcon: 'linkedin',
    title: 'Optimizing PPC Campaigns Through Strategic Keyword Biddings',
    status: 'Apr 1, 2024 12:02 pm',
    lastUpdatedData: 'March 24, 6:23pm',
  },
  {
    socialIcon: 'linkedin',
    title: 'Optimizing PPC Campaigns Through Strategic Keyword Biddings',
    status: 'Apr 1, 2024 12:02 pm',
    lastUpdatedData: 'March 24, 6:23pm',
  },
]

const DashboardCard = () => {


  const dispatch = useDispatch();
  useEffect(()=>{
  
    dispatch(fetchTeamsDetailsSlice())
  },[])

  return (
    <>


      <Card sx={{ p: 3, mt: 5 }} elevation={3}>
        <Grid container spacing={2} >
          {
            cardData?.map(( data, index) => {

              return (
                <Grid item xs={12} sm={3}>
                  <AvatarCard data={data} />
                </Grid>
              )
            })
          }
        </Grid>
      </Card>

      <CampaignTable />

    </>
  );
};

export default DashboardCard;
