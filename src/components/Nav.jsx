import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
	IoClose,
	IoMenuSharp,
	IoChevronDown,
	IoChevronUp,
} from "react-icons/io5";

const Nav = ({ isLoggedIn, setIsLoggedIn }) => {
	const [menu, setMenu] = useState("home");
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [dropdownOpen, setDropdownOpen] = useState(null); // Only one dropdown at a time
	const navigate = useNavigate();
	const location = useLocation();
	const timeoutRef = useRef(null);
	const mobileMenuRef = useRef(null);

	const AuthPage =
		location.pathname === "/sign-in" || location.pathname === "/sign-up";

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
		}

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [mobileMenuOpen]);

	const toggleMobileMenu = () => {
		setMobileMenuOpen(!mobileMenuOpen);
	};

	// Toggle dropdown and ensure only one is open
	const handleDropdownToggle = (type) => {
		setDropdownOpen((prev) => (prev === type ? null : type)); // Close previous and open new one
		resetDropdownTimer();
	};

	// Reset dropdown timeout
	const resetDropdownTimer = () => {
		if (timeoutRef.current) clearTimeout(timeoutRef.current);
		timeoutRef.current = setTimeout(() => setDropdownOpen(null), 10000); // Auto-close after 10 sec
	};

	// Cleanup timeout on component unmount
	useEffect(() => {
		return () => {
			if (timeoutRef.current) clearTimeout(timeoutRef.current);
		};
	}, []);

	return (
		<nav
			ref={mobileMenuRef}
			className="relative flex items-center w-full sm:py-5 sm:my-5 my-2 lg:justify-between gap-8 bg-white border-b border-black-100 shadow-black-200 z-30"
		>
			<Link to="/" onClick={() => setMenu("home")}>
				<div className="sm:p-2 p-1 sm:mx-1 mx-4">
					<h1 className="text-primary xl:text-5xl lg:text-3xl text-2xl">
						JobNest
					</h1>
				</div>
			</Link>
			<div
				className="sm:hidden absolute right-10"
				onClick={toggleMobileMenu}
				aria-label="Toggle mobile menu"
			>
				{mobileMenuOpen ? (
					<IoClose className="text-red-900 w-8 h-8" />
				) : (
					<IoMenuSharp className="text-primary w-8 h-8" />
				)}
			</div>
			<ul
				className={`nav-menu sm:bg-transparent bg-background2-default opacity-90 sm:relative absolute sm:flex sm:flex-row flex-col sm:items-center xl:gap-12 sm:gap-8 text-primary text-md sm:w-auto w-[50%] rounded-md sm:top-0 sm:right-0 top-12 right-2 gap-2 sm:pb-0 pb-5 sm:pl-0 px-4 ${
					mobileMenuOpen ? "flex" : "hidden"
				}`}
			>
				<li>
					<div className="flex items-center gap-2">
						<Link to="/" onClick={() => setMenu("home")}>
							Home {menu === "home" && !AuthPage && <hr />}
						</Link>
					</div>
				</li>
				<li className="relative">
					<div className="flex items-center gap-2 justify-between">
						<Link to="/find" onClick={() => setMenu("find")}>
							Find Jobs {menu === "find" && !AuthPage && <hr />}
						</Link>
						<button
							className="text-xl"
							onClick={() => handleDropdownToggle("find")}
						>
							{dropdownOpen === "find" ? <IoChevronUp /> : <IoChevronDown />}
						</button>
					</div>
					{dropdownOpen === "find" && (
						<ul className="sm:absolute flex flex-col text-sm sm:w-[150px] top-8 left-0 bg-green-200 shadow-2xl rounded-md">
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
				<li className="relative">
					<div className="flex items-center gap-2 justify-between">
						<Link to="/post" onClick={() => setMenu("post")}>
							Post a Job {menu === "post" && !AuthPage && <hr />}
						</Link>
						<button
							className="text-xl"
							onClick={() => handleDropdownToggle("post")}
						>
							{dropdownOpen === "post" ? <IoChevronUp /> : <IoChevronDown />}
						</button>
					</div>
					{dropdownOpen === "post" && (
						<ul className="sm:absolute flex flex-col text-sm sm:w-[150px] top-8 left-0 bg-green-200 shadow-2xl rounded-md">
							<li>
								<Link
									to="/post/posted"
									className="block px-2 py-2 hover:bg-gray-100"
								>
									Posted Jobs
								</Link>
							</li>
						</ul>
					)}
				</li>
				<li className="relative">
					<div className="flex items-center gap-2 justify-between">
						<Link to="/profile" onClick={() => setMenu("profile")}>
							Profile {menu === "profile" && !AuthPage && <hr />}
						</Link>
						<button
							className="text-xl"
							onClick={() => handleDropdownToggle("profile")}
						>
							{dropdownOpen === "profile" ? <IoChevronUp /> : <IoChevronDown />}
						</button>
					</div>
					{dropdownOpen === "profile" && (
						<ul className="sm:absolute flex flex-col text-sm sm:w-[150px] top-8 left-0 bg-green-200 shadow-2xl rounded-mdd">
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
				<li className="sm:mt-0 mt-10 sm:w-auto sm:block flex justify-center">
					<Link
						to="sign-up"
						className="text-white bg-secondary px-4 py-2 rounded-md"
						onClick={() => setMenu("sign-up")}
					>
						Sign up {menu === "sign-up" && !AuthPage}
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
