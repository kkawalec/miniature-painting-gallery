import TextField from '@material-ui/core/TextField';
import React from 'react';

export function MuiTextField({ form, field, label, ...otherProps }) {

  const helperText = form.touched[field.name] && form.errors[field.name]
    ? form.errors[field.name] : '';

  return (
    <TextField
      {...field}
      {...otherProps}
      fullWidth
      error={!!(form.touched[field.name] && form.errors[field.name])}
      label={label}
      margin="normal"
      helperText={helperText}
      InputLabelProps={{ shrink: true }}
    /> );
}

export default MuiTextField;
