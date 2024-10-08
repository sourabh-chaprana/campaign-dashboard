import React, { useState } from 'react';
import { Stepper, Step, StepLabel, Button, TextField, Select, MenuItem, InputLabel, FormControl ,Card} from '@mui/material';
import { makeStyles } from '@mui/styles';

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
  },
  selectField: {
    width: '100%',
  },
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
            
          <div className={classes.formContainer}>
            <TextField
              label="Campaign Title"
              variant="outlined"
              name="title"
              value={formValues.title}
              onChange={handleChange}
              className={classes.textField}
            />
            <TextField
              label="Media"
              variant="outlined"
              name="media"
              className={classes.textField}
              type="file"
              onChange={handleChange}
            />
            <TextField
              label="Date"
              type="date"
              variant="outlined"
              name="date"
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
              onChange={handleChange}
            />
          </div>
        );
      case 1:
        return (
          <div className={classes.formContainer}>
            <TextField
              label="Country"
              variant="outlined"
              name="location"
              value={formValues.location}
              onChange={handleChange}
              className={classes.textField}
            />
            <TextField
              label="State"
              variant="outlined"
              name="state"
              value={formValues.state}
              onChange={handleChange}
              className={classes.textField}
            />
            <FormControl className={classes.selectField}>
              <InputLabel>Device</InputLabel>
              <Select
                value={formValues.device}
                name="device"
                onChange={handleChange}
              >
                <MenuItem value="iPhone">iPhone</MenuItem>
                <MenuItem value="Android">Android</MenuItem>
              </Select>
            </FormControl>
            <FormControl className={classes.selectField}>
              <InputLabel>Age Group</InputLabel>
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
          </div>
        );
      case 2:
        return (
          <div className={classes.formContainer}>
            <TextField
              label="Additional Information"
              variant="outlined"
              name="additionalInfo"
              value={formValues.additionalInfo}
              onChange={handleChange}
              className={classes.textField}
              multiline
              rows={4}
            />
          </div>
        );
      default:
        return 'Unknown step';
    }
  };

  return (
    <div>
      <Stepper activeStep={activeStep}>
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
          <Card>
            {renderStepContent(activeStep)}
            <div className={classes.buttonContainer}>
              <Button disabled={activeStep === 0} onClick={handleBack}>
                Back
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Send For Approval' : 'Next'}
              </Button>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
}

export default CreateCampaign;