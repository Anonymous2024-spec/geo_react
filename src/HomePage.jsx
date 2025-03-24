import React from "react";
import { Link } from "react-router-dom";
import { BearCounter, Controls } from "./CounterWithZustand";

export default function HomePage() {
  return (
    <div>
      Home Page
      <Link to="/about">About</Link>
      <a href="/about">About</a>
      <BearCounter />
      <Controls />
    </div>
  );
}
