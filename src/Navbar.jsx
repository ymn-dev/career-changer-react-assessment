import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ display: "flex", justifyContent: "flex-end", marginRight: "20px" }}>
      <ul style={{ display: "flex", justifyContent: "space-between", gap: "20px" }}>
        <Link to="/">Home</Link>
        <Link to="/owner">Owner</Link>
      </ul>
    </nav>
  );
};

export default Navbar;
