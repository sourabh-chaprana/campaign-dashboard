import {
  Box,
  Card,
  Grid,
  Typography,

} from "@mui/material";


import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AvatarCard from "../components/AvatarCard";
import { styled, useTheme } from '@mui/material/styles';
import CampaignTable from "../components/table";
import { fetchTeamsDetailsSlice } from "../redux/teamSlice/team.slice";
import Stepper from "../components/stepper";
import CreateCampaign from "../components/stepper";

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
  const { campaigns, totalItems, loading } = useSelector((state) => state.teamsDetails);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  // Fetch campaigns when page or rowsPerPage change
  useEffect(() => {
    dispatch(fetchTeamsDetailsSlice({ page, rowsPerPage }));
  }, [dispatch, page, rowsPerPage]);

  // Handle page change in table
  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  // Handle rows per page change
  const handleRowsPerPageChange = (newRowsPerPage) => {
    setRowsPerPage(newRowsPerPage);
    setPage(0);
  };

  console.log('teamsDetails---------------123',campaigns)

  return (
    <>


      <Card sx={{ p: 3, mt: 5 }} elevation={3}>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', paddingY: 2 }}>
          <Typography variant="h5" sx={{ fontWeight: 'bold' }}>Recent Campaigns</Typography>
          <Typography sx={{ fontWeight: '600', textDecoration:'underline', cursor:'pointer' }}>View all</Typography>
        </Box>

        <Grid container spacing={2}>
          {
            cardData?.map((data, index) => {
              return (
                <Grid item xs={12} sm={6} md={6} lg={4} key={index}>
                  <AvatarCard data={data} />
                </Grid>
              );
            })
          }
        </Grid>
      </Card>

        <CampaignTable
        campaigns={campaigns}
        totalItems={totalItems}
        page={page}
        rowsPerPage={rowsPerPage}
        loading={loading}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleRowsPerPageChange}
      />


      <CreateCampaign/>

    </>
  );
};

export default DashboardCard;
