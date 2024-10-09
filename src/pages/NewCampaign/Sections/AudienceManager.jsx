import { Accordion, AccordionDetails, AccordionSummary, Box, Button, FormControl, Grid, InputAdornment, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const AudienceManager = ({ handleChange, formValues, classes, prevStep, handleNext }) => {
    return (
        <form>
            <Grid container spacing={2}>

                <Grid item xs={12}>
                    <Typography sx={{ fontWeight: 'bold', fontSize: '28px' }}>Audience Manager</Typography>
                </Grid>

                <Grid item xs={6}>
                    <Typography variant="h5" sx={{ fontWeight: 400, fontSize: '26px', color: '#525252' }}>Demographic Reach</Typography>
                </Grid>

                <Grid item xs={6}>
                    <Typography variant="h5" sx={{ fontWeight: 400, fontSize: '20px', textAlign: 'end', fontStyle: 'italic', color: '#00ADEB' }}>Audience Count- 50,00,000</Typography>
                </Grid>



                <Grid item xs={12}>
                    <Typography className={classes.label}>
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
                    <Typography className={classes.label}>
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
                    <Typography className={classes.label}>
                        Parameters
                    </Typography>

                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                            sx={{ paddingY: '4px' }}
                        >
                            <Typography>Click To Add Parameters</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Typography className={classes.label}>
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
                                    <Typography className={classes.label}>
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

            <Box mt={4} display="flex" justifyContent="space-between" gap={2}>
                <Button variant="outlined" onClick={prevStep} sx={{ width: '100%', padding: 1, border: '1px solid #00ADEB', color: '#00ADEB', fontSize: '18px', fontWeight: 500 }}>
                    Discard
                </Button>
                <Button variant="contained" type="submit" onClick={handleNext} sx={{ width: '100%', padding: 1, color: '#fff', fontSize: '18px', fontWeight: 500, backgroundColor: '#00ADEB' }}>
                    Next
                </Button>
            </Box>
        </form>
    )
}

export default AudienceManager