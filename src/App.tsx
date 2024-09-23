import React from "react";
import Labs from "./Labs";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { Hash } from "crypto";
import Lab1 from "./Labs/Lab1";
import Lab2 from "./Labs/Lab2";
import Kanbas from "./Kanbas";

function App() {
  return (
    <HashRouter>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="Labs" />} />
          <Route path="/Labs/*" element={<Labs />} />
          <Route path="/Kanbas/*" element={<Kanbas />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
