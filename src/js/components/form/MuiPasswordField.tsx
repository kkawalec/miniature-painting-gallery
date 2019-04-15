import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputLabel from '@material-ui/core/InputLabel';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import React, { useState } from 'react';

// TODO fix any
interface IProps {
  form: any;
  field: any;
  label: any;
}

export function MuiPasswordField({ form, field, label, ...otherProps }: IProps) {

  const [shouldShowPassword, setShouldShowPassword] = useState(false);

  const isError = !!(form.touched[field.name] && form.errors[field.name]);
  const helperText = isError ? form.errors[field.name] : '';

  const adornment = (
    <InputAdornment position="end">
      <IconButton
        aria-label="Toggle password visibility"
        onClick={() => setShouldShowPassword(!shouldShowPassword)}
      >
      {shouldShowPassword ? <Visibility /> : <VisibilityOff />}
      </IconButton>
    </InputAdornment>
    );

  return (
    <FormControl fullWidth>
      <InputLabel htmlFor="adornment-password" shrink={true} error={isError}>{label}</InputLabel>
        <Input
          {...field}
          {...otherProps}
          error={isError}
          type={shouldShowPassword ? 'text' : 'password'}
          endAdornment={adornment}
        />
        {isError && <FormHelperText error>{helperText}</FormHelperText>}
      </FormControl>
  );
}

export default MuiPasswordField;
