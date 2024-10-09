import { Accordion, AccordionDetails, AccordionSummary, Box, Button, FormControl, Grid, InputAdornment, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const AudienceManager = ({ handleChange, formValues, classes, prevStep, handleNext }) => {
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
                        Country
                    </Typography>

                    <TextField
                        variant="outlined"
                        name="location"
                        value={formValues.location}
                        onChange={handleChange}
                        className={classes.textField}

                        slotProps={{
                            input: {
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <LocationOnIcon />
                                    </InputAdornment>
                                ),
                            },
                        }}
                    />
                </Grid>

                <Grid item xs={12}>
                    <Typography sx={{
                        color: '#BEBEBE',
                        fontWeight: 500,
                        marginBottom: '2px',
                        fontSize: '20px',
                    }}>
                        State
                    </Typography>

                    <TextField
                        variant="outlined"
                        name="location"
                        value={formValues.location}
                        onChange={handleChange}
                        className={classes.textField}

                        slotProps={{
                            input: {
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <LocationOnIcon />
                                    </InputAdornment>
                                ),
                            },
                        }}
                    />
                </Grid>

                <Grid item xs={12}>
                    <Accordion defaultExpanded>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >
                            <Typography>Additional Information</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Typography sx={{
                                        color: '#BEBEBE',
                                        fontWeight: 500,
                                        marginBottom: '2px',
                                        fontSize: '20px',
                                    }}>
                                        Device
                                    </Typography>

                                    <FormControl className={classes.selectField}>
                                        <Select
                                            value={formValues.device}
                                            name="device"
                                            onChange={handleChange}
                                        >
                                            <MenuItem value="iPhone">iPhone</MenuItem>
                                            <MenuItem value="Android">Android</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography sx={{
                                        color: '#BEBEBE',
                                        fontWeight: 500,
                                        marginBottom: '2px',
                                        fontSize: '20px',
                                    }}>
                                        Age
                                    </Typography>

                                    <FormControl className={classes.selectField}>
                                        <Select
                                            value={formValues.ageGroup}
                                            name="ageGroup"
                                            onChange={handleChange}
                                        >
                                            <MenuItem value="18-24">18-24</MenuItem>
                                            <MenuItem value="25-34">25-34</MenuItem>
                                            <MenuItem value="35-44">35-44</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                            </Grid>
                        </AccordionDetails>
                    </Accordion>
                </Grid>
            </Grid>
            <Box mt={2} display="flex" justifyContent="space-between">
                <Button variant="contained" onClick={prevStep}>
                    Discard
                </Button>
                <Button variant="contained" color="primary" type="submit" onClick={handleNext}>
                    Next
                </Button>
            </Box>
        </form>
    )
}

export default AudienceManager