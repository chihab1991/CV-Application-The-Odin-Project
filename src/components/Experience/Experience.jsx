const Experience = ({ experience, setExperience }) => {
	return (
		<>
			<div>
				<label htmlFor="companyName">Company Name:</label>
				<input
					type="text"
					name="companyName"
					id="companyName"
					value={experience.companyName}
					onChange={(e) =>
						setExperience({ ...experience, companyName: e.target.value })
					}
				/>
			</div>
			<div>
				<label htmlFor="positionTitle">Position Title:</label>
				<input
					type="text"
					name="positionTitle"
					id="positionTitle"
					value={experience.positionTitle}
					onChange={(e) =>
						setExperience({ ...experience, positionTitle: e.target.value })
					}
				/>
			</div>
			<div>
				<label htmlFor="mainResponsibility">Main Responsibility:</label>
				<input
					type="text"
					name="mainResponsibility"
					id="mainResponsibility"
					value={experience.mainResponsibility}
					onChange={(e) =>
						setExperience({ ...experience, mainResponsibility: e.target.value })
					}
				/>
			</div>
			<div>
				<label htmlFor="from">From:</label>
				<input
					type="date"
					name="from"
					id="from"
					value={experience.jobStart}
					onChange={(e) =>
						setExperience({ ...experience, jobStart: e.target.value })
					}
				/>
			</div>
			<div>
				<label htmlFor="until">Until:</label>
				<input
					type="date"
					name="until"
					id="until"
					value={experience.jobEnd}
					onChange={(e) =>
						setExperience({ ...experience, jobEnd: e.target.value })
					}
				/>
			</div>
		</>
	);
};

export default Experience;
