import Fab from '@material-ui/core/Fab';
import { createStyles, withStyles } from '@material-ui/core/styles';
import axios from 'axios';
import { Field, FieldProps, Form, Formik, FormikActions } from 'formik';
import React, { Component } from 'react';
import { Translate } from 'react-redux-i18n';
import * as Yup from 'yup';

import MuiCheckboxField from 'components/form/MuiCheckboxField';
import MuiTextField from 'components/form/MuiTextField';
import { env } from 'const/env';

const styles = createStyles({
  form: {
    padding: 24,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minWidth: 250,
  },
  button: {
    width: 150,
    marginTop: 24,
  },
});

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const ContactSchema = Yup.object().shape({
  name: Yup.string().nullable().max(100).required(),
  email: Yup.string().email().required(),
  phone: Yup.string().nullable().matches(phoneRegExp, 'Phone number is not valid').max(30),
  content: Yup.string().max(500).min(10).required(),
  terms: Yup.boolean().oneOf([true], 'Must Accept Terms and Conditions'),
});

interface IContactFormRequest {
  name: string;
  email: string;
  phone: string;
  content: string;
  terms: boolean;
}

const formInitialValues = {
  name: '',
  email: '',
  phone: '',
  content:  '',
  terms: false,
  submit: null as any,
};

interface IContactFormProps {
  classes: {
    form: string,
    button: string,
  };
}

class ContactForm extends Component<IContactFormProps, {}> {
  public handleSubmit = (
    values: IContactFormRequest,
    { setSubmitting, setErrors, setStatus, resetForm }: FormikActions<IContactFormRequest>,
    ): Promise<void> => {

    return axios.post(env.API_URL, values)
      .then(() => {
        resetForm(formInitialValues);
        setStatus({ success: true });
      })
      .catch((error) => {
        console.error(error);
        setStatus({ success: false });
        setSubmitting(false);
        setErrors({ submit: error.message } as any);
      });
  }

  public render(): JSX.Element {
    const { classes } = this.props;
    return (
      <Formik
        initialValues={formInitialValues}
        onSubmit={this.handleSubmit}
        validationSchema={ContactSchema}
      >
      {({ errors, isSubmitting, isValid, status }) =>
        <Form className={classes.form}>
          {status && status.success && <div>SUCCESS!!</div>}
          {errors && (errors as any).submit &&  <div>BLAD!!</div>}
          <Field
            name="name"
            render={({ form, field }: FieldProps<IContactFormRequest>) =>
              <MuiTextField form={form} field={field} label={<Translate value="contact.form.name.label" />} />}
          />
          <Field
            name="email"
            render={({ form, field }: FieldProps<IContactFormRequest>) =>
              <MuiTextField form={form} field={field} label={<Translate value="contact.form.email.label" />}  />}
          />
          <Field
            name="phone"
            render={({ form, field }: FieldProps<IContactFormRequest>) =>
              <MuiTextField form={form} field={field} label={<Translate value="contact.form.phone.label" />} />}
          />
          <Field
            name="content"
            render={({ form, field }: FieldProps<IContactFormRequest>) =>
              <MuiTextField form={form} field={field} label={<Translate value="contact.form.message.label" />}  multiline rows="4" />}
          />

          <Field
            name="terms"
            render={({ form, field }: FieldProps<IContactFormRequest>) =>
              <MuiCheckboxField form={form} field={field} label={<Translate value="contact.form.terms.label" />} />}
          />

          <Fab
            type="submit"
            color="secondary"
            variant="extended"
            className={classes.button}
            disabled={isSubmitting}
          >
            Submit
          </Fab>

        </Form>
         }
      </Formik>
    );
  }
}

export default withStyles(styles)(ContactForm);
