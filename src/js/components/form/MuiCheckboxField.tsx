
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormLabel from '@material-ui/core/FormLabel';
import { FormikProps } from 'formik';
import React from 'react';

import IFieldProps from './IFieldProps';

interface IProps {
  form: FormikProps<any>;
  field: IFieldProps;
  label: React.ReactNode;
  header?: React.ReactNode;
}

export function MuiCheckboxField({ form, field, label, header }: IProps) {
  const isError = !!(form.touched[field.name] && form.errors[field.name]);
  const helperText = isError ? form.errors[field.name] : '';

  return (
    <FormControl required error={isError}>
    {header && <FormLabel>{header}</FormLabel>}
    <FormGroup>
      <FormControlLabel
        control={
          <Checkbox
            {...field}
          />
        }
        label={label}
      />
    </FormGroup>
    {isError && <FormHelperText error>{helperText}</FormHelperText>}
  </FormControl>
  );
}

export default MuiCheckboxField;
