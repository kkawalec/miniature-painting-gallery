import TextField, { TextFieldProps } from '@material-ui/core/TextField';
import { FormikProps } from 'formik';
import React from 'react';

import IFieldProps from './IFieldProps';

interface IProps {
  form: FormikProps<any>;
  field: IFieldProps;
  label: React.ReactNode;
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
