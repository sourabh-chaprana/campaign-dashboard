import React, { useState } from 'react';
import { Stepper, Step, StepLabel, Button, TextField, Select, MenuItem, InputLabel, FormControl, Card, Typography, Grid, Grid2, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import NewCampaign from '../pages/NewCampaign/Sections/NewCampaign';
import AudienceManager from '../pages/NewCampaign/Sections/AudienceManager';
import AdditionalInfo from '../pages/NewCampaign/Sections/AdditionalInfo';

const useStyles = makeStyles((theme) => ({
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    margin: '20px',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '20px',
  },
  textField: {
    width: '100%',
    '& .MuiOutlinedInput-root': {
      backgroundColor: '#e6e6e6',
      borderRadius: '10px',
    },
  },
  selectField: {
    width: '100%',
    '& .MuiOutlinedInput-root': {
      backgroundColor: '#e6e6e6',
      borderRadius: '10px',
    },
  },

  label: {
    color: '#BEBEBE',
    fontWeight: 500,
    marginBottom: '2px',
    fontSize: '18px !important',
  },

  stepperLine: {
    '& .MuiStepConnector-line': {

    },
    '& .MuiStepIcon-root': {
      width: '2em',
      height: '2em',
    },

    '& .MuiStepConnector-alternativeLabel': {
      top: '23px'
    },

    '& .MuiStepConnector-root': {
      left: 'calc(-50% + 24px)',  
      right: 'calc(50% + 24px)'   
    }
  }
}));



function CreateCampaign() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [formValues, setFormValues] = useState({
    title: '',
    location: '',
    state: '',
    device: '',
    ageGroup: '',
    additionalInfo: '',
  });

  const steps = ['New Campaign', 'Audience Manager', 'Additional Information'];

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleChange = (event) => {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  };

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <NewCampaign handleChange={handleChange} formValues={formValues} classes={classes} handleNext={handleNext} />
        );
      case 1:
        return (
          <AudienceManager handleChange={handleChange} formValues={formValues} classes={classes} prevStep={handleBack} handleNext={handleNext} />
        );
      case 2:
        return (
          <AdditionalInfo handleChange={handleChange} formValues={formValues} classes={classes} handleNext={handleNext} prevStep={handleBack} />
        );
      default:
        return 'Unknown step';
    }
  };

  return (
    <div>
      <Stepper activeStep={activeStep} sx={{ marginY: 4 }} alternativeLabel className={classes.stepperLine}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <p>All steps completed</p>
          </div>
        ) : (
          <Card sx={{ padding: 10 }}>
            {renderStepContent(activeStep)}
          </Card>
        )}
      </div>
    </div>
  );
}

export default CreateCampaign;

