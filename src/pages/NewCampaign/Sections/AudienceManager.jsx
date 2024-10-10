import React, { useEffect, useState, useCallback } from 'react';
import {
    Box,
    Button,
    Grid,
    TextField,
    Typography,
    Autocomplete,
    Card,
    CardContent,
} from '@mui/material';
import {
    fetchPrimarySelectSlice,
    fetchPrimaryOptionsSlice,
    fetchSecondarySelectSlice,
    fetchSecondaryOptionsSlice,
} from '../../../redux/stepperSlice/stepper.slice';
import { useDispatch, useSelector } from 'react-redux';

const AudienceManager = ({ handleChange, formValues, classes, prevStep, handleNext }) => {
    const dispatch = useDispatch();
    const audienceData = useSelector((state) => state.stepper);
    const [attributes, setAttributes] = useState([]);
    const [primaryOptions, setPrimaryOptions] = useState({});
    const [secondaryOptions, setSecondaryOptions] = useState({});
    const [secondaryAttributes, setSecondaryAttributes] = useState([]); // Initialize as an array
    const [loadingPrimary, setLoadingPrimary] = useState(false);
    const [loadingSecondary, setLoadingSecondary] = useState(false);

    // Fetch primary and secondary attributes on component load
    useEffect(() => {
        const fetchAttributes = async () => {
            setLoadingPrimary(true);
            try {
                await dispatch(fetchPrimarySelectSlice()).unwrap();
            } catch (error) {
                console.error('Failed to fetch primary attributes:', error);
            } finally {
                setLoadingPrimary(false);
            }

            setLoadingSecondary(true);
            try {
                await dispatch(fetchSecondarySelectSlice()).unwrap();
            } catch (error) {
                console.error('Failed to fetch secondary attributes:', error);
            } finally {
                setLoadingSecondary(false);
            }
        };

        fetchAttributes();
    }, [dispatch]);

    // Update attributes and options once fetched
    useEffect(() => {
        if (audienceData?.primary) {
            setAttributes(audienceData.primary);
        }
        if (audienceData?.secondary) {
            setSecondaryAttributes(audienceData.secondary || []); // Ensure it's always an array
        }
    }, [audienceData]);

    const fetchPrimaryOptions = async (attributeCode) => {
        if (primaryOptions[attributeCode]) return; // Avoid fetching again if options already loaded
        try {
            await dispatch(fetchPrimaryOptionsSlice(attributeCode)).unwrap();
            const fetchedOptions = audienceData.primaryOption[attributeCode];
            setPrimaryOptions((prev) => ({ ...prev, [attributeCode]: fetchedOptions }));
        } catch (error) {
            console.error('Failed to fetch primary options:', error);
        }
    };

    const fetchSecondaryOptions = async (attributeCode) => {
        if (secondaryOptions[attributeCode]) return; // Avoid fetching again if options already loaded
        try {
            await dispatch(fetchSecondaryOptionsSlice(attributeCode)).unwrap();
            const fetchedOptions = audienceData.secondaryOptions[attributeCode];
            setSecondaryOptions((prev) => ({ ...prev, [attributeCode]: fetchedOptions }));
        } catch (error) {
            console.error('Failed to fetch secondary options:', error);
        }
    };

    const handleAutocompleteChange = useCallback((attributeCode) => (event, newValue) => {
        handleChange({
            target: {
                name: attributeCode,
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

                <Grid item xs={6}>
                    <Typography variant="h5" sx={{ fontWeight: 400, fontSize: '26px', color: '#525252' }}>Demographic Reach</Typography>
                </Grid>

                <Grid item xs={6}>
                    <Typography variant="h5" sx={{ fontWeight: 400, fontSize: '20px', textAlign: 'end', fontStyle: 'italic', color: '#00ADEB' }}>Audience Count- 50,00,000</Typography>
                </Grid> 

                {/* Primary Attributes Card */}
                <Grid item xs={12}>
                    <Card sx={{ boxShadow: 'none', border: '1px solid #3333', borderRadius: '10px', marginBottom: '50px' }}>
                        <CardContent>
                            <Typography sx={{ fontWeight: 'bold', fontSize: '20px' }}>Primary Attributes</Typography>
                            {loadingPrimary ? (
                                <Typography variant="body1" color="textSecondary">Loading primary attributes...</Typography>
                            ) : (
                                attributes.map((attribute) => (
                                    <Grid item xs={12} key={attribute.id} mt={2}>
                                        <Typography className={classes.label}>{attribute.attributeName}</Typography>
                                        <Autocomplete
                                            multiple
                                            options={primaryOptions[attribute.attributeCode] || []}
                                            getOptionLabel={(option) => option.name || option}
                                            value={formValues[attribute.attributeCode] || []}
                                            onChange={handleAutocompleteChange(attribute.attributeCode)}
                                            onOpen={() => fetchPrimaryOptions(attribute.attributeCode)}
                                            renderInput={(params) => (
                                                <TextField
                                                    {...params}
                                                    variant="outlined"
                                                    className={classes.textField}
                                                />
                                            )}
                                        />
                                    </Grid>
                                ))
                            )}
                        </CardContent>
                    </Card>
                </Grid>

                {/* Secondary Attributes Card */}
                <Grid item xs={12}>
                    <Card sx={{ boxShadow: 'none', border: '1px solid #3333' }}>
                        <CardContent>
                            <Typography sx={{ fontWeight: 'bold', fontSize: '20px' }}>Secondary Attributes</Typography>
                            {loadingSecondary ? (
                                <Typography variant="body1" color="textSecondary">Loading secondary attributes...</Typography>
                            ) : (
                                secondaryAttributes.map((attribute) => (
                                    <Grid item xs={12} key={attribute.id} mt={2}>
                                        <Typography className={classes.label}>{attribute.attributeName}</Typography>
                                        <Autocomplete
                                            multiple
                                            options={secondaryOptions[attribute.attributeCode] || []}
                                            getOptionLabel={(option) => option.name || option}
                                            value={formValues[attribute.attributeCode] || []}
                                            onChange={handleAutocompleteChange(attribute.attributeCode)}
                                            onOpen={() => fetchSecondaryOptions(attribute.attributeCode)}
                                            renderInput={(params) => (
                                                <TextField
                                                    {...params}
                                                    variant="outlined"
                                                    className={classes.textField}
                                                />
                                            )}
                                        />
                                    </Grid>
                                ))
                            )}
                        </CardContent>
                    </Card>
                </Grid>

                {/* Generate Audience Button */}
                <Grid item xs={12}>
                    <Box display="flex" justifyContent="flex-end" mt={2}>
                        <Button variant="contained" sx={{ width: 'auto', border: '1px solid #00ADEB', color: '#fff', backgroundColor: '#00ADEB', fontSize: '18px', fontWeight: 500 }}>
                            Generate Audience
                        </Button>
                    </Box>
                </Grid>
            </Grid>

            {/* Footer Buttons */}
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
