import React, { useState } from "react";

export function TrafficLight() {
	const [color, setColor] = useState();
	return (
		<div className="wrapper">
			<div className="traffic-light">
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

			<div className="pedestrian-light">
				<div className="pedestrian-sign">
					<div>
						<i
							className={
								color === "red"
									? "fas fa-walking walk"
									: color === "green"
									? "fas fa-hand-paper stop"
									: " "
							}
						/>
					</div>
				</div>
				<div className="pedestrian-light-pole"></div>
				<div className="pole-base"></div>
			</div>
		</div>
	);
}
