import { FormikHandlers } from 'formik';

export default interface IFieldProps {
  onChange: FormikHandlers['handleChange'];
  onBlur: FormikHandlers['handleBlur'];
  value: any;
  name: string;
}
