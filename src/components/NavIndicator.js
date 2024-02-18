// src/components/NavIndicator.js
import React from "react";
import { NavLink } from "react-router-dom";

function NavIndicator(props) {
  const { to, label } = props;
  return (
    <li>
      <NavLink
        to={to}
        className={function ({ isActive }) {
          return `flex items-center gap-2  ${
            isActive
              ? 'before:content-[""] before:block before:w-3 before:h-3 before:bg-black before:rounded-full'
              : ""
          }`;
        }}
      >
        {label}
      </NavLink>
    </li>
  );
}

export default NavIndicator;
