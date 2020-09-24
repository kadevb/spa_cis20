import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import InputLabel from "@material-ui/core/InputLabel"
import FormControl from "@material-ui/core/FormControl"
import Select from "@material-ui/core/Select"
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import  TextField from '@material-ui/core/TextField'
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Modal from '@material-ui/core/Modal';
import HorizontalLabelPositionBelowStepper  from './Components/Navigation'
import SourceSelector from './Components/SourceSelector'



function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({

  formControl: {
    display: 'flex',
    marginBottom: 20,
    marginTop: 20,
    
  },

  selectInput: {
    margin: 10,
  },
  
  myPaper: {
    width: '80%',
    maxWidth: 800,
    paddingTop: 40,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    paddingBottom: 40
  },

  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  }

}))




export default function Variants() {
  const classes = useStyles()
  const [state, setAge] = React.useState("")

  const [checked, setChecked] = React.useState(true);

  const toggleChecked = () => {
    setChecked((prev) => !prev);
  }

  const handleChange = (event) => {
    setAge(event.target.value)
  }

  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title"></h2>
      <p id="simple-modal-description">
        You are about to make some serious changes. Continue at your own risk.
      </p>
      <Grid container className={classes.root} spacing={2} justify="center" alignItems="center">
        <Grid item xs={6} >
          <Button variant="contained" color="secondary" onClick={handleClose}>
            Discard 
          </Button>
        </Grid>

        <Grid item xs={6} className={classes.gridItem}>
          <Button variant="contained" color="primary" onClick={handleClose}>
            Continue
          </Button>
        </Grid>
      </Grid>
    </div>
  );


  return (
    <div className={classes.root}>
      <React.Fragment>
        <CssBaseline />
        <Paper elevation={3} className={classes.myPaper}>
        <Container maxWidth="sm">
          <Typography variant="h3" gutterBottom> SPA </Typography>
          <SourceSelector />
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel htmlFor="input-control">Choose Control</InputLabel>
            <Select
              className="selectInput"
              native
              value={state.age}
              onChange={handleChange}
              inputProps={{
                name: "",
                id: "input-control"
              }}
            >
              <option default aria-label="None" value="" />
              <option value={1}>CIS 20 Primary Controls</option>
              <option value={2}>CIS 20 Sub Controls</option>
              <option value={3}>Third option </option>
            </Select>
          </FormControl>

          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel htmlFor="input-subcontrol">Choose Sub-Control</InputLabel>
            <Select
              className="selectInput"
              native
              value={state.age}
              onChange={handleChange}
              inputProps={{
                name: "subcontrol",
                id: "input-subcontrol"
              }}
            >
              <option aria-label="None" value="" />
              <option value={1}>1.1 - Utilize an Active Discovery Tool</option>
              <option value={2}>1.2 - Use a Passive ASset Discover Tool</option>
              <option value={3}>1.3 - Use DHCP Logging to Update Asset Inventory</option>
              <option value={4}>1.4 - Maintain Detailed Asset Inventory</option>
              <option value={5}>1.5 - Maintain Asset Inventory Information</option>
              <option value={6}>1.6 - Address Unmanaged Assets</option>
              <option value={7}>1.7 - Deploy Port Level Access Control</option>
              <option value={8}>1.8 - Utilize Client Certificates to Authenticate Hardware Assets</option>
            </Select>
          </FormControl>
          <FormControl variant="outlined" className={classes.formControl}>
            <TextField id="outlined-basic" label="Description" variant="outlined" multiline defaultValue="Utilize an active discovery tool to identify devices connected to the organization's network and update the hardware asset inventory."/>
          </FormControl>

          <Grid  className={classes.root} container  justify="space-between">
            <Grid item xs={5} >
              <FormControlLabel
                control={<Switch checked={checked} onChange={toggleChecked} />}
                label="Enabled"
                labelPlacement="start"
              />
            </Grid>
            <Grid item xs={7}>
              <FormControl variant="outlined" >
              <InputLabel htmlFor="input-calculation">Calculation</InputLabel>
              <Select
                className="selectInput"
                native
                value={state.age}
                defaultValue={0}
                onChange={handleChange}
                
                inputProps={{
                  name: "",
                  id: "input-calculation"
                }}
              >
              <option aria-label="None" value="" />
                <option value={0}>0 - Automatic</option>
                <option value={1}>1 - Not Implemented</option>
                <option value={2}>2 - Partially Implemented</option>    
                <option value={3}>3 - Fully Implemented on Some systems</option>
                <option value={4}>4 - Fully Implemented on Most systems</option>
                <option value={5}>5 - Fully Implemented on All systems</option>
                <option value={6}>6 - Not yet monitored</option>
              </Select>
              </FormControl>
            </Grid>
          </Grid>

          <Grid container className={classes.root} spacing={2} justify="center" alignItems="center">
            <Grid item xs={6} >
              <FormControl variant="outlined" className={classes.formControl}>
                <TextField id="outlined-basic" label="Weight" variant="outlined" defaultValue="0.125"/>
              </FormControl>
            </Grid>

            <Grid item xs={6} className={classes.gridItem}>
              <FormControl variant="outlined" className={classes.formControl}>
                <TextField id="outlined-basic" label="Target Value" variant="outlined" defaultValue="0.7"/>
              </FormControl>
            </Grid>
          </Grid>

        <HorizontalLabelPositionBelowStepper />
        </Container>
        
        
        </Paper>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
      </React.Fragment>  
    </div>
  )
}
