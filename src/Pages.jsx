import React from "react";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import FindJobs from "./pages/FindJobs";
const Pages = () => {
	return (
		<div className="">
			<Nav />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/find" element={<FindJobs />} />
				<Route path="/post" element={<div>Post a Job Page</div>} />
				<Route path="/sign-in" element={<div>Sign In Page</div>} />
				<Route path="/sign-up" element={<div>Sign Up Page</div>} />
			</Routes>
			<hr className="w-full absolute left-0 h-0.5" />
			<Footer />
		</div>
	);
};

export default Pages;
