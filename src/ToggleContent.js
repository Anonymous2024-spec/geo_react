import React, { useState } from "react";

const ToggleContent = () => {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible((isVisible) => !isVisible);
  };

  return (
    <div>
      <button onClick={toggleVisibility}>
        {isVisible ? "Hide" : "Show"} Content
      </button>
      {isVisible && (
        <div>
          <h1>This is the Header</h1>
          <p>This is a description that can be toggled on and off.</p>
        </div>
      )}
    </div>
  );
};

export default ToggleContent;
