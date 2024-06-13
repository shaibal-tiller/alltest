import * as React from "react";
import { Link, Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import Login from "../VisitorCount/login";
import { RequireAuth } from "./authContext";

const Home = () => <h1>Home (Public)</h1>;
const Pricing = () => <h1>Pricing (Public)</h1>;

const Dashboard = () => <h1>Dashboard (Private)</h1>;
const Settings = () => <h1>Settings (Private)</h1>;





export default function App() {
    return (
        <div>
            <Nav />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route
                    path="/dashboard"
                    element={
                        <RequireAuth>
                            <Dashboard />
                        </RequireAuth>
                    }
                />
                <Route
                    path="/settings"
                    element={
                        <RequireAuth>
                            <Settings />
                        </RequireAuth>
                    }
                />
                <Route path="/login" element={<Login />} />
            </Routes>
        </div>
    );
}