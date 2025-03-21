import React from "react";
import ComponentC from "./ComponentC";

export default function ComponentB() {
  return (
    <div>
      <div className="box">
        <h1>I am Component B</h1>
        <ComponentC/>
      </div>
    </div>
  );
}
