import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
function Footer() {
  return (
    <div className="footer">
      Made by
      Irfan Ahmed &nbsp;
      <Link
        to={`https://github.com/unknownBalak/clothsstore`}
        style={{ fontSize: "14px" }}
      >
      
      </Link>
    </div>
  );
}

export default Footer;
