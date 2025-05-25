import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { App } from "./App";
import { MyComponent } from "./Component.jsx";
import {Res} from "./Repage/Res.jsx";
import bgImage from './public/BK-logo.jpg';

function Page() {
  return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/Repage" element={<Res />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(<Page />);
