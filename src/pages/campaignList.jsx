import React, { useState,useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchTeamsDetailsSlice } from "../redux/teamSlice/team.slice";

import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Box,
  Container,
  Alert,
} from "@mui/material";
import CampaignListCards from "../components/campaignListCards";
import CampaignTable from "../components/table";


const CampaignList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { campaigns, totalItems, loading } = useSelector((state) => state.teamsDetails);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

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



  return (
   <Box sx={{mt:5}}>
     <CampaignListCards />
     <CampaignTable
        campaigns={campaigns}
        totalItems={totalItems}
        page={page}
        rowsPerPage={rowsPerPage}
        loading={loading}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleRowsPerPageChange}
      />

</Box>
  );
};

export default CampaignList;
