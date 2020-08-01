import React from 'react';
import { Formik } from 'formik';
import { Button, Form } from 'react-bootstrap';
import { useCookies } from 'react-cookie';

const LoginForm = () => {
  const [, setCookie] = useCookies(['token']);
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={() => {
        setCookie('token', 'abs');
      }}
    >
      {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
        <Form onSubmit={handleSubmit} className="bg-white p-4 w-25">
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              type="email"
              name="email"
              placeholder="Enter email"
              isInvalid={!!errors.email && touched.email}
            />
            <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              type="password"
              name="password"
              placeholder="Password"
              isValid={errors.password && touched.password}
            />
            <Form.Control.Feedback>{errors.password}</Form.Control.Feedback>
          </Form.Group>
          <Button variant="primary" type="submit">
            Sign in
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
