import React from "react";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import FindJobs from "./pages/FindJobs";
import SignUp from "./pages/SignUp";
import AuthPage from "./pages/AuthPage"
import SavedJobs from "./pages/SavedJobs";
import ApplicationDetails from "./pages/ApplicationDetails";
import Profile from "./pages/Profile";
import TrackApplications from "./pages/TrackApplications"
import PostJobs from "./pages/PostJobs";
const Pages = () => {
	return (
		<div className="lg:mx-14 sm:mx-10">
			<Nav />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/find" element={<FindJobs />} />
				<Route path="/post" element={<PostJobs/>} />
				<Route path="/sign-up" element={<AuthPage page='sign-up' />} />
				<Route path="/profile" element={<Profile />} />
				<Route path="/find/saved" element={<SavedJobs/>}/>
				<Route path="/application-details" element={<ApplicationDetails/>}/>
				<Route path="/find/track_applications" element={<TrackApplications/>}/>
			</Routes>
			<hr className="w-full absolute left-0 h-0.5" />
			<Footer />
		</div>
	);
};

export default Pages;
