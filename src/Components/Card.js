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
				<h5 className="text-white">
					<img src={props.icon} width="28" className="mb-2" />
					<br />
					{props.title}
				</h5>
			</div>
			<div className="card-body d-flex justify-content-center align-items-center">
				<p className="card-text text-white">1000</p>
			</div>
		</div>
	);
};

export default Card;
