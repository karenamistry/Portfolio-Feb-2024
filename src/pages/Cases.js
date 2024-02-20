import React from "react";
import { NavLink } from "react-router-dom";
import "../../src/index.css";
import ProtectedContent from "../components/Protect";

function Cases() {
  return (
    <ProtectedContent>
      <div>
        <h2 className="header">Case Studies</h2>
        <p className="body">
          Projects that i've have been worked on in a full-time capacity.
        </p>

        <ul className="body text-[#0000ed] underline ">
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
    </ProtectedContent>
  );
}

export default Cases;
