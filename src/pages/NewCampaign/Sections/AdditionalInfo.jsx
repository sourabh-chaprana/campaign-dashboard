import { Box, Button, TextField, Typography } from '@mui/material'
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

            {/* Campaign details summary */}
            <Box mt={2}>
                <Typography variant="h6">Campaign Title: Diwali Campaign</Typography>
                <Typography variant="h6">Description: Testing</Typography>
                <Typography variant="h6">Location: Katni, Madhya Pradesh</Typography>
                <Typography variant="h6">Device: Android</Typography>
                <Typography variant="h6">Age Group: 24</Typography>
            </Box>

            {/* Buttons */}
            <Box mt={4} display="flex" justifyContent="space-between">
                <Button variant="contained" onClick={prevStep}>
                    Edit
                </Button>
                <Button variant="contained" color="primary">
                    Send for Approval
                </Button>
            </Box>
        </Box>
    )
}

export default AdditionalInfo