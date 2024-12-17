import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Pages from "./pages";
import Nav from "./components/Nav";

const App = () => {
	return (
		<div className="app h-full bg-white sm:flex">
			<BrowserRouter>
				<Pages />
			</BrowserRouter>
		</div>
	);
};

export default App;
