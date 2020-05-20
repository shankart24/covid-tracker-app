import React from "react";
import "./App.css";
import HeaderContent from "./Components/HeaderContent";
import SectionContent from "./Components/SectionContent";

const App = () => {
	return (
		<main className="d-flex align-items-center">
			<div className="container-fluid dashboard p-4">
				<div className="row">
					<div className="col-lg-3 col-md-4 col-sm-12 col-xs-12 header rounded">
						<HeaderContent />
					</div>
					<div className="col-lg-9 col-md-8 col-sm-12 col-xs-12 section rounded">
						<SectionContent />
					</div>
				</div>
			</div>
		</main>
	);
};

export default App;
