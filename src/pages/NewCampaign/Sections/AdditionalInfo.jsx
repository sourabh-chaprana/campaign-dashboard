import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import React from 'react'

const AdditionalInfo = ({ handleChange, formValues, classes, prevStep }) => {
    return (
        <Box>
            <Typography variant="h5">Campaign Summary</Typography>

            <Box mt={2}>
                <TextField
                    variant="outlined"
                    name="additionalInfo"
                    value={formValues.additionalInfo}
                    onChange={handleChange}
                    className={classes.textField}
                    multiline
                    rows={4}
                />
            </Box>

            <Box sx={{ width: '60%', margin: 'auto', padding: 4, display: 'flex', justifyContent: 'space-between' }}>
                <Box sx={{ width: '48%' }}>
                    <Typography py={1} className={classes.additionInfo}>Campaign Title:</Typography>
                    <Typography py={1} className={classes.additionInfo}>Demographic Location:</Typography>
                    <Typography py={1} className={classes.additionInfo}>Device:</Typography>
                </Box>
                <Box sx={{ width: '48%' }}>
                    <Typography py={1} className={classes.additionInfoValue}>Diwali Celebration</Typography>
                    <Typography py={1} className={classes.additionInfoValue}>Katni, Madhya Pradesh</Typography>
                    <Typography py={1} className={classes.additionInfoValue}>Android</Typography>
                </Box>
            </Box>

            {/* Buttons */}
            <Box display="flex" justifyContent="space-between" gap={2} sx={{flexDirection: { xs: 'column', sm: 'row' }}}>
                <Button variant="outlined" onClick={prevStep} sx={{ width: '100%', padding: 1, border: '1px solid #00ADEB', color: '#00ADEB', fontSize: '18px', fontWeight: 500 }}>
                    Save For Draft
                </Button>
                <Button variant="contained" type="submit" sx={{ width: '100%', padding: 1, color: '#fff', fontSize: '18px', fontWeight: 500, backgroundColor: '#00ADEB' }}>
                    Send For Approval
                </Button>
            </Box>
        </Box>
    )
}

export default AdditionalInfo