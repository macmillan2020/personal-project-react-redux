import React from "react";

const Input = ({ handleChange, placeholder, name}) => {
  // console.log(getUserInput)
  return <React.Fragment>
    <label htmlFor="username">GitHub Username: </label>
    <input name={name} type="text" onChange={handleChange} placeholder={placeholder} required/>

  </React.Fragment>
};

export default Input;