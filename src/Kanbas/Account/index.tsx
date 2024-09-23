import React from "react";
import Signin from "./Signin";
import Signup from "./Signup";
import Profile from "./Profile";
import { Routes, Route, Navigate } from "react-router";

export default function Account() {
    return (
        <div id="wd-account-screen">
            <h2>Account</h2>
            <Routes>
                <Route path="/" element={<Navigate to="/Kanbas/Account/Signin" />} />
                <Route path="/Signin" element={<Signin />} />
                <Route path="/Profile" element={<Profile />} />
                <Route path="/Signup" element={<Signup />} />
            </Routes>
        </div>
            
    )
}