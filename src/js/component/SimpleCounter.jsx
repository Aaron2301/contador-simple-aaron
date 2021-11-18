import React from "react";
import PropType from "prop-types";

export const SimpleCounter = props => {
	return (
		<div className="container">
			<div className="counter d-flex justify-content-center rounded">
				<div className="clockIcon counterBox px-2 rounded mx-1">
					<i className="far fa-clock"></i>
				</div>
				<div className="fourthNumber counterBox px-2 rounded mx-1">
					{props.fourthNumber}
				</div>
				<div className="thirdNumber counterBox px-2 rounded mx-1">
					{props.thirdNumber}
				</div>
				<div className="secondNumber counterBox px-2 rounded mx-1">
					{props.secondNumber}
				</div>
				<div className="firstNumber counterBox px-2 rounded mx-1">
					{props.firstNumber}
				</div>
			</div>
		</div>
	);
};

SimpleCounter.propTypes = {
	fourthNumber: PropType.number,
	thirdNumber: PropType.number,
	secondNumber: PropType.number,
	firstNumber: PropType.number
};
