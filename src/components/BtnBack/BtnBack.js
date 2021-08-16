import React from "react";
import { Link } from "react-router-dom";
import './BtnBack.css'

function BtnBack() {
  return (
    <div className="container">
      <Link to="/">
        <h4 className="btn fas fa-arrow-left">Back</h4>
      </Link>
    </div>
  );
}

export default BtnBack;
