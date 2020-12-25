import React, { useState, useEffect } from "react";
import Card from "./Card";
import death from "../stock/death.png";
import cases from "../stock/cases.png";
import recover from "../stock/recovered.png";
import india from "../stock/india.png";
import global from "../stock/global.png";
import statistics from "../stock/statistics.png";

const SectionContent = (props) => {
	const [countryInfo, setCountryInfo] = useState([]);
	useEffect(() => {
		fetch("https://api.rootnet.in/covid19-in/unofficial/covid19india.org/statewise")
			.then((response) => response.json())
			.then((data) => setCountryInfo(data.data.total));
	}, []);
	const { confirmed: countryConfirmed, recovered: countryRecovered, deaths: countryDeaths } = countryInfo;

	const [globalInfo, setGlobalInfo] = useState([]);
	useEffect(() => {
		fetch("https://api.covid19api.com/summary")
			.then((response) => response.json())
			.then((data) => setGlobalInfo(data.Global));
	}, []);
	const { TotalConfirmed, TotalDeaths, TotalRecovered } = globalInfo;

	const [stateInfo, setStateInfo] = useState(props);
	useEffect(() => {
		fetch("https://api.rootnet.in/covid19-in/unofficial/covid19india.org/statewise")
			.then((response) => response.json())
			.then((data) => setStateInfo(data.data.statewise[11]));
	}, []);
	const { state, confirmed, deaths, recovered } = stateInfo;

	return (
		<div className="content-grid">
			<div className="greeting d-flex justify-content-between align-items-center rounded">
				<h2 className="text-white ml-2">
					<img
						src={statistics}
						width="35"
						className="ml-lg-4 mr-lg-3 mb-lg-2 ml-md-4 mr-md-3 mb-md-2 ml-sm-4 mr-sm-3 mb-sm-2"
					/>
					Statistics
				</h2>
			</div>
			<div className="cases p-3 d-flex justify-content-center align-items-center">
				<Card
					width={"100%"}
					height={"100%"}
					bgcolor={"#f7b731"}
					title={"Total Cases"}
					icon={cases}
					list1Display={"none"}
					list2Display={"none"}
					cases={confirmed}
				/>
			</div>
			<div className="deaths p-3 d-flex justify-content-center align-items-center">
				<Card
					width={"100%"}
					height={"100%"}
					bgcolor={"#eb3b5a"}
					title={"Deaths"}
					icon={death}
					list1Display={"none"}
					list2Display={"none"}
					cases={deaths}
				/>
			</div>
			<div className="recovered p-3 d-flex justify-content-center align-items-center">
				<Card
					width={"100%"}
					height={"100%"}
					bgcolor={"#20bf6b"}
					title={"Recovered"}
					icon={recover}
					list1Display={"none"}
					list2Display={"none"}
					cases={recovered}
				/>
			</div>
			<div className="country p-3 d-flex justify-content-center align-items-center">
				<Card
					width={"100%"}
					height={"100%"}
					bgcolor={"#224870"}
					title={"Country"}
					icon={india}
					list1Display={""}
					list2Display={"none"}
					countryConfirmed={countryConfirmed}
					countryDeaths={countryDeaths}
					countryRecovered={countryRecovered}
				/>
			</div>
			<div className="global p-3">
				<Card
					width={"100%"}
					height={"100%"}
					bgcolor={"#224870"}
					title={"Global"}
					icon={global}
					list1Display={"none"}
					list2Display={""}
					TotalConfirmed={TotalConfirmed}
					TotalDeaths={TotalDeaths}
					TotalRecovered={TotalRecovered}
				/>
			</div>
		</div>
	);
};

export default SectionContent;
