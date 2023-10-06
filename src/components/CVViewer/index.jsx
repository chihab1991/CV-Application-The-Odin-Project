import React from "react";

const index = ({ generalInfo, education, experience }) => {
	return (
		<>
			<div>
				<div className="cvElement">
					<h3>Full Name: </h3>
					<p>{generalInfo.fullName}</p>
				</div>
				<div className="cvElement">
					<h3>Email: </h3>
					<p>{generalInfo.email}</p>
				</div>
				<div className="cvElement">
					<h3>Phone Number: </h3>
					<p>{generalInfo.phoneNumber}</p>
				</div>
			</div>

			<div>
				<div className="cvElement">
					<h3>School Name: </h3>
					<p>{education.schoolName}</p>
				</div>
				<div className="cvElement">
					<h3>Title Of Study: </h3>
					<p>{education.titleOfStudy}</p>
				</div>
				<div className="cvElement">
					<h3>Date Of Study:</h3>{" "}
					<p>
						from {education.studyBegin} to {education.studyEnd}
					</p>
				</div>
			</div>

			<div>
				<div className="cvElement">
					<h3>Company Name: </h3>
					<p>{experience.companyName}</p>
				</div>
				<div className="cvElement">
					<h3>Position Title: </h3>
					<p>{experience.positionTitle}</p>
				</div>
				<div className="cvElement">
					<h3>Main Responsibility: </h3>
					<p>{experience.mainResponsibility}</p>
				</div>
				<div className="cvElement">
					<div>
						<h3>Job Start: </h3>
						<p>{experience.jobStart}</p>
					</div>
					<div>
						<h3>Job End: </h3>
						<p>{experience.jobEnd}</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default index;
