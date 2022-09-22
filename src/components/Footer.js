import React from "react";

const Footer = () => {

  const currentDate = new Date().getDate() + " / " + new Date().getMonth() + " / " + new Date().getFullYear()
  return (
    <footer className="fixed-down">
      <p>{ currentDate }</p>
      <a href="https://github.com/arx0x0/productiv8" target="_blank">Source Code</a>
    </footer>
  );
}

export default Footer;
