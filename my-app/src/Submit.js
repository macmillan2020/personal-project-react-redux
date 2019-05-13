import React from "react";

 const Submit = ({ handleClick }) => {
  // console.log(handleClick)
  return <React.Fragment> <button className="button" type="button" onClick={handleClick}>Log In</button> </React.Fragment>
};

export default Submit;