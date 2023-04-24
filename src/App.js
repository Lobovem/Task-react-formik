import React from 'react';
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';
import './App.css';

const Input = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="input" {...field} {...props} />
      {meta.touched && meta.error ? <div className="error">{meta.error}</div> : null}
    </>
  );
};

const SignupForm = () => {
  return (
    <>
      <h1 className="title">Form Formik!</h1>
      <Formik
        initialValues={{
          userName: '',
          email: '',
          phone: '',
        }}
        validationSchema={Yup.object({
          userName: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
          email: Yup.string().email('Invalid email address').required('Required'),
          phone: Yup.string()
            .matches(/^(\d[-\s]?){11}\d$/i, 'Invalid telephone number')
            .required('Required'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form className="form">
          <Input label="User name" name="userName" type="text" placeholder="User name" />
          <Input label="Email Address" name="email" type="email" placeholder="Email" />
          <Input label="Phone" name="phone" type="tel" placeholder="Phone number" />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  );
};

export default SignupForm;
