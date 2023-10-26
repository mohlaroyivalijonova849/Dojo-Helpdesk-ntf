import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div className="flex items-center myContainer gap-5 ">
        <img
          src="http://192.168.33.143:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdojo-logo.dd24bad3.png&w=96&q=100"
          alt=""
        />
        <h1 className="text-[#7856ff] text-2xl font-bold">Dojo Helpdesk</h1>
        <Link to="/" className="text-[#6b7280] font-normal">
          Dashboard
        </Link>
        <Link to="/newTikert" className="text-[#6b7280] font-normal">
          Tickets
        </Link>
      </div>
      <hr />
    </div>
  );
}

export default Navbar;
