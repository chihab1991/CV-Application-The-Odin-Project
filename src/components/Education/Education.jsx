const Education = ({ education, setEducation }) => {
	return (
		<>
			<div>
				<label htmlFor="schoolName">School Name:</label>
				<input
					type="text"
					name="schoolName"
					id="schoolName"
					value={education.schoolName}
					onChange={(e) =>
						setEducation({ ...education, schoolName: e.target.value })
					}
				/>
			</div>
			<div>
				<label htmlFor="studyName">Study Name</label>
				<input
					type="text"
					name="studyName"
					id="studyName"
					value={education.titleOfStudy}
					onChange={(e) =>
						setEducation({ ...education, titleOfStudy: e.target.value })
					}
				/>
			</div>
			<div>
				<label htmlFor="from">From:</label>
				<input
					type="date"
					name="from"
					id="from"
					value={education.studyBegin}
					onChange={(e) =>
						setEducation({ ...education, studyBegin: e.target.value })
					}
				/>
			</div>
			<div>
				<label htmlFor="until">Until:</label>
				<input
					type="date"
					name="until"
					id="until"
					value={education.studyEnd}
					onChange={(e) =>
						setEducation({ ...education, studyEnd: e.target.value })
					}
				/>
			</div>
		</>
	);
};

export default Education;
