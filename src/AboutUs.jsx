import React from "react";
import { Link } from "react-router-dom";
import { BearCounter, Controls } from "./CounterWithZustand";

export default function AboutUs() {
  return (
    <div>
      <BearCounter />
      <Controls />
      About Us
      <Link to="/">Home</Link>
      <a href="/">Home</a>
    </div>
  );
}
