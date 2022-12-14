import React, { Component } from "react";

// Stateless Functional Coomponent
const NavBar = () => {
  console.log("NavBar - Rendered");

  return (
    <nav>
      <a className="NavBar header-wrap">Estacionamiento</a>
    </nav>
  );
};

export default NavBar;
