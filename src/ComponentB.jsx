import React from "react";
import ComponentC from "./ComponentC";

export default function ComponentB({ user }) {
  return (
    <div>
      <div className="box">
        <h1>I am Component B</h1>
        <ComponentC user={user} />
      </div>
    </div>
  );
}
