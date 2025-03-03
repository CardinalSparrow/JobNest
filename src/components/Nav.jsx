import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import icon from "../images/login-image.png";
import {
	IoCloseCircle,
	IoMenuSharp,
	IoChevronDown,
	IoChevronUp,
} from "react-icons/io5";

const Nav = ({ isLoggedIn, setIsLoggedIn }) => {
	const [menu, setMenu] = useState("home");
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	// const [findJobsOpen, setFindJobsOpen] = useState(false);
	// const [postJobsOpen, setPostJobsOpen] = useState(false);
	const [dropdownOpen, setDropdownOpen] = useState({
		find: false,
		post: false,
		profile: false,
	});

	const navigate = useNavigate();
	const location = useLocation();

	const AuthPage =
		location.pathname === "/sign-in" || location.pathname === "/sign-up";

	const mobileMenuRef = useRef(null);

	// Close mobile menu on navigation
	useEffect(() => {
		setMobileMenuOpen(false);
	}, [location.pathname]);

	// Close mobile menu when clicking outside
	useEffect(() => {
		const handleClickOutside = (event) => {
			if (
				mobileMenuRef.current &&
				!mobileMenuRef.current.contains(event.target)
			) {
				setMobileMenuOpen(false);
			}
		};

		if (mobileMenuOpen) {
			document.addEventListener("mousedown", handleClickOutside);
		} else {
			document.removeEventListener("mousedown", handleClickOutside);
		}

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [mobileMenuOpen]);

	const toggleMobileMenu = () => {
		setMobileMenuOpen(!mobileMenuOpen);
	};

	const handleDropdownToggle = (type) => {
		setDropdownOpen((prev) => ({
			...prev,
			[type]: !prev[type], // Toggle the selected dropdown
		}));
	};

	// Close mobile menu when clicking outside
	useEffect(() => {
		const handleClickOutside = (event) => {
			if (
				mobileMenuRef.current &&
				!mobileMenuRef.current.contains(event.target)
			) {
				setMobileMenuOpen(false);
			}
		};

		if (mobileMenuOpen) {
			document.addEventListener("mousedown", handleClickOutside);
		}

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [mobileMenuOpen]); // Keep only one instance of this

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

	const timeoutRef = useRef({});

	const handleDropdown = (type, isOpen) => {
		if (timeoutRef.current[type]) {
			clearTimeout(timeoutRef.current[type]);
		}

		if (isOpen) {
			setDropdownOpen({
				find: type === "find",
				post: type === "post",
				profile: type === "profile",
			});
		} else {
			timeoutRef.current[type] = setTimeout(() => {
				setDropdownOpen((prev) => ({ ...prev, [type]: false }));
			}, 200);
		}
	};

	return (
		<nav
			ref={mobileMenuRef}
			className=" relative flex items-center w-full sm:py-5 sm:my-5 my-2 justify-between bg-white border-b border-black-100 shadow-black-200  z-30"
		>
			<Link to="/" onClick={() => setMenu("home")}>
				<div className="sm:p-2 p-1 mx-5">
					<h1 className="text-primary xl:text-5xl text-3xl">JobNest</h1>
				</div>
			</Link>
			<div
				className="sm:hidden absolute right-10"
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
				className={`nav-menu sm:bg-transparent bg-background2-default opacity-90 sm:relative absolute sm:flex sm:flex-row flex-col  sm:items-center xl:gap-12 sm:gap-12 text-primary text-md sm:w-auto w-[50%] rounded-md sm:top-0 sm:right-0 top-12 right-2 gap-2 sm:pb-0 pb-5 sm:pl-0 px-4 ${
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
					className="relative sm:hover:block"
					// onMouseLeave={() => handleDropdown("find", false)}
					// onMouseEnter={() => handleDropdown("find", true)}
				>
					<div className="flex items-center justify-between sm:block">
						<Link to="/find" onClick={() => setMenu("find")}>
							Find Jobs{menu === "find" && !AuthPage && <hr />}
						</Link>
						<button
							className=" lg:ml-4 text-xl "
							onClick={() => handleDropdownToggle("find")}
						>
							{dropdownOpen.find ? <IoChevronUp /> : <IoChevronDown />}
						</button>
					</div>
					{dropdownOpen.find && (
						<ul className="w-max sm:absolute top-8 left-0 bg-white shadow-2xl rounded-md">
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
						</ul>
					)}
				</li>
				<li
					className="relative sm:hover:block"
					// onMouseEnter={() => handleDropdown("post", true)}
					// onMouseLeave={() => handleDropdown("post", false)}
				>
					<div className="flex items-center justify-between sm:block">
						<Link to="/post" onClick={() => setMenu("post")}>
							Post a Job{menu === "post" && !AuthPage && <hr />}
						</Link>
						<button
							className=" lg:ml-4 text-xl "
							onClick={() => handleDropdownToggle("post")}
						>
							{dropdownOpen.post ? <IoChevronUp /> : <IoChevronDown />}
						</button>
					</div>
					{dropdownOpen.post && (
						<ul className="w-max sm:absolute top-8 left-0 bg-white shadow-2xl rounded-md">
							<li>
								<Link
									to="/post/posted"
									className="block px-4 py-2 hover:bg-gray-100"
								>
									Posted Jobs
								</Link>
							</li>
						</ul>
					)}
				</li>
				<li
					className="relative sm:hover:block"
					// onMouseEnter={() => handleDropdown("profile", true)}
					// onMouseLeave={() => handleDropdown("profile", false)}
				>
					<div className="flex items-center justify-between sm:block">
						<Link to="/profile" onClick={() => setMenu("profile")}>
							Profile{menu === "profile" && !AuthPage && <hr />}
						</Link>
						<button
							className="sm:hidden ml-2 text-xl"
							onClick={() => handleDropdownToggle("profile")}
						>
							{dropdownOpen.profile ? <IoChevronUp /> : <IoChevronDown />}
						</button>
					</div>
					{dropdownOpen.profile && (
						<ul className="w-max sm:absolute top-8 left-0 bg-white shadow-2xl rounded-md">
							<li>
								<Link
									to="/profile"
									className="block px-4 py-2 hover:bg-gray-100"
								>
									Jobseeker
								</Link>
							</li>
							<li>
								<Link
									to="/recruiter-profile"
									className="block px-4 py-2 hover:bg-gray-100"
								>
									Recruiter
								</Link>
							</li>
						</ul>
					)}
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
