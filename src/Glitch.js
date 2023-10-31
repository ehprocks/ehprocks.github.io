import React from "react";

function Glitch() {
  const stackStyle: React.CSSProperties = {
    "--stacks": 3,
  };

  const indexStyles: React.CSSProperties = {
    "--index": "0",
  };

  return (
    <div className="glitch-container">
      <div className="stack" style={stackStyle}>
        <span style={indexStyles}>Ethical Hackers of Purdue</span>
        <span style={{ ...indexStyles, "--index": "1" }}>
          Ethical Hackers of Purdue
        </span>
        <span style={{ ...indexStyles, "--index": "2" }}>
          Ethical Hackers of Purdue
        </span>
      </div>
    </div>
  );
}

export default Glitch;
