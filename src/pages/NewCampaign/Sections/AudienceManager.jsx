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
    Accordion,
    AccordionSummary,
    AccordionDetails,
    FormControl,
    Select,
    MenuItem,
} from '@mui/material';
import {
    fetchPrimarySelectSlice,
    fetchPrimaryOptionsSlice,
    fetchSecondarySelectSlice,
    fetchSecondaryOptionsSlice,
    fetchDiscoverIdSlice
} from '../../../redux/stepperSlice/stepper.slice';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useDispatch, useSelector } from 'react-redux';


const AudienceManager = ({ handleChange, formValues, classes, prevStep, handleNext }) => {
    const dispatch = useDispatch();
    const audienceData = useSelector((state) => state.stepper);
    const [attributes, setAttributes] = useState([]);
    const [primaryOptions, setPrimaryOptions] = useState({});
    const [secondaryOptions, setSecondaryOptions] = useState({});
    const [secondaryAttributes, setSecondaryAttributes] = useState([]);
    const [loadingPrimary, setLoadingPrimary] = useState(false);
    const [loadingSecondary, setLoadingSecondary] = useState(false);
    const [socketValue, setSocketValue] = useState(null);
    const [socket, setSocket] = useState(null);
    const [socketId,setSocketId] = useState(null)


     // WebSocket Connection
     useEffect(() => {
        if(socketId){
        const ws = new WebSocket(`ws://13.232.49.252:7040/api/dxe/websocket/websocket?id=${socketId}`); 

        ws.onmessage = (event) => {
            const messageData = event?.data; 
            setSocketValue(messageData);
        };

        ws.onopen = () => {
            console.log('WebSocket connection opened.');
        };

        ws.onclose = () => {
            console.log('WebSocket connection closed.');
        };

        setSocket(ws);
        return () => {
            ws.close();
        };
    }
    }, [socketId]); 

    console.log('socketValue',socketValue)



    // const fetchPrimaryOptions = useCallback(
    //     async (attributeCode) => {
    //         if (primaryOptions[attributeCode]) return;
    //         try {
    //             await dispatch(fetchPrimaryOptionsSlice(attributeCode)).unwrap();
    //             const fetchedOptions = audienceData.primaryOption[attributeCode];
    //             setPrimaryOptions((prev) => ({ ...prev, [attributeCode]: fetchedOptions }));
    //         } catch (error) {
    //             console.error('Failed to fetch primary options:', error);
    //         }
    //     },[audienceData.primaryOption, dispatch,primaryOption]
    // );

    // const fetchSecondaryOptions = useCallback(
    //     async (attributeCode) => {
    //         if (secondaryOptions[attributeCode]) return;
    //         try {
    //             await dispatch(fetchSecondaryOptionsSlice(attributeCode)).unwrap();
    //             const fetchedOptions = audienceData.secondaryOptions[attributeCode];
    //             setSecondaryOptions((prev) => ({ ...prev, [attributeCode]: fetchedOptions }));
    //         } catch (error) {
    //             console.error('Failed to fetch secondary options:', error);
    //         }
    //     },[audienceData.secondaryOptions,dispatch,audienceData.secondaryOptions]
    // );

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
            setSecondaryAttributes(audienceData.secondary || []);
        }
    }, [audienceData]);

    const fetchPrimaryOptions = useCallback(
        async (attributeCode) => {
            if (primaryOptions[attributeCode]) return;
            try {
                await dispatch(fetchPrimaryOptionsSlice(attributeCode)).unwrap();
                const fetchedOptions = audienceData.primaryOption[attributeCode];
                setPrimaryOptions((prev) => ({ ...prev, [attributeCode]: fetchedOptions }));
            } catch (error) {
                console.error('Failed to fetch primary options:', error);
            }
        },[audienceData.primaryOption, dispatch,primaryOptions]
    );

    const fetchSecondaryOptions = useCallback(
        async (attributeCode) => {
            if (secondaryOptions[attributeCode]) return;
            try {
                await dispatch(fetchSecondaryOptionsSlice(attributeCode)).unwrap();
                const fetchedOptions = audienceData.secondaryOptions[attributeCode];
                setSecondaryOptions((prev) => ({ ...prev, [attributeCode]: fetchedOptions }));
            } catch (error) {
                console.error('Failed to fetch secondary options:', error);
            }
        },[audienceData.secondaryOptions,dispatch,secondaryOptions]
    );

    const handleAutocompleteChange = useCallback((attributeCode, type) => async (event, newValue) => {
        console.log('attributeCode',type,attributeCode,newValue)

       
        handleChange({
            target: {
                name: attributeCode, 
                value: newValue,     
                       
            },
        });

        if(type === 'PRIMARY'){
            const valueString = newValue.join(',')
             const attributes = 
                {
                  "name":attributeCode ,
                  "value": valueString,
                  "type": type
                }
            
            const data = {
                attributes: [attributes] 
            };
         var response =  await dispatch(fetchDiscoverIdSlice(data)).unwrap();
         setSocketId(response.requestId)
        }
    }, [handleChange]);

    // New effect to fetch primary options immediately after primary attributes are loaded
    useEffect(() => {
        const fetchAllPrimaryOptions = async () => {
            try {
                const fetchPromises = attributes.map((attribute) => fetchPrimaryOptions(attribute.attributeCode));
                await Promise.all(fetchPromises);
            } catch (error) {
                console.error('Error fetching primary options:', error);
            }
        };
    
        if (attributes.length > 0) {
            fetchAllPrimaryOptions();
        }
        // Dependencies only include attributes to avoid refetching infinitely
    }, [attributes]);
    
    // Effect for fetching secondary options
    useEffect(() => {
        const fetchAllSecondaryOptions = async () => {
            try {
                const fetchPromises = secondaryAttributes.map((attribute) => fetchSecondaryOptions(attribute.attributeCode));
                await Promise.all(fetchPromises);
            } catch (error) {
                console.error('Error fetching secondary options:', error);
            }
        };
    
        if (secondaryAttributes.length > 0) {
            fetchAllSecondaryOptions();
        }
        // Dependencies only include secondaryAttributes to avoid refetching infinitely
    }, [secondaryAttributes]);
    

    return (
        <form>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography sx={{ fontWeight: 'bold', fontSize: '28px' }}>Audience Manager</Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="h5" sx={{ fontWeight: 400, fontSize: '20px', color: '#525252' }}>Demographic Reach</Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="h5" sx={{ fontWeight: 400, fontSize: '18px', textAlign: 'end', fontStyle: 'italic', color: '#00ADEB' }}>Audience Count- {socketValue? socketValue :'Select the fields to reflect count'}</Typography>
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
                                            onChange={handleAutocompleteChange(attribute.attributeCode,attribute.type)}
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
                                            onChange={handleAutocompleteChange(attribute.attributeCode,attribute.type)}
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

                {/* Generate Parameters Button */}
                <Grid item xs={12}>
                    {/* <Typography className={classes.label}></Typography> */}
                    <Typography sx={{ fontWeight: 'bold', fontSize: '20px',marginY:2 }}> Additional Parameters</Typography>

                    <Accordion sx={{ boxShadow: 'none', border: '1px solid #3333' }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >
                            <Typography>Click To Add Parameters</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Typography className={classes.label}>Device</Typography>
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
                                    <Typography className={classes.label}>Age</Typography>
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

                {/* Generate Audience Button */}
                <Grid item xs={12}>
                    <Box display="flex" justifyContent="flex-end" mt={2}>
                        <Button variant="outlined" sx={{ padding: 1, border: '1px solid #00ADEB', color: '#00ADEB', fontSize: '18px', fontWeight: 500, borderRadius: '25px', paddingX: 2 }}>
                            Generate Audience
                        </Button>
                    </Box>
                </Grid>
            </Grid>

            {/* Footer Buttons */}
            <Box mt={4} display="flex" justifyContent="space-between" gap={2}>
                <Button variant="outlined" onClick={prevStep} sx={{ width: '100%', padding: 1, border: '1px solid #00ADEB', color: '#00ADEB', fontSize: '18px', fontWeight: 500, borderRadius: '25px' }}>
                    Back
                </Button>
                <Button variant="contained" onClick={handleNext} sx={{ width: '100%', padding: 1, background: '#00ADEB', color: '#fff', fontSize: '18px', fontWeight: 500, borderRadius: '25px' }}>
                    Next
                </Button>
            </Box>
        </form>
    );
};

export default AudienceManager;