import React from "react";

function If(props) {
  const { username, isLoggedIn } = props;
  if (isLoggedIn) {
    return <h2>Welcome, {username}</h2>;
  }
}

export default If;
