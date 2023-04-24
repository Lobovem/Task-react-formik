import React from 'react';
import { Formik, Form, Field } from 'formik';

function validateUsername(value) {
  let error;
  if (value === 'admin') {
    error = 'Nice try!';
  }
  return error;
}

function validateEmail(value) {
  let error;
  if (!value) {
    error = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = 'Invalid email address';
  }
  return error;
}

function validatePhone(value) {
  let error;
  if (!value) {
    error = 'Required';
  } else if (!/^(\d[-\s]?){11}\d$/i.test(value)) {
    error = 'Invalid phone number';
  }
  return error;
}

export const FieldLevelValidationExample = () => (
  <div>
    <h1>Signup</h1>
    <Formik
      initialValues={{
        username: '',
        email: '',
        phone: '',
      }}
      onSubmit={(values) => {
        alert(JSON.stringify(values, null, 2));
      }}
    >
      {({ errors, touched, validateForm }) => (
        <Form>
          <label htmlFor="username">First Name</label>
          <Field id="username" name="username" validate={validateUsername} />
          {errors.username && touched.username && <div>{errors.username}</div>}

          <label htmlFor="email">Email</label>
          <Field id="email" name="email" validate={validateEmail} />
          {errors.email && touched.email && <div>{errors.email}</div>}

          <label htmlFor="phone">Phone</label>
          <Field id="phone" name="phone" validate={validatePhone} />
          {errors.phone && touched.phone && <div>{errors.phone}</div>}

          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  </div>
);

export default FieldLevelValidationExample;
