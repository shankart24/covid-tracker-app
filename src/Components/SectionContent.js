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

	const [stateInfo, setStateInfo] = useState(props);

	console.log(props.stateName);

	useEffect(() => {
		fetch("https://api.rootnet.in/covid19-in/unofficial/covid19india.org/statewise")
			.then((response) => response.json())
			.then((data) => setStateInfo(data.data.statewise[11]));
	}, []);

	const { state, confirmed, deaths, recovered } = stateInfo;

	return (
		<div className="content-grid">
			<div className="greeting d-flex align-items-center rounded">
				<h2 className="ml-4 text-white">
					<img src={statistics} width="35" className="mr-3 mb-2" />
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
					countryConfirmed={countryConfirmed}
					countryDeaths={countryDeaths}
					countryRecovered={countryRecovered}
				/>
			</div>
			<div className="global p-3 d-flex justify-content-center align-items-center flex-row">
				<Card width={"100%"} height={"100%"} bgcolor={"#8e44ad"} title={"Global"} icon={global} list1Display={"none"} />
			</div>
		</div>
	);
};

export default SectionContent;
