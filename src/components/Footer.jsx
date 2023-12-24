import React from "react";

const fecHoy = new Date();

function Footer() {
  return (
    <footer>
      <p>Copyright &#169; {fecHoy.getFullYear()} </p>
    </footer>
  );
}

export default Footer;
