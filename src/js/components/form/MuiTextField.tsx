import TextField, { TextFieldProps } from '@material-ui/core/TextField';
import React from 'react';

// TODO fix any
interface IProps {
  form: any;
  field: any;
  label: any;
}

export function MuiTextField({ form, field, label, ...otherProps }: IProps & TextFieldProps) {

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
    />
  );
}

export default MuiTextField;
