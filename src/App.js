import React from 'react';
import { useFormik } from 'formik';

const validate = (values) => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = 'Required';
  } else if (values.firstName.length > 15) {
    errors.firstName = 'Must be 15 characters or less';
  }

  if (!values.lastName) {
    errors.lastName = 'Required';
  } else if (values.lastName.length > 20) {
    errors.lastName = 'Must be 20 characters or less';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.telephone) {
    errors.telephone = 'Required';
  } else if (!/^(\d[-\s]?){11}\d$/i.test(values.telephone)) {
    errors.telephone = 'Invalid telephone number';
  }
  return errors;
};

const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      telephone: '',
      email: '',
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="firstName">First Name</label>
      <input id="firstName" name="firstName" type="text" onChange={formik.handleChange} value={formik.values.firstName} />
      {formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}

      <label htmlFor="lastName">Last Name</label>
      <input id="lastName" name="lastName" type="text" onChange={formik.handleChange} value={formik.values.lastName} />
      {formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}

      <label htmlFor="telephone">Telephone</label>
      <input id="telephone" name="telephone" type="tel" onChange={formik.handleChange} value={formik.values.telephone} />
      {formik.errors.telephone ? <div>{formik.errors.telephone}</div> : null}

      <label htmlFor="email">Email Address</label>
      <input id="email" name="email" type="email" onChange={formik.handleChange} value={formik.values.email} />
      {formik.errors.email ? <div>{formik.errors.email}</div> : null}

      <button type="submit">Submit</button>
    </form>
  );
};

export default SignupForm;
