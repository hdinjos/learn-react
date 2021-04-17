import React from "react";
import { Link } from "react-router-dom";

function index() {
  return (
    <div>
      <Link to="/">Home</Link>
      <h2>Ini halaman about</h2>
    </div>
  );
}

export default index;
