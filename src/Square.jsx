import React from "react";

function Square({ children, black }) {
  const bgClass = black ? "square-black" : "square-white";
  return <div className={bgClass}>{children}</div>;
}

export default Square;
