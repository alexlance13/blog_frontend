import React, { useState } from "react";
import classes from "./CommentForm.module.css";

export default function CommentForm(props) {
  const [value, setValue] = useState("");

  return (
    <div className={classes.main}>
      <div class="form-group shadow-textarea">
        <textarea
          value={value}
          class="form-control z-depth-1"
          id="exampleFormControlTextarea6"
          rows="3"
          placeholder="Write your comment here..."
          onChange={e => setValue(e.target.value)}
        ></textarea>
      </div>
      <div class="col-auto">
        <button
          type="submit"
          class="btn btn-primary mb-2"
          onClick={() => {
            props.submitHandler(value);
            setValue(" ");
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
}
