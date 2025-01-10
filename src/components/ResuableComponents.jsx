export const ExploreItem = ({ name }) => (
	<div className="relative group">
		<h2 className="px-3 py-2 bg-secondary" aria-label={name}>
			{name.length > 10 ? name.slice(0, 7) + "..." : name}
		</h2>
		<p
			className={`absolute text-xs -top-6 px-2 py-1 rounded shadow hidden group-hover:block `}
		>
			{name}
		</p>
	</div>
);

export const Statistic = ({ value, label, textColor }) => (
	<div className={`${textColor} text-center`}>
		<h2 className="xl:text-[40px] lg:text-[25px] font-bold">{value}</h2>
		<p className="sm:text-[16px] text-[12px] font-semibold">{label}</p>
	</div>
);

export const RecruiterLogo = ({ logo }) => (
	<div className=" relative group place-items-center">
		<div>
			<img
				src={logo.src}
				alt={`${logo.name} logo`}
				className="lg:h-20 sm:h-12 h-6 w-auto justify-center"
			/>
			<p
				className="absolute text-xs -top-5 text-primary py-1 px-2 rounded-md 
                 left-[50%] -translate-x-[50%] -translate-y-[50%] opacity-0 
                group-hover:opacity-100 transition-opacity duration-300"
			>
				{logo.name}
			</p>
		</div>
	</div>
);
