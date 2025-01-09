import React from "react";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import FindJobs from "./pages/FindJobs";
const Pages = () => {
  return (
    <div className="">
      <Nav />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/find" element={<FindJobs />} />
        <Route path="/post" element={<div>Post a Job Page</div>} />
        <Route path="/sign-in" element={<div>Sign In Page</div>} />
        <Route path="/sign-up" element={<div>Sign Up Page</div>} />
      </Routes>
    </div>
  );
};

export default Pages;
