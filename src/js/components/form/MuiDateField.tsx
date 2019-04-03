import MomentUtils from '@date-io/moment';
import { DatePicker, MuiPickersUtilsProvider } from 'material-ui-pickers';
import moment from 'moment';
import React from 'react';

export function MuiDateField({ form, field, label, ...otherProps }) {

  const helperText = form.touched[field.name] && form.errors[field.name]
    ? form.errors[field.name] : '';

  const handleChange = (value) => {
    form.setFieldValue(field.name, value.toISOString(), true);
  };

  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <DatePicker
        {...field}
        onChange={handleChange}
        value={moment(field.value)}
        {...otherProps}
        fullWidth
        error={!!(form.touched[field.name] && form.errors[field.name])}
        label={label}
        margin="normal"
        helperText={helperText}
        InputLabelProps={{ shrink: true }}
        animateYearScrolling
        minDate={new Date()}
      />
    </MuiPickersUtilsProvider>);
}

export default MuiDateField;
