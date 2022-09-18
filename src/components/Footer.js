import React from "react";

const Footer = () => {
  return (
    <footer className="fixed-down">
      <p>{ new Date().getDate() }</p>
    </footer>
  );
}

export default Footer;
