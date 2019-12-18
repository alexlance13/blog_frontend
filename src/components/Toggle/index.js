import React from "react";
import Switch from "@material-ui/core/Switch";
import classes from "./Toggle.module.css";

export default function FormControlLabelPosition(props) {
  return (
    <div className={classes.main}>
      <span>{props.left}</span>
      <Switch disableRipple={true} checked={props.isChecked} onChange={() => props.setIsChecked()} />
      <span>{props.right}</span>
    </div>
  );
}
