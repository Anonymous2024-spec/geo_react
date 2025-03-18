import React from "react";

function Button({
  label = "Click Me",
  onClick,
  backgroundColor = "gray",
  color = "white",
  style = {},
  ...props
}) {
  const defaultStyles = {
    backgroundColor,
    color,
    border: "1px solid black",
    borderRadius: "5px",
    padding: "10px",
    margin: "5px",
    cursor: "pointer",
    fontSize: "20px",
    fontWeight: "bold", 
  };

  return (
    <button onClick={onClick} style={{ ...defaultStyles, ...style }} {...props}>
      {label}
    </button>
  );
}

export default Button;
