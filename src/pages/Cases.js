import React from "react";
import { NavLink } from "react-router-dom";
import "../../src/index.css";

function Cases() {
  return (
    <div>
      <h2 className="text-sm uppercase">Cases</h2>
      <ul className="text-xs text-[#0000ed] underline ">
        <li>
          <NavLink
            className={({ isActive }) =>
              `nav-link ${
                isActive
                  ? "text-[#0000ed] underline"
                  : "text-[#0000ed] underline "
              }`
            }
            to="/cases/supernaone"
          >
            SupernaOne
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              `nav-link ${
                isActive
                  ? "text-[#0000ed] underline"
                  : "text-[#0000ed] underline "
              }`
            }
            to="/cases/supernarwd"
          >
            Superna RWD
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              `nav-link ${
                isActive
                  ? "text-[#0000ed] underline"
                  : "text-[#0000ed] underline "
              }`
            }
            to="/cases/supernagc"
          >
            Superna GC
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              `nav-link ${
                isActive
                  ? "text-[#0000ed] underline"
                  : "text-[#0000ed] underline "
              }`
            }
            to="/cases/expedite"
          >
            Expedite
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              `nav-link ${
                isActive
                  ? "text-[#0000ed] underline"
                  : "text-[#0000ed] underline "
              }`
            }
            to="/cases/beacons"
          >
            Beacons
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              `nav-link ${
                isActive
                  ? "text-[#0000ed] underline"
                  : "text-[#0000ed] underline "
              }`
            }
            to="/cases/stocate"
          >
            Stocate
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Cases;
