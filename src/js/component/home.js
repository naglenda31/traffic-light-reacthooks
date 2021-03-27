import React, { useState } from "react";

//create your first component
export function TrafficLight() {
	const [color, setColor] = useState();
	return (
		<div className="mt-5">
			<div className="lineHandle"></div>
			<div className="container">
				<div
					className={
						color === "red" ? "light red selected" : "light red"
					}
					onClick={() => setColor("red")}></div>
				<div
					className={
						color === "yellow"
							? "light yellow selected"
							: "light yellow"
					}
					onClick={() => setColor("yellow")}></div>
				<div
					className={
						color === "green"
							? "light green selected"
							: "light green"
					}
					onClick={() => setColor("green")}></div>
			</div>
		</div>
	);
}
