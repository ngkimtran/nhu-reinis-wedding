import React from "react";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import MainEvents from "./pages/MainEvents";
import WithFamily from "./components/WithFamily";
import WithFriends from "./components/WithFriends";
import Instruction from "./components/Instruction";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />}>
          <Route index path="" element={<Instruction />} />
          <Route index path="family" element={<WithFamily />} />
          <Route path="friends" element={<WithFriends />} />
        </Route>
        <Route path="/events" element={<MainEvents />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
