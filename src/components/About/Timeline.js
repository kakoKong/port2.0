import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Divider } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  containedButton: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
    backgroundColor: "#2A8CAE",
    color: 'white',
    fontWeight: 'bold'
  },
  outlinedButton: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
    color: "#2A8CAE",
    border: "2px solid #2A8CAE",
    fontWeight: 'bold'
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
  location: {
      marginTop: '.5em',
      display: 'flex',
      alignItems: 'flex-start'
  }
}));

function getSteps() {
  return [
    {
        level: 'High School',
        name: 'Meitoku Gijuku Senior High School',
        location: 'Kochi, Japan'
    },
    {
        level: 'Foundation of Science and Engineering',
        name: 'Warwick IFP',
        location: 'Coventry, UK'
    },
    {
        level: 'Bsc Computer Science',
        name: 'University of Warwick',
        location: 'Coventry, UK'
    }
  ];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return `During high school, I decided to move to study at Japan hoping to ace my Japanese skills
        and be able to attend Japanese university's non-international course. However after 2 years here, I changed my mind where I believe western's education system would fit me more.
      `;
    case 1:
      return 'Since I had no A-level or IB examination in Japan, I need to complete 1 year foundation course before I attend the bachelor degree at University of Warwick with a condition of getting 70%+ in overall grade';
    case 2:
      return `Now I'm here, struggling and in pain. One more year left until I graduate, be prepared`;
    default:
      return 'Unknown step';
  }
}

export default function TimeLine() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
        <Typography variant="h3" color="primary" gutterBottom>
            Education
        </Typography>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label.level}</StepLabel>
            <StepContent>
                <Typography variant="h5">{label.name}</Typography>
                <Divider/>
                <div className={classes.location}>
                    <LocationOnIcon color="secondary" />
                    <Typography variant="subtitle1" gutterBottom> {label.location}</Typography>  
                </div>
                
              <Typography>{getStepContent(index)}</Typography>
              <div className={classes.actionsContainer}>
                <div>
                    {index === 0 ? '' : 
                    <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.outlinedButton}
                  >
                    &lt;&lt;
                  </Button>}
                  {activeStep === steps.length - 1? ''
                  : <Button
                  variant="contained"
                  onClick={handleNext}
                  className={classes.containedButton}
                >
                  &gt;&gt;
                </Button>}
                  
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography>Now, are you ready to hire me???</Typography>
          <Button variant='outlined' onClick={handleReset} className={classes.outlinedButton}>
            Yes (reset)
          </Button>
        </Paper>
      )}
    </div>
  );
}