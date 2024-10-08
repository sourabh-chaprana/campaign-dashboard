import React, { useState } from "react";
import {
  Card,
  Table,
  TableRow,
  TableBody,
  TableCell,
  Container,
  TableContainer,
  Paper,
  TableHead,
  Chip,
  TablePagination,
  Typography,
  IconButton,
  Box,
  Checkbox,
  MenuItem,
  Select,
  Button,
} from "@mui/material";
import { css } from "@emotion/css";

import { Edit, Delete } from "@mui/icons-material";

// Mock Data
const campaigns = [
  {
    id: "#1532",
    client: "John Carter",
    email: "hello@johncarter.com",
    status: "Active",
    country: "United States",
    total: "$1,099.24",
  },
  {
    id: "#1531",
    client: "Sophie Moore",
    email: "contact@sophiemoore.com",
    status: "Canceled",
    country: "United Kingdom",
    total: "$5,870.32",
  },
  {
    id: "#1530",
    client: "Matt Cannon",
    email: "info@mattcannon.com",
    status: "Active",
    country: "Australia",
    total: "$13,899.48",
  },
  {
    id: "#1529",
    client: "Graham Hills",
    email: "hi@grahamhills.com",
    status: "Pause",
    country: "India",
    total: "$1,569.12",
  },
  {
    id: "#1528",
    client: "Sandy Houston",
    email: "contact@sandyhouston.com",
    status: "Active",
    country: "Canada",
    total: "$899.16",
  },
];

const statusColors = {
  Active: "success",
  Pause: "warning",
  Canceled: "error",
};

export default function CampaignTable() {
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const isSelected = (id) => selected.indexOf(id) !== -1;

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = campaigns.map((campaign) => campaign.id);
      setSelected(newSelected);
    } else {
      setSelected([]);
    }
  };

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
 
        <Card elevation={3} sx={{ p: 2 ,mt:5}}>
      <Box display="flex" justifyContent="space-between" my={4}>
        <Typography variant="h5">Campaign Status</Typography>
        <Box display="flex" alignItems="center">
          {/* <Select value="Jan 2024">
            <MenuItem value="Jan 2024">Jan 2024</MenuItem>
            <MenuItem value="Feb 2024">Feb 2024</MenuItem>
          </Select> */}
          <Button variant="contained" color="primary" sx={{ ml: 2 }}>
            Create Campaign
          </Button>
        </Box>
      </Box>
      
        <TableContainer component={Paper}>
          <Table aria-label="campaign table">
          <TableHead>
  <TableRow>
    <TableCell padding="checkbox">
      <Checkbox
        color="primary"
        indeterminate={selected.length > 0 && selected.length < campaigns.length}
        checked={campaigns.length > 0 && selected.length === campaigns.length}
        onChange={handleSelectAllClick}
        inputProps={{
          'aria-label': 'select all campaigns',
        }}
      />
    </TableCell>
 
    <TableCell sx={{ fontWeight: 'bold' }}>Client</TableCell>
    <TableCell sx={{ fontWeight: 'bold' }}>Status</TableCell>
    <TableCell sx={{ fontWeight: 'bold' }}>Country</TableCell>
    <TableCell sx={{ fontWeight: 'bold' }}>Total</TableCell>
    <TableCell sx={{ fontWeight: 'bold' }} align="center">Actions</TableCell>
  </TableRow>
</TableHead>

            <TableBody>
              {campaigns
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((campaign, index) => {
                  const isItemSelected = isSelected(campaign.id);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, campaign.id)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={campaign.id}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          color="primary"
                          checked={isItemSelected}
                          inputProps={{
                            'aria-labelledby': labelId,
                          }}
                        />
                      </TableCell>
                
                      <TableCell>
                        <Typography>{campaign.client}</Typography>
                        <Typography variant="body2" color="textSecondary">
                          {campaign.email}
                        </Typography>
                      </TableCell>
                    
                      <TableCell>
                       

                    <Chip
                      className={css`
                        font-size: 12px;
                        border: none;
                        text-transform: capitalize;
                      `}
                      size="small"
                    //   variant="outlined"
                      label={  statusColors[campaign.status]}
                      sx={{
                        color: 
                          statusColors[campaign.status] === "success" ? "#11a54a" :   // Success text color
                          statusColors[campaign.status] === "warning" ? "#fdc353" :   // Warning text color
                          "#fe4842",  // Error text color
                        backgroundColor:
                          statusColors[campaign.status] === "success" ? "#eff8f1" :   // Success background
                          statusColors[campaign.status] === "warning" ? "#ffefd0" :   // Warning background
                          "#fdd8de",  // Error background
                      }}
                    />
                      </TableCell>
                      <TableCell>{campaign.country}</TableCell>
                      <TableCell>{campaign.total}</TableCell>
                      <TableCell align="center">
                        <IconButton color="primary">
                          <Edit />
                        </IconButton>
                        <IconButton color="error">
                          <Delete />
                        </IconButton>
                       
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
          <TablePagination
            component="div"
            count={campaigns.length}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            rowsPerPageOptions={[5, 10, 25]}
          />
        </TableContainer>
      </Card>
   
  );
}
