import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import "./App.css";
import About from "./pages/About";
import Footer from "./components/Footer";

const App = () => {
	return (
		<div className="app w-full">
			<BrowserRouter>
				<Nav />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	);
};

export default App;
