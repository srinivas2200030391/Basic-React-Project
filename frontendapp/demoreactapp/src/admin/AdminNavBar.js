import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import "./admin.css";

import AdminHome from "./AdminHome";
import ViewJobSeekers from "./ViewJobSeekers";


export default function AdminNavBar() {
  return (
    <div>
      <nav>
        <ul>
          <Link to="/">Home</Link>
          <Link to="/admin/viewjobseekers">View Job Seekers</Link>
        
        </ul>
      </nav>

      <Routes>
        <Route path="/" Component={AdminHome} exact />
        <Route path="/admin/viewjobseekers" Component={ViewJobSeekers} exact />
    
      </Routes>
    </div>
  );
}
