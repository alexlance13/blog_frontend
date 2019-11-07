import React from "react";
import Loader from "react-loader-spinner";
import classes from "./Loader.module.css";

export default () => {
  return (
    <div className={classes.main}>
      <Loader type="Puff" color="#333333" height={100} width={100} />
    </div>
  );
};
