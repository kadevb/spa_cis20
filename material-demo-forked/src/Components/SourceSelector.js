import React, {Fragment} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 120,
    display: 'flex'
  },

  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SourceSelector() {
  const classes = useStyles();
  const [source, setSource] = React.useState({
    source: '',
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setSource({
      ...source,
      [name]: event.target.value,
    });
    console.log(source)
  };

  return (
    <Fragment>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple"> Source</InputLabel>
        <Select
          native
          value={source.source}
          onChange={handleChange}
          label="Source"
          inputProps={{
            name: 'source',
            id: 'outlined-age-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value={1}>CIS20 Main Categories</option>
          <option value={2}>CIS20 Controls</option>
          <option value={3}>CIS20 Sub-Controls</option>
          <option value={4}>CIS20 Metrics</option>
          <option value={5}>CIS20 Sub-Metrics</option>
          <option value={6}>CIS20 DHCP Servers</option>
          <option value={7}>CIS20 Monitored Authorization Systems</option>
          <option value={8}>CIS20 Vulnerability Scanners</option>
        </Select>
        <FormHelperText>Select data source</FormHelperText>
      </FormControl>
      </Fragment>
  );
}