import UBA from "../images/UBA-logo-4.png";
import Dangote from "../images/Dangote_Group_Logo.svg.png";

export const ExploreItem = ({ name }) => (
	<h2 className="px-4 py-2 bg-secondary" aria-label={name}>
		{name.length > 8 ? name.substr(0, 6) + "..." : name}
	</h2>
);

export const Statistic = ({ value, label, textColor }) => (
	<div className={`${textColor} text-center`}>
		<h2 className="xl:text-[40px] lg:text-[25px] font-bold">{value}</h2>
		<p className="sm:text-[16px] text-[12px] font-semibold">{label}</p>
	</div>
);

export const RecruiterLogo = ({ logo }) => (
	<div className="">
		<img
			src={logo}
			alt="UBA Logo"
			className="lg:h-20 h-12 w-auto justify-center"
		/>
	</div>
);
