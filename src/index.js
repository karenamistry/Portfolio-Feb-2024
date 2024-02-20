import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./App.css";
// import reportWebVitals from "./reportWebVitals";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./pages/AppLayout"; // Layout component that includes navigation
import All from "./pages/All";
import Cases from "./pages/Cases";
import Projects from "./pages/Projects";
import Info from "./pages/Info";

import SupernaOne from "./pages/cases/SupernaOne";
import SupernaRWD from "./pages/cases/SupernaRWD";
import SupernaGC from "./pages/cases/SupernaGC";
import Expedite from "./pages/cases/Expedite";
import Beacons from "./pages/cases/Beacons";
import Stocate from "./pages/cases/Stocate";
import { AuthProvider } from "./components/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppLayout>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<All />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/info" element={<Info />} />
            <Route path="/cases" element={<Cases />} />
            <Route path="/cases/supernaone" element={<SupernaOne />} />
            <Route path="/cases/supernarwd" element={<SupernaRWD />} />
            <Route path="/cases/supernagc" element={<SupernaGC />} />
            <Route path="/cases/expedite" element={<Expedite />} />
            <Route path="/cases/beacons" element={<Beacons />} />
            <Route path="/cases/stocate" element={<Stocate />} />
          </Routes>
        </AuthProvider>
      </AppLayout>
    </BrowserRouter>
  </React.StrictMode>
);
