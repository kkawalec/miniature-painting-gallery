import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { withStyles } from '@material-ui/core/styles';
import React from 'react';

export interface ISelectValue {
  label: string;
  value: any;
}

const styles = theme => ({
  formControl: {
    marginTop: theme.spacing.unit,
  },
});

export function MuiSelectField({ form, field, label, selectValues, classes, ...otherProps }) {

  const isError = !!(form.touched[field.name] && form.errors[field.name]);
  const helperText = isError ? form.errors[field.name] : '';

  return (
    <FormControl fullWidth className={classes.formControl}>
      <InputLabel
        htmlFor={field.name}
        shrink={true}
        error={isError}
      >
        {label}
      </InputLabel>

      <Select
        {...field}
        {...otherProps}
        error={isError}
        inputProps={{ name: field.name, id: field.name }}
      >

        {selectValues.map(
          (sv: ISelectValue) => <MenuItem key={sv.value} value={sv.value}>{sv.label}</MenuItem>)
        }
      </Select>
      {isError && <FormHelperText error>{helperText}</FormHelperText>}
    </FormControl>
  );
}

export default withStyles(styles)(MuiSelectField);
