import React from "react";

const Card = (props) => {
	return (
		<div className="card text-dark bg-light" style={{ width: props.width, height: props.height, textAlign: "center" }}>
			<div className="card-header">Title</div>
			<div className="card-body">
				<h5 className="card-title"></h5>
				<p className="card-text">30</p>
			</div>
		</div>
	);
};

export default Card;
