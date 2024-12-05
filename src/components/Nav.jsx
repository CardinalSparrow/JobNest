import React from "react";
import { Link } from "react-router-dom";
import icon from "../images/login-image.png";
const Nav = () => {
	return (
		<div className="flex items-center justify-around bg-red-300 p-1 shadow-black-200 fixed w-full z-10">
			<Link>
				<div className="p-2 me-2">
					<img className="w-10" src={icon} alt="logo" />
				</div>
			</Link>
			{/* <div className="flex justify-between my-4"> */}
			<nav className="justify-end">
				<ul className="nav-menu flex m-4 items-center gap-12 text-white text-lg">
					<li>
						<Link className={``}>
							Home <hr />
						</Link>
					</li>
					<li>
						<Link className={``}>About</Link>
					</li>
					<li>
						<Link className={``}>Services</Link>
					</li>
					<li>
						<Link className={``}>Contact</Link>
					</li>
				</ul>
			</nav>
			<button className="p-2 h-[40px] text-sm rounded-xl bg-gray-400 border-black border-solid border-2">
				Login
			</button>
			{/* </div> */}
		</div>
	);
};

export default Nav;
