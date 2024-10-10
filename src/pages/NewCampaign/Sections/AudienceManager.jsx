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
import { fetchPrimarySelectSlice, fetchPrimaryOptionsSlice, fetchSecondarySelectSlice } from '../../../redux/stepperSlice/stepper.slice';
import { useDispatch, useSelector } from 'react-redux';

const AudienceManager = ({ handleChange, formValues, classes, prevStep, handleNext }) => {
    const dispatch = useDispatch();
    const audienceData = useSelector((state) => state.stepper);
    const [attributes, setAttributes] = useState([]);
    const [primaryOptions, setPrimaryOptions] = useState({});
    const [secondaryOptions, setSecondaryOptions] = useState({});
    const [loading, setLoading] = useState(false);

    // Fetch attributes on component load
    useEffect(() => {
        setLoading(true);
        dispatch(fetchPrimarySelectSlice()).unwrap();
        dispatch(fetchSecondarySelectSlice()).unwrap().finally(() => {
            setLoading(false);
        });
    }, [dispatch]);

    // Update attributes and options once fetched
    useEffect(() => {
        if (audienceData?.primary && audienceData?.primary.length) {
            setAttributes(audienceData?.primary);
        }
        if (audienceData?.secondary && audienceData?.secondary.length) {
            setSecondaryOptions(audienceData?.secondary);
        }
    }, [audienceData]);

    const fetchPrimaryOptions = async (attributeCode) => {
        if (primaryOptions[attributeCode]) return;
        await dispatch(fetchPrimaryOptionsSlice(attributeCode)).unwrap();
        const fetchedOptions = audienceData.primaryOption[attributeCode];
        setPrimaryOptions((prev) => ({ ...prev, [attributeCode]: fetchedOptions }));
    };

    const fetchSecondaryOptions = async (attributeCode) => {
        if (secondaryOptions[attributeCode]) return;
        await dispatch(fetchPrimaryOptionsSlice(attributeCode)).unwrap();
        const fetchedOptions = audienceData.primaryOption[attributeCode];
        setSecondaryOptions((prev) => ({ ...prev, [attributeCode]: fetchedOptions }));
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

                {/* Primary Attributes Card */}
                <Grid item xs={12}>
                    <Card  sx={{ boxShadow: 'none', border: '1px solid #3333', borderRadius:'10px',marginBottom:'50px' }}>
                        <CardContent>
                            <Typography sx={{ fontWeight: 'bold', fontSize: '20px' }}>Primary Attributes</Typography>
                            {loading && (
                                <Typography variant="body1" color="textSecondary">Loading attributes...</Typography>
                            )}
                            {!loading && attributes?.map((attribute) => (
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
                            ))}
                        </CardContent>
                    </Card>
                </Grid>

                {/* Secondary Attributes Card */}
                <Grid item xs={12}>
                    <Card sx={{ boxShadow: 'none', border: '1px solid #3333' }}>
                        <CardContent>
                            <Typography sx={{ fontWeight: 'bold', fontSize: '20px' }}>Secondary Attributes</Typography>
                            {loading && (
                                <Typography variant="body1" color="textSecondary">Loading attributes...</Typography>
                            )}
                            {!loading && Object.values(secondaryOptions)?.map((attribute) => (
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
                            ))}
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
