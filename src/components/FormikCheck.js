import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string()
    .email("Invalid email")
    .required("Required")
});

export const ValidationSchemaExample = () => (
  <div>
    <h1>Signup</h1>
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        reg: false
      }}
      validationSchema={SignupSchema}
    >
      {({ errors, touched }) => (
        <Form>
          <Field name="firstName" />
          {errors.firstName && touched.firstName ? <div>{errors.firstName}</div> : <br></br>}
          <Field name="lastName" />
          {errors.lastName && touched.lastName ? <div>{errors.lastName}</div> : <br></br>}
          <Field name="email" type="email" />
          {errors.email && touched.email ? <div>{errors.email}</div> : <br></br>}
          <button type="button" value="Sub" onClick={e => console.log(e)}>
            Submit
          </button>
          <button type="button" value="Reg" onClick={e => console.log(e)}>
            Reg
          </button>
        </Form>
      )}
    </Formik>
  </div>
);
