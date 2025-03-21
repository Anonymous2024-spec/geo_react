import React, { createContext, useState } from "react";
import ComponentB from "./ComponentB";

export const CurrentUserContext = createContext(null);

export default function ComponentA() {
  const [user, setUser] = useState("Shifah");
  return (
    <CurrentUserContext.Provider value={user}>
      <div className="box">
        <h1>I am Component A</h1>
        <p>{`Hi, Im ${user}`}</p>
        <ComponentB />
      </div>
    </CurrentUserContext.Provider>
  );
}
