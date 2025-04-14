import React from 'react';

export const Footer = () => {
  let footerStyle = {
    position: "fixed",
    bottom: "0",
    left: "0",
    width: "100%",
    backgroundColor: "#343a40", // bg-dark color
    color: "white", // text-light color
  };

  return (
    <footer style={footerStyle}>
      <div className="text-center py-3">
        <p> &copy;Copyright 2025 DoBee.com</p>
      </div>
    </footer>
  );
};