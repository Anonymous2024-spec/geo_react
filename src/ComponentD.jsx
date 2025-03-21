import React from "react";
import { useContext } from "react";
import { CurrentUserContext } from "./ComponentA";

export default function ComponentD() {
  const user = useContext(CurrentUserContext);
  return (
    <div className="box">
      <h1>I am Component D </h1>
      {`Hi again ${user}`}
    </div>
  );
}
