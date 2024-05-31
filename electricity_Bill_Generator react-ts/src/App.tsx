import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import styles from "./App.module.scss";
import HomePage from "./pages/HomePage/HomePage";
import Users from "./pages/Users/Users";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Supervisor from "./pages/Supervisor/Supervisor";
import FieldWorker from "./pages/FieldWorker/FieldWorker";
import Admin from "./pages/Admin/Admin";
import BoardAdmin from "./pages/BoardAdmin/BoardAdmin";
import BoardMember from "./pages/BoardMember/BoardMember";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/users" element={<Users />} />
        <Route path="/supervisor" element={<Supervisor />} />
        <Route path="/fieldWorker" element={<FieldWorker />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/boardAdmin" element={<BoardAdmin />} />
        <Route path="/boardMember" element={<BoardMember />} />
      </Routes>
    </Router>
  );
}

export default App;
