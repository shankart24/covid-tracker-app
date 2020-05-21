import React from "react";

const Card = (props) => {
	return (
		<div className="card text-white bg-dark" style={{ width: props.width, height: props.height, textAlign: "center" }}>
			<div className="card-header">Header</div>
			<div className="card-body">
				<h5 className="card-title">icon</h5>
				<p className="card-text">30</p>
			</div>
		</div>
	);
};

export default Card;
