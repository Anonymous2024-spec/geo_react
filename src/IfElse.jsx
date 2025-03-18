import React from "react";

function IfElse(props) {
  if (props.isLoggedIn) {
    return <h2>Welcome, {props.username}</h2>;
  }
  return <h2>Please, login to continue</h2>;
}

export default IfElse;
