import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const linkStyle = {
    textDecoration: "none",
    color: "black",
    fontSize: "24px",
  };
  return (
    <nav style={{ display: "flex", justifyContent: "flex-end", marginRight: "20px" }}>
      <ul style={{ display: "flex", justifyContent: "space-between", gap: "20px" }}>
        <Link style={linkStyle} to="/">
          Home
        </Link>
        <Link style={linkStyle} to="/owner">
          Owner
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
