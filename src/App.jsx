import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import GeneralInfo from "./components/GeneralInfo/GeneralInfo";
import Experience from "./components/Experience/Experience";
import Education from "./components/Education/Education";
import Footer from "./components/Footer/Footer";
import CVViewer from "./components/CVViewer";
function App() {
	const [generalInfo, setGeneralInfo] = useState({
		fullName: "",
		email: "",
		phoneNumber: "",
	});
	const [education, setEducation] = useState({
		schoolName: "",
		titleOfStudy: "",
		studyBegin: "",
		studyEnd: "",
	});
	const [experience, setExperience] = useState({
		companyName: "",
		positionTitle: "",
		mainResponsibility: "",
		jobStart: "",
		jobEnd: "",
	});

	const [viewCV, setViewCV] = useState(false);

	return (
		<>
			<Header />
			<main>
				{!viewCV && (
					<>
						<GeneralInfo
							generalInfo={generalInfo}
							setGeneralInfo={setGeneralInfo}
						/>
						<Education education={education} setEducation={setEducation} />
						<Experience experience={experience} setExperience={setExperience} />
					</>
				)}
				{viewCV && (
					<CVViewer
						generalInfo={generalInfo}
						education={education}
						experience={experience}
					/>
				)}
				<div>
					<button onClick={() => setViewCV(true)}>Submit</button>
					<button onClick={() => setViewCV(false)}>Edit</button>
				</div>
			</main>
			<Footer />
		</>
	);
}

export default App;
