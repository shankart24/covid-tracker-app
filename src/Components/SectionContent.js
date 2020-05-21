import React from "react";
import Card from "./Card";
import death from "../stock/death.png";
import cases from "../stock/cases.png";
import recovered from "../stock/recovered.png";
import india from "../stock/india.png";
import global from "../stock/global.png";
import statistics from "../stock/statistics.png";

const SectionContent = () => {
	return (
		<div className="content-grid">
			<div className="greeting d-flex align-items-center rounded">
				<h2 className="ml-4 text-white">
					<img src={statistics} width="35" className="mr-3 mb-2" />
					Statistics
				</h2>
			</div>
			<div className="cases p-4 d-flex justify-content-center align-items-center">
				<Card width={"100%"} height={"100%"} bgcolor={"#f7b731"} title={"No. of Cases"} icon={cases} />
			</div>

			<div className="deaths p-4 d-flex justify-content-center align-items-center">
				<Card width={"100%"} height={"100%"} bgcolor={"#eb3b5a"} title={"Deaths"} icon={death} />
			</div>
			<div className="recovered p-4 d-flex justify-content-center align-items-center">
				<Card width={"100%"} height={"100%"} bgcolor={"#20bf6b"} title={"Recovered"} icon={recovered} />
			</div>
			<div className="country p-4 d-flex justify-content-center align-items-center">
				<Card width={"100%"} height={"100%"} bgcolor={"#2d98da"} title={"Country"} icon={india} />
			</div>
			<div className="global p-4 d-flex justify-content-center align-items-center">
				<Card width={"100%"} height={"100%"} bgcolor={"#8854d0"} title={"Global"} icon={global} />
			</div>
		</div>
	);

	// Make another component and call an api for global data
};

export default SectionContent;
