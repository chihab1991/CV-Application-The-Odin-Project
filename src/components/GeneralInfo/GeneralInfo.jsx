const GeneralInfo = ({ generalInfo, setGeneralInfo }) => {
	return (
		<>
			<div>
				<label htmlFor="name">Full Name:</label>
				<input
					type="text"
					name="name"
					id="name"
					value={generalInfo.fullName}
					onChange={(e) =>
						setGeneralInfo({ ...generalInfo, fullName: e.target.value })
					}
				/>
			</div>
			<div>
				<label htmlFor="email">Email:</label>
				<input
					type="email"
					name="email"
					id="email"
					value={generalInfo.email}
					onChange={(e) =>
						setGeneralInfo({ ...generalInfo, email: e.target.value })
					}
				/>
			</div>
			<div>
				<label htmlFor="phoneNumber">Phone Number:</label>
				<input
					type="tel"
					name="phoneNumber"
					id="phoneNumber"
					value={generalInfo.phoneNumber}
					onChange={(e) =>
						setGeneralInfo({ ...generalInfo, phoneNumber: e.target.value })
					}
				/>
			</div>
		</>
	);
};

export default GeneralInfo;
