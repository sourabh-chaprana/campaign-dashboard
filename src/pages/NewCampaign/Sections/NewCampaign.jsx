import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


const NewCampaign = ({ handleChange, formValues, classes, handleNext }) => {
    return (
        <form>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography sx={{
                        color: '#BEBEBE',
                        fontWeight: 500,
                        marginBottom: '2px',
                        fontSize: '20px',
                    }}>
                        Campaign Title
                    </Typography>

                    <TextField
                        variant="outlined"
                        name="title"
                        value={formValues.title}
                        onChange={handleChange}
                        className={classes.textField}
                        
                    />
                </Grid>

                <Grid item xs={12}>
                    <Typography sx={{
                        color: '#BEBEBE',
                        fontWeight: 500,
                        marginBottom: '2px',
                        fontSize: '20px',
                    }}>
                        Campaign Description
                    </Typography>

                    <TextField
                        variant="outlined"
                        name="title"
                        value={formValues.title}
                        onChange={handleChange}
                        className={classes.textField}
                        
                    />
                </Grid>

                <Grid item xs={12}>
                    <Typography sx={{
                        color: '#BEBEBE',
                        fontWeight: 500,
                        marginBottom: '2px',
                        fontSize: '20px',
                    }}>
                        Media
                    </Typography>

                    <TextField
                        variant="outlined"
                        name="media"
                        className={classes.textField}
                        type="file"
                        onChange={handleChange}
                        
                    />
                </Grid>

                <Grid item xs={12} md={6}>
                    <Typography sx={{
                        color: '#BEBEBE',
                        fontWeight: 500,
                        marginBottom: '2px',
                        fontSize: '20px',
                    }}>
                        Schedule
                    </Typography>

                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker className={classes.textField}
                             />
                    </LocalizationProvider>
                </Grid>

                <Grid item xs={12} md={6}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker className={classes.textField}
                            sx={{
                                marginTop: '31px', 
                            }} />
                    </LocalizationProvider>
                </Grid>
            </Grid>
            <Box mt={2} display="flex" justifyContent="space-between">
                <Button variant="outlined" color="secondary">
                    Save for Draft
                </Button>
                <Button variant="contained" color="primary" type="submit" onClick={handleNext}>
                    Next
                </Button>
            </Box>
        </form >
    )
}

export default NewCampaign