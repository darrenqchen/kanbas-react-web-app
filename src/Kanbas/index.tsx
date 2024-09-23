import Account from "./Account"
import { Routes, Route, Navigate } from "react-router";

export default function Kanbas() {
  return (
    <div id="wd-kanbas">
      <h1>Kanbas</h1>
      <Routes>
        <Route path="/" element={<Navigate to="Account" />} />
        <Route path="/Account/*" element={<Account />} />
      </Routes>
    </div>
  );
}
