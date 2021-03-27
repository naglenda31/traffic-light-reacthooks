import React, { useState } from "react";

//create your first component
export function TrafficLight() {
	const [color, setColor] = useState();
	return (
		<div className="wrapper">
			<div className="lineTop"></div>

			<div className="row">
				<div className="col p-0">
					<div className="lineHandle"></div>
					<div className="container">
						<div
							className={
								color === "red"
									? "light red selected"
									: "light red"
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

				<div className="col align-self-end p-0">
					<div className="pedestrian-light">
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
				</div>
			</div>
		</div>
	);
}
