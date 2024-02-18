import React from "react";
import { NavLink } from "react-router-dom";

function Cases() {
  return (
    <div>
      <h2 className="text-lg uppercase">Cases</h2>
      <ul>
        <li>
          <NavLink to="/cases/supernaone">SupernaOne</NavLink>
        </li>
        <li>
          <NavLink to="/cases/supernarwd">Superna RWD</NavLink>
        </li>
        <li>
          <NavLink to="/cases/supernagc">Superna GC</NavLink>
        </li>
        <li>
          <NavLink to="/cases/expedite">Expedite</NavLink>
        </li>
        <li>
          <NavLink to="/cases/beacons">Beacons</NavLink>
        </li>
        <li>
          <NavLink to="/cases/stocate">Stocate</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Cases;
