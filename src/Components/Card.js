import React from "react";

const Card = (props) => {
	return (
		<div
			className="card text-dark"
			style={{
				width: props.width,
				height: props.height,
				textAlign: "center",
				backgroundColor: props.bgcolor,
				icon: props.icon,
			}}
		>
			<div className="card-header">
				<h4 className="text-white">
					<img src={props.icon} width="28" className="mb-3" />
					<br />
					{props.title}
				</h4>
			</div>
			<div className="card-body d-flex justify-content-center align-items-center">
				<p className="card-text text-white">{props.cases}</p>

				<div className="stats" style={{ display: props.list1Display }}>
					<div className="mt-2 mb-4">
						<h5 style={{ color: "#f7b731" }}>Total cases</h5>
						<p className="text-white">{props.countryConfirmed}</p>
					</div>
					<div className="mt-4 mb-4">
						<h5 style={{ color: "#eb3b5a" }}>Deaths</h5>
						<p className="text-white">{props.countryDeaths}</p>
					</div>
					<div className="mt-4 mb-4">
						<h5 style={{ color: "#20bf6b" }}>Recovered</h5>
						<p className="text-white">{props.countryRecovered}</p>
					</div>
				</div>

				<div className="globalstats" style={{ display: props.list2Display, textAlign: "center" }}>
					<div className="mt-2 mb-4">
						<h5 style={{ color: "#f7b731" }}>
							Total cases : <span className="text-white">1029254</span>
						</h5>
					</div>
					<div className="mt-2 mb-4">
						<h5 style={{ color: "#eb3b5a" }}>
							Deaths : <span className="text-white">23454</span>
						</h5>
					</div>
					<div className="mt-2 mb-4">
						<h5 style={{ color: "#20bf6b" }}>
							Recovered : <span className="text-white">3454</span>
						</h5>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
