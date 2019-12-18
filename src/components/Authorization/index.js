import React, { useState } from "react";
import Header from "../Header";
import classes from "./Authorization.module.css";
import { Formik, Form, Field } from "formik";
import Toggle from "../Toggle";

const Authorization = props => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div>
      <Header title="Authorization" />
      <Toggle
        isChecked={isChecked}
        setIsChecked={() => setIsChecked(!isChecked)}
        left="Log in"
        right="Sign up"
      />
      <div className={classes.auth}>
        <Formik
          initialValues={{
            login: "",
            password: ""
          }}
          validationSchema={props.signupSchema}
          onSubmit={values => {
            isChecked ? props.registerButtonHandler(values) : props.loginButtonHandler(values);
          }}
          isValid={false}
        >
          {({ errors, touched, isValid }) => (
            <Form>
              <label htmlFor="usr">Login:</label>
              <Field name="login" className="form-control" />
              {errors.login && touched.login ? (
                <div className="alert alert-danger">{errors.login}</div>
              ) : (
                <br></br>
              )}
              <label htmlFor="pwd">Password:</label>
              <Field name="password" className="form-control" type="password" />
              {errors.password && touched.password ? (
                <div className="alert alert-danger">{errors.password}</div>
              ) : (
                <br></br>
              )}
              {isChecked ? (
                <button type="submit" className="btn btn-primary" disabled={!isValid}>
                  Sign up
                </button>
              ) : (
                <button type="submit" className="btn btn-info" disabled={!isValid}>
                  Log in
                </button>
              )}
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Authorization;
