import React from "react";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Footer from "./components/Footer";

const Pages = () => {
	return (
		<div className="lg:mx-20 sm:mx-10">
			<Nav />
			<Home />
			<hr className="w-full absolute left-0 h-0.5" />
			<Footer />
		</div>
	);
};

export default Pages;
