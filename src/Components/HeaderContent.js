import React, { useState } from "react";
import image1 from "../stock/image1.png";
import SectionContent from "./SectionContent";

const HeaderContent = () => {
	return (
		<div className="row p-2 d-flex justify-content-center rounded header-content-row">
			<div className="col-lg-12 col-md-12 col-sm-8 header-content-one d-flex justify-content-center align-items-center flex-column ">
				<img src={image1} />
				<h2>Covid19 Tracker</h2>
			</div>
			<div
				className="col-lg-12 col-md-12 col-sm-8 header-content-two d-flex 
			justify-content-center align-items-center flex-column"
			>
				<h4 style={{ textAlign: "center" }}>Keep track of the raising Covid19 cases in an area.</h4>
			</div>
		</div>
	);
};

export default HeaderContent;
