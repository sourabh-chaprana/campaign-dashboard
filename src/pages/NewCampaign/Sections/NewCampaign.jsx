import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


const NewCampaign = ({ handleChange, formValues, classes, handleNext }) => {

    const [fileUploaded, setFileUploaded] = useState(false);

    const handleFileChange = (event) => {
        if (event.target.files.length > 0) {
            setFileUploaded(true);
        }
    };

    console.log("fileUploaded--",fileUploaded);

    return (
        <form>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography className={classes.label}>
                        Campaign Title
                    </Typography>

                    <TextField
                        variant="outlined"
                        name={`${formValues}_title`}
                        value={formValues._title}
                        onChange={handleChange}
                        className={classes.textField}

                    />
                </Grid>

                <Grid item xs={12}>
                    <Typography className={classes.label}>
                        Campaign Description
                    </Typography>

                    <TextField
                        variant="outlined"
                        name="title"
                        value={formValues.description}
                        onChange={handleChange}
                        className={classes.textField}

                    />
                </Grid>

                <Grid item xs={12}>
                    <Typography className={classes.label}>
                        Media
                    </Typography>

                    <TextField
                        fullWidth
                        variant="outlined"
                        className={classes.textField}
                        InputProps={{
                            startAdornment: (
                                <>
                                    <Button
                                        variant="contained"
                                        sx={{
                                            backgroundColor: '#00b6f1',
                                            textTransform: 'none',
                                            marginRight: '8px',
                                            '&:hover': {
                                                backgroundColor: '#00a0d1',
                                            },
                                        }}
                                        component="label"
                                    >
                                        Upload
                                        <input
                                            type="file"
                                            hidden
                                            onChange={handleFileChange}
                                        />
                                    </Button>
                                </>
                            ),

                            endAdornment: (
                                <>
                                    <Typography
                                        sx={{ color: '#00b6f1', cursor: 'pointer', marginRight: '8px' }}
                                    >
                                        Browse
                                    </Typography>
                                </>
                            )
                        }}
                    />

                    {fileUploaded && (
                        <Typography sx={{ color: '#00b6f1', marginTop: '5px', textAlign: 'right' }}>
                            File Uploaded
                        </Typography>
                    )}
                </Grid>

                <Grid item xs={12}>
                    <Typography className={classes.label}>
                        Schedule
                    </Typography>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Typography className={classes.label}>
                        Start Date:
                    </Typography>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker className={classes.textField} />
                    </LocalizationProvider>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Typography className={classes.label}>
                        End Date:
                    </Typography>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker className={classes.textField} />
                    </LocalizationProvider>
                </Grid>
            </Grid>

            <Box mt={4} display="flex" justifyContent="space-between" gap={2}>
                <Button variant="outlined" sx={{ width: '100%', padding: 1, border: '1px solid #00ADEB', color: '#00ADEB', fontSize: '18px', fontWeight: 500 }}>
                    Save for Draft
                </Button>
                <Button variant="contained" type="submit" onClick={handleNext} sx={{ width: '100%', padding: 1, color: '#fff', fontSize: '18px', fontWeight: 500, backgroundColor: '#00ADEB' }}>
                    Next
                </Button>
            </Box>
        </form >
    )
}

export default NewCampaign