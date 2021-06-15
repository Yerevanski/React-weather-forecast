import React, { FC } from 'react';

import classes from "./Form.module.css";

interface FormProps {
  input: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  submitHandler: (event: React.FormEvent<HTMLFormElement>) => void;
}

//Form component.
const Form: FC<FormProps> = ({ input, handleChange, submitHandler }) => {
  return (
    <form onSubmit={submitHandler}>
      <div className={classes.formControl}>
        <label htmlFor="city">City</label>
        <input
          value={input}
          type="text"
          id="city"
          placeholder="Insert City"
          onChange={handleChange}
          required
        />
        <div className={classes.description}>
          Insert the city and press the button.
        </div>
      </div>
      <button className={classes.btn}>Get Forecast</button>
    </form>
  );
};

export default Form;
