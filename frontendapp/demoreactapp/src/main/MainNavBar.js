import React from "react";
import { Route, Link, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import "./style.css";
import Registration from "../jobseeker/Registration";
import JobSeekerLogin from "../jobseeker/JobSeekerLogin";
import AdminLogin from "../admin/AdminLogin";
import AdminHome from "../admin/AdminHome";
import JobSeekerHome from "../jobseeker/JobSeekerHome";

const MainNavBar = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/registration">Registration</Link>
          </li>
          <li>
            <Link to="/jobseekerlogin">Job Seeker Login</Link>
          </li>
          <li>
            <Link to="/adminlogin">Admin Login</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/about" element={<About />} exact />
        <Route path="/registration" element={<Registration />} exact />
        <Route path="/jobseekerlogin" element={<JobSeekerLogin />} exact />
        <Route path="/adminlogin" element={<AdminLogin />} exact />
        <Route path="/contact" element={<Contact />} exact />
        <Route path="/adminhome" element={<AdminHome />} />
        <Route path="/jobseekerhome" element={<JobSeekerHome />} />
      </Routes>
    </div>
  );
};

export default MainNavBar;
