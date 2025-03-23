import React from "react";

import {BrowserRouter, Route, Routes} from "react-router"
import LandingPage from "../LandingPage/LandingPage";
import Login from "../Login/Login"
import Signup from "../Signup/Signup"
import Profile from "../Profile/Profile"
import Navbar from "../Navbar/Navbar";
const Home = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Home;
