import React from "react";

export default function Layout({ children }) {
  return (
    <div className="container">
      <h1>Image → Caption Generator</h1>
      {children}
    </div>
  );
}
