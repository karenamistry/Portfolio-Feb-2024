// src/components/AppLayout.js
import React from "react";
import CurrentTimeEST from "../components/Time";
import NavIndicator from "../components/NavIndicator"; // Component for active nav item indicator
import EmailCopyButton from "../components/EmailCopyButton";
import { NavLink } from "react-router-dom";
import WeatherWidget from "../components/WeatherWidget";
import { SpeedInsights } from "@vercel/speed-insights/react";

const AppLayout = ({ children }) => {
  return (
    <div className="flex space-x-5 p-5 bg-white h-screen m-0 text-black font-geist">
      {/* Titles section 1 */}
      <aside className="w-1/3">
        <div className="flex flex-col items-start space-y-3">
          <div className="flex flex-col items-start text-base uppercase">
            <NavLink to="/">
              <div>Karena Mistry</div>
              <div>Product Designer</div>
            </NavLink>
          </div>
          <div className="flex flex-col items-start text-xs">
            <div>Based in Canada</div>
            <div>
              <CurrentTimeEST />
            </div>
            <div>
              <WeatherWidget />
            </div>
          </div>
          <div className="flex flex-col items-start text-xs">
            <div>© 2024</div>
          </div>
        </div>
      </aside>

      {/* Content 2 */}
      <main className="overflow-auto hide-scrollbar flex-grow w-full h-auto">
        {children}
      </main>

      {/* Navigation 3 */}
      <div className="flex flex-col space-y-12 w-1/3">
        {/* List */}
        <nav className="">
          <ul className="flex flex-col space-y-1 text-xs">
            <NavIndicator to="/" label="All" />
            <NavIndicator to="/cases" label="Case Studies" />
            <NavIndicator to="/projects" label="Side Projects" />
            <NavIndicator to="/info" label="Info" />
          </ul>
        </nav>

        {/* External Links */}
        <div className="flex flex-col space-y-1">
          <EmailCopyButton />
          <a
            href="https://read.cv/karena"
            target="_blank"
            rel="noopener noreferrer"
            className="uppercase text-xs"
          >
            Read.CV
          </a>
        </div>
      </div>
      <SpeedInsights />
      {/* End */}
    </div>
  );
};

export default AppLayout;
