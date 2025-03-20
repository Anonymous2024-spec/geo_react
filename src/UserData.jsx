import React, { useState, useEffect } from "react";

import "./UserData.css";
import useGetUsers from "./hooks/useGetUsers";

export default function UserData() {
  const {users,loading} = useGetUsers();

  return (
    <div className="container">
      <h1 className="title">My User List</h1>
      <ul className="list">
        {loading ? <p>Loading</p>: users.map((user) => (
          <li key={user.id} className="userCard">
            <div className="userInfo">
              <h2>
                Name: {user.firstName} {user.lastName}{" "}
                <span className="maidenName">({user.maidenName})</span>
              </h2>
              <p>Age: {user.age} years old</p>
              <p className="gender">Gender: {user.gender}</p>
              <p className="email">Email Address: {user.email}</p>
              <p>Contact: {user.phone}</p>
            </div>
            <img
              src={user.image}
              alt={`${user.firstName} ${user.lastName}`}
              className="avatar"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
