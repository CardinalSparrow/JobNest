import React, { useState } from "react";
import ExperienceTemplate from "./ExperienceTemplate";
import virtual_assistant from "../images/virtual_assistant.png";
import graphic_designer from "../images/graphic_designer.png";

const Experience = () => {
	const [experience, setExperience] = useState([
		{
			title: "Virtual Assistant",
			date: "Aug 2014 -  Jan 2015",
			description:
				"I am a versatile professional with expertise in Virtual assistance, UI/UX design and social media management. I bring strong organizational and communication skills to every role. I am a versatile professional with expertise in Virtual assistance, UI/UX design and social media management. I bring strong organizational and communication skills to every role",
			img: virtual_assistant,
		},
		{
			title: "Graphic Designer",
			date: "Mar 2015 - Aug 2016",
			img: virtual_assistant,
			description:
				"I am a versatile professional with expertise in Virtual assistance, UI/UX design and social media management. I bring strong organizational and communication skills to every role. I am a versatile professional with expertise in Virtual assistance, UI/UX design and social media management. I bring strong organizational and communication skills to every role",
		},
	]);

	const [newExperience, setNewExperience] = useState({
		title: "",
		date: "",
		img: virtual_assistant,
		description:
			"I am a versatile professional with expertise in Virtual assistance, UI/UX design and social media management. I bring strong organizational and communication skills to every role. I am a versatile professional with expertise in Virtual assistance, UI/UX design and social media management. I bring strong organizational and communication skills to every role",
	});
	const [edit, setEdit] = useState(false);
	const [editIndex, setEditIndex] = useState(null);
	const [add, setAdd] = useState(false);

	const addExperience = () => {
		if (newExperience.title && newExperience.date) {
			setExperience([...experience, newExperience]);
			setNewExperience({
				title: "",
				date: "",
				img: "",
				description: "",
			});
			setAdd(false);
		}
	};
	const [image, setImage] = useState(null);

	const handleImageUpload = (e) => {
		const file = e.target.files[0];
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onloadend = () => {
			setNewExperience({ ...newExperience, img: reader.result });
			setImage(reader.result);
		};
	};

	const editExperience = (index) => {
		setEdit(true);
		setEditIndex(index);
		setNewExperience(experience[index]);
	};

	const updateExperience = () => {
		if (newExperience.title && newExperience.date) {
			const updatedExperience = [...experience];
			updatedExperience[editIndex] = newExperience;
			setExperience(updatedExperience);
			setEdit(false);
			setEditIndex(null);
			setNewExperience({
				title: "",
				date: "",
				img: "",
				description: "",
			});
		}
	};

	const deleteExperience = () => {
		if (editIndex === null || editIndex < 0) {
			return;
		}

		const updatedExperience = experience.filter(
			(_, index) => index !== editIndex
		);
		setExperience(updatedExperience);
		// Reset states after successful deletion
		setEdit(false);
		setEditIndex(null);
		setNewExperience({
			title: "",
			date: "",
			img: "",
			description: "",
		});
	};

	return (
		<div className="bg-[#97EFAB99] p-5 my-4">
			<h1 className="text-2xl font-medium text-primary mb-2">
				Job Experience{" "}
				<span className="text-sm font-normal">
					{experience.length} job history
				</span>
			</h1>
			{experience.map((exp, index) => (
				<div key={index}>
					{edit && editIndex === index ? (
						<div className="grid w-1/3 py-4 gap-3">
							<input
								type="file"
								className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-white hover:file:bg-secondary"
								onChange={handleImageUpload}
							/>
							<img src={newExperience.img} alt="" />
							<input
								className="bg-transparent border border-black placeholder:text-primary px-3 rounded-md"
								value={newExperience.title}
								onChange={(e) =>
									setNewExperience({ ...newExperience, title: e.target.value })
								}
								type="text"
								placeholder="Enter Job Title"
							/>
							<input
								className="bg-transparent border border-black placeholder:text-primary px-3 rounded-md"
								value={newExperience.date}
								onChange={(e) =>
									setNewExperience({ ...newExperience, date: e.target.value })
								}
								type="text"
								placeholder="Enter Date"
							/>
							<textarea
								onChange={(e) =>
									setNewExperience({
										...newExperience,
										description: e.target.value,
									})
								}
							>
								{newExperience.description}
							</textarea>
							<div className="flex gap-2">
								<button
									className="bg-primary text-white px-4 py-1 rounded-md"
									onClick={updateExperience}
								>
									Update
								</button>
								<button
									className="bg-gray-500 text-white px-4 py-1 rounded-md"
									onClick={() => {
										setEdit(false);
										setEditIndex(null);
										setNewExperience({ title: "", date: "" });
									}}
								>
									Cancel
								</button>
								<button
									className="bg-red-600 text-white px-4 py-1 rounded-md"
									onClick={deleteExperience}
								>
									Delete
								</button>
							</div>
						</div>
					) : (
						<>
							<ExperienceTemplate
								title={exp.title}
								date={exp.date}
								img={exp.img}
								description={exp.description}
								onEdit={() => editExperience(index)}
							/>
							<hr className="h-[1px] mb-2 md:mb-0" />
						</>
					)}
				</div>
			))}
			{!add ? (
				<p className="px-8 my-2 cursor-pointer" onClick={() => setAdd(true)}>
					Add more
				</p>
			) : (
				<p className="px-8 my-2 cursor-pointer" onClick={() => setAdd(false)}>
					Show less
				</p>
			)}
			{add && (
				<div className="grid w-1/3 py-4 gap-3">
					<div>
						<input
							type="file"
							className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-white hover:file:bg-secondary"
							onChange={handleImageUpload}
						/>
						{image && <img src={image} alt="" className="w-20 h-20 mt-4" />}
					</div>
					<input
						className="bg-transparent border border-black placeholder:text-primary px-3 rounded-md"
						value={newExperience.title}
						onChange={(e) =>
							setNewExperience({ ...newExperience, title: e.target.value })
						}
						type="text"
						placeholder="Enter Job Title"
					/>
					<input
						className="bg-transparent border border-black placeholder:text-primary px-3 rounded-md"
						value={newExperience.date}
						onChange={(e) =>
							setNewExperience({ ...newExperience, date: e.target.value })
						}
						type="text"
						placeholder="Enter Date e.g Aug 2015 - Sep 2016"
					/>
					<textarea
						value={newExperience.description}
						className="bg-transparent border border-black placeholder:text-primary px-3 rounded-md"
						placeholder="Enter Job Description"
						onChange={(e) =>
							setNewExperience({
								...newExperience,
								description: e.target.value,
							})
						}
					></textarea>
					<button
						className="bg-primary text-white px-4 py-1 rounded-md ml-2"
						onClick={addExperience}
					>
						Add
					</button>
				</div>
			)}
			<hr className="h-[1px] mb-3" />
		</div>
	);
};

export default Experience;
