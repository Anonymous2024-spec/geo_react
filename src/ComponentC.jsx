import React from "react";
import ComponentD from "./ComponentD";

export default function ComponentC({ user }) {
  return (
    <div className="box">
      <h1>I am Component C</h1>
      <ComponentD />
    </div>
  );
}
