import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%'
	},
	backButton: {
		marginRight: theme.spacing(1)
	},
	instructions: {
		marginTop: theme.spacing(1),
		marginBottom: theme.spacing(1),
		fontWeight: 300,
		fontStyle: 'italic'
	},
	divider: {
		marginTop: theme.spacing(3)
	}
}));

function getSteps() {
	return [ 'Select master blaster campaign settings', 'Create an ad group', 'Create an ad' ];
}

function getStepContent(stepIndex) {
	switch (stepIndex) {
		case 0:
			return 'Select campaign settings...';
		case 1:
			return 'What is an ad group anyways?';
		case 2:
			return 'This is the bit I really care about!';
		default:
			return 'Unknown stepIndex';
	}
}

export default function HorizontalLabelPositionBelowStepper() {
	const classes = useStyles();
	const [ activeStep, setActiveStep ] = React.useState(0);
	const steps = getSteps();
	

	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
		console.log(activeStep)

	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	const handleReset = () => {
		setActiveStep(0);
	};

	return (
		<div className={classes.root}>
			<div>
				{activeStep === steps.length ? (
					<div>
						<Typography className={classes.instructions}>All steps completed</Typography>
						<Button onClick={handleReset}>Reset</Button>
					</div>
				) : (
					<div>
						<Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>

						<Grid container className={classes.root} spacing={2} justify="space-evenly" alignItems="center">
							<Grid item xs={2} className={classes.gridItem}>
								<Button disabled={activeStep === 0} onClick={handleBack} className={classes.backButton}>
									Back
								</Button>
							</Grid>

							<Grid item xs={2} className={classes.gridItem}>
								<Button variant="contained" color="primary" onClick={handleNext}>
									{activeStep === steps.length - 1 ? 'Finish' : 'Next'}
								</Button>
							</Grid>
						</Grid>
					</div>
				)}
			</div>

			<Divider className={classes.divider} light />
			<Stepper activeStep={activeStep} alternativeLabel>
				{steps.map((label) => (
					<Step key={label}>
						<StepLabel>{label}</StepLabel>
					</Step>
				))}
			</Stepper>
		</div>
	);
}
