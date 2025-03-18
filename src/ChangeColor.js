import { useState } from "react";

function ChangeColor() {
  const [color, setColor] = useState("red");
  const handleClick = () => {
    setColor((color) => (color === "red" ? "blue" : "red"));
  };

  return (
    <div
      onClick={handleClick}
      style={{
        backgroundColor: color,
        width: "200px",
        height: "200px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
      }}
    >
      Click me!
    </div>
  );
}

export default ChangeColor;
