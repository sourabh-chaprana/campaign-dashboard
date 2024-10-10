import React, { useEffect, useState, useCallback } from 'react';
import {
    Box,
    Button,
    Grid,
    InputAdornment,
    TextField,
    Typography,
    Autocomplete,
    Chip,
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const AudienceManager = ({ handleChange, formValues, classes, prevStep, handleNext }) => {
    const [attributes, setAttributes] = useState([]);
    const [options, setOptions] = useState({});
    const [loading, setLoading] = useState(false); // Loading state

    // Fetch attributes on component load
    useEffect(() => {
        const fetchAttributes = async () => {
            setLoading(true);
            try {
                const response = await fetch('http://13.232.49.252:7010/api/dxe/discovery/attributeMapping/PRIMARY/list');
                const data = await response.json();
                setAttributes(data);
            } catch (error) {
                console.error('Error fetching attributes:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchAttributes();
    }, []);

    // Fetch options for a specific attribute
    const fetchOptions = async (attributeCode) => {
        if (options[attributeCode]) return; // Avoid fetching if already fetched
        setLoading(true);
        try {
            const response = await fetch(`http://13.232.49.252:7010/api/dxe/discovery/attribute/${attributeCode}/possibleValues`);
            const data = await response.json();
            setOptions((prev) => ({ ...prev, [attributeCode]: data }));
        } catch (error) {
            console.error(`Error fetching options for ${attributeCode}:`, error);
        } finally {
            setLoading(false);
        }
    };

    // Handle selection changes in Autocomplete
    const handleAutocompleteChange = useCallback((attributeCode) => (event, newValue) => {
        handleChange({
            target: {
                name: attributeCode, // Use attributeCode as the name for handling
                value: newValue,
            }
        });
    }, [handleChange]);

    return (
        <form>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography sx={{ fontWeight: 'bold', fontSize: '28px' }}>Audience Manager</Typography>
                </Grid>

                {loading && (
                    <Grid item xs={12}>
                        <Typography variant="body1" color="textSecondary">Loading attributes...</Typography>
                    </Grid>
                )}

                {!loading && attributes.map((attribute) => (
                    <Grid item xs={12} key={attribute.id}>
                        <Typography className={classes.label}>{attribute.attributeName}
                          
                        </Typography>

                        <Autocomplete
                            multiple
                            options={options[attribute.attributeCode] || []}
                            getOptionLabel={(option) => option.name || option} 
                            value={formValues[attribute.attributeCode] || []}
                            onChange={handleAutocompleteChange(attribute.attributeCode)}
                            onOpen={() => fetchOptions(attribute.attributeCode)}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    variant="outlined"
                                    className={classes.textField}
                                    InputProps={{
                                        ...params.InputProps,
                                        
                                    }}
                                />
                            )}

                    
                        />
                    </Grid>
                ))}

                <Grid item xs={12}>
                    <Box display="flex" justifyContent="flex-end">
                        <Button variant="contained" sx={{ width: 'auto', border: '1px solid #00ADEB', color: '#fff', backgroundColor: '#00ADEB', fontSize: '18px', fontWeight: 500 }}>
                            Generate Audience
                        </Button>
                    </Box>
                </Grid>
            </Grid>

            <Box mt={4} display="flex" justifyContent="space-between" gap={2}>
                <Button variant="outlined" onClick={prevStep} sx={{ width: '100%', padding: 1, border: '1px solid #00ADEB', color: '#00ADEB', fontSize: '18px', fontWeight: 500 }}>
                    Discard
                </Button>
                <Button variant="contained" type="button" onClick={handleNext} sx={{ width: '100%', padding: 1, color: '#fff', fontSize: '18px', fontWeight: 500, backgroundColor: '#00ADEB' }}>
                    Next
                </Button>
            </Box>
        </form>
    );
};

export default AudienceManager;
