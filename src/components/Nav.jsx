import React, { useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import icon from "../images/login-image.png";
import { IoCloseCircle, IoMenuSharp } from "react-icons/io5";

const Nav = ({ isLoggedIn, setIsLoggedIn }) => {
	const [menu, setMenu] = useState("home");
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	// const [findJobsOpen, setFindJobsOpen] = useState(false);
	// const [postJobsOpen, setPostJobsOpen] = useState(false);
	const [dropdownOpen, setDropdownOpen] = useState({
		find: false,
		post: false,
	});

	const navigate = useNavigate();

	const location = useLocation();
	const AuthPage =
		location.pathname === "/sign-in" || location.pathname === "/sign-up";

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

	const timeoutRef = useRef(null);

	const handleDropdown = (type, isOpen) => {
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
		}

		if (isOpen) {
			setDropdownOpen({ find: type === "find", post: type === "post" });
		} else {
			timeoutRef.current = setTimeout(() => {
				setDropdownOpen((prev) => ({ ...prev, [type]: false }));
			}, 200);
		}
	};

	return (
		<nav className=" relative flex items-center w-full sm:py-5 sm:my-5 my-2 justify-between bg-white border-b border-black-100 shadow-black-200  z-30">
			<Link to="/" onClick={() => setMenu("home")}>
				<div className="sm:p-2 p-1 mx-5">
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
				className={`nav-menu sm:bg-transparent bg-background2-default opacity-90 sm:relative absolute sm:flex sm:flex-row flex-col  items-center xl:gap-12 sm:gap-12 text-primary text-md sm:w-auto w-[40%] rounded-md sm:top-0 sm:right-0 top-12 right-2 gap-2 sm:pb-0 pb-5 ${
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
				<li
					className="relative"
					onMouseEnter={() => handleDropdown("find", true)}
					onMouseLeave={() => handleDropdown("find", false)}
				>
					<Link
						to="/find"
						className={`relative z-50`}
						onClick={() => {
							setMenu("find");
							setMobileMenuOpen(false);
						}}
					>
						Find Jobs{menu === "find" && !AuthPage && <hr />}
					</Link>
					{dropdownOpen.find && (
						<ul
							className="w-max absolute top-8 left-0 bg-white shadow-2xl rounded-md z-50"
							onMouseEnter={() => handleDropdown("find", true)}
							onMouseLeave={() => handleDropdown("find", false)}
						>
							<li>
								<Link
									to="/find/saved"
									className="block px-4 py-2 hover:bg-gray-100"
								>
									Saved Jobs
								</Link>
							</li>
							<li>
								<Link
									to="/find/track_applications"
									className="block px-4 py-2 hover:bg-gray-100"
								>
									Track Applications
								</Link>
							</li>
							<li>
								<Link
									to="/find/fulltime"
									className="block px-4 py-2 hover:bg-gray-200"
								>
									Full-time Jobs
								</Link>
							</li>
							<li>
								<Link
									to="/find/parttime"
									className="block px-4 py-2 hover:bg-gray-100"
								>
									Part-time Jobs
								</Link>
							</li>
						</ul>
					)}
				</li>
				<li
					className="relative"
					onMouseEnter={() => handleDropdown("post", true)}
					onMouseLeave={() => handleDropdown("post", false)}
				>
					<Link
						to="/post"
						className={`relative z-50`}
						onClick={() => {
							setMenu("post");
							setMobileMenuOpen(false);
						}}
					>
						Post a Job{menu === "post" && !AuthPage && <hr />}
					</Link>
					{dropdownOpen.post && (
						<ul
							className="w-max absolute top-8 left-0 bg-white shadow-2xl rounded-md z-20"
							onMouseEnter={() => handleDropdown("post", true)}
							onMouseLeave={() => handleDropdown("post", false)}
						>
							<li>
								<Link
									to="/post/posted"
									className="block px-4 py-2 hover:bg-gray-100"
								>
									Posted Jobs
								</Link>
							</li>
							<li>
								<Link
									to="/post/internship"
									className="block px-4 py-2 hover:bg-gray-100"
								>
									Internship
								</Link>
							</li>
							<li>
								<Link
									to="/post/fulltime"
									className="block px-4 py-2 hover:bg-gray-100"
								>
									Full-time Job
								</Link>
							</li>
							<li>
								<Link
									to="/post/contract"
									className="block px-4 py-2 hover:bg-gray-100"
								>
									Contract Job
								</Link>
							</li>
						</ul>
					)}
				</li>
				<li>
					<Link
						to="profile"
						className={``}
						onClick={() => {
							setMenu("profile");
							setMobileMenuOpen(false);
						}}
					>
						Profile{menu === "profile" && !AuthPage && <hr />}
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
						Sign up{menu === "sign-up" && !AuthPage}
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
		</nav>
	);
};

export default Nav;
