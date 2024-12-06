import React, { useState } from "react";
import { Link } from "react-router-dom";
import icon from "../images/login-image.png";
const Nav = () => {
	const [menu, setMenu] = useState("home");
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	const toggleMobileMenu = () => {
		setMobileMenuOpen(!mobileMenuOpen);
		console.log("cli");
	};
	return (
		<div className="flex items-center justify-around bg-red-300 border-b border-black-100 shadow-black-200 fixed w-full z-10">
			<Link to="/" onClick={() => setMenu("home")}>
				<div className="p-2 me-2">
					<img className="w-12" src={icon} alt="logo" />
				</div>
			</Link>
			<div
				className="sm:hidden absolute top-4 right-4"
				onClick={toggleMobileMenu}
			>
				<img width="30px" src={icon} />
			</div>
			{/* <div className="flex justify-between my-4"> */}
			<nav className="justify-end">
				<ul
					className={`nav-menu sm:bg-transparent bg-red-800 opacity-80 sm:relative absolute sm:flex sm:flex-row flex-col m-4 items-center sm:gap-12 text-white text-lg w-[40%] rounded-md sm:top-0 sm:right-0 top-10 -right-2 gap-4 ${
						mobileMenuOpen ? "flex" : "hidden"
					}`}
				>
					<li>
						<Link to="/" className={``} onClick={() => setMenu("home")}>
							Home{menu === "home" && <hr />}
						</Link>
					</li>
					<li>
						<Link to="/about" className={``} onClick={() => setMenu("about")}>
							About{menu === "about" && <hr />}
						</Link>
					</li>
					<li>
						<Link className={``} onClick={() => setMenu("services")}>
							Services{menu === "services" && <hr />}
						</Link>
					</li>
					<li>
						<Link className={``} onClick={() => setMenu("contact")}>
							Contact{menu === "contact" && <hr />}
						</Link>
					</li>
				</ul>
			</nav>
			<button className="mr-12 px-5 py-1.5 text-sm rounded-3xl bg-white text-red-800 hover:bg-red-800 hover:text-white font-pextrabold border-black border-solid border">
				Login
			</button>
			{/* </div> */}
		</div>
	);
};

export default Nav;
