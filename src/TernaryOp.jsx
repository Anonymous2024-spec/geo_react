import React from "react";

export default function TernaryOp({ isLoggedIn, username }) {
  return isLoggedIn ? (
    <h2>Welcome, {username}</h2>
  ) : (
    <h2>Please, login to continue</h2>
  );
}
