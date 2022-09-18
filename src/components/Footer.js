import React from "react";

const Footer = () => {

  const currentDate = new Date().getDate() + " / " + new Date().getMonth() + " / " + new Date().getFullYear()
  return (
    <footer className="fixed-down">
      <p>{ currentDate }</p>
    </footer>
  );
}

export default Footer;
