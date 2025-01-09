import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import icon from "../images/login-image.png";
import { IoCloseCircle, IoMenuSharp } from "react-icons/io5";

const Nav = ({ isLoggedIn, setIsLoggedIn }) => {
	const [menu, setMenu] = useState("home");
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	const navigate = useNavigate();

	const location = useLocation();
	const AuthPage =
		location.pathname === "/login" || location.pathname === "/register";

	const toggleMobileMenu = () => {
		setMobileMenuOpen(!mobileMenuOpen);
	};

	const handleLogin = () => {
		// setIsLoggedIn(true);
		navigate("/login");
	};
	const handleLogout = () => {
		setIsLoggedIn(false);
	};

	const handleLogButton = () => {
		if (isLoggedIn) {
			handleLogout();
		} else {
			handleLogin();
		}
	};

	return (
		<div className="flex items-center  mx-20 py-5 my-5 justify-between bg-white border-b border-black-100 shadow-black-200  z-10">
			<Link to="/" onClick={() => setMenu("home")}>
				<div className="sm:p-2 p-1 me-2">
					<h1 className="text-primary xl:text-5xl text-3xl">JobNest</h1>
				</div>
			</Link>
			<div
				className="sm:hidden absolute  right-10"
				onClick={toggleMobileMenu}
				aria-label="Toggle mobile menu"
			>
				{mobileMenuOpen ? (
					<IoCloseCircle className="text-red-900" />
				) : (
					<IoMenuSharp className="text-primary" />
				)}
			</div>
			<ul
				className={`nav-menu sm:bg-transparent bg-background2-default opacity-80 sm:relative absolute sm:flex sm:flex-row flex-col  items-center xl:gap-12 sm:gap-12 text-primary text-md sm:w-auto w-[40%] rounded-md sm:top-0 sm:right-0 top-10 right-2 gap-2 sm:pb-0 pb-2 ${
					mobileMenuOpen ? "flex" : "hidden"
				}`}
			>
				<li>
					<Link
						to="/"
						className={``}
						onClick={() => {
							setMenu("home");
							setMobileMenuOpen(false);
						}}
					>
						Home{menu === "home" && !AuthPage && <hr />}
					</Link>
				</li>
				<li>
					<Link
						to="/find"
						className={``}
						onClick={() => {
							setMenu("find");
							setMobileMenuOpen(false);
						}}
					>
						Find Jobs{menu === "find" && !AuthPage && <hr />}
					</Link>
				</li>
				<li>
					<Link
						to="/post"
						className={``}
						onClick={() => {
							setMenu("post");
							setMobileMenuOpen(false);
						}}
					>
						Post a Job{menu === "post" && !AuthPage && <hr />}
					</Link>
				</li>
				<li>
					<Link
						to="sign-in"
						className={``}
						onClick={() => {
							setMenu("sign-in");
							setMobileMenuOpen(false);
						}}
					>
						Sign in{menu === "sign-in" && !AuthPage && <hr />}
					</Link>
				</li>
				<li>
					<Link
						to="sign-up"
						className={`text-white bg-secondary px-4 py-2 rounded-md`}
						onClick={() => {
							setMenu("sign-up");
							setMobileMenuOpen(false);
						}}
					>
						Sign up{menu === "sign-up" && !AuthPage && <hr />}
					</Link>
				</li>
			</ul>

			{/* {!AuthPage && (
				<button
					className="mr-12 sm:px-5 px-2 sm:py-1.5 text-sm rounded-3xl bg-white text-red-800 hover:bg-red-800 hover:text-white font-pextrabold border-black border-solid border"
					onClick={handleLogButton}
				>
					{isLoggedIn ? "Logout" : "Login"}
				</button>
			)} */}
		</div>
	);
};

export default Nav;
