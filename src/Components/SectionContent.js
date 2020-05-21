import React from "react";
import Card from "./Card";

const SectionContent = () => {
	return (
		<div className="content-grid">
			<div className="greeting d-flex align-items-center">
				<h2 className="ml-4 text-white">Statistics</h2>
			</div>
			<div className="cases p-4 d-flex justify-content-center align-items-center">
				<Card width={"90%"} height={"auto"} />
			</div>

			<div className="deaths p-4 d-flex justify-content-center align-items-center">
				<Card width={"90%"} height={"auto"} />
			</div>
			<div className="recovered p-4 d-flex justify-content-center align-items-center">
				<Card width={"90%"} height={"auto"} />
			</div>
			<div className="country p-4 d-flex justify-content-center align-items-center">
				<Card width={"90%"} height={"auto"} />
			</div>
			<div className="global p-4 d-flex justify-content-center align-items-center">
				<Card width={"90%"} height={"auto"} />
			</div>
		</div>
	);

	// Make another component and call an api for global data
};

export default SectionContent;
