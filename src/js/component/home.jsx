import React, {useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [theColor, setColor] = useState("red");

	
	return (
		<div className="traffic-light">
			<div
			onClick={() => setColor("red")} className={"light red" + (theColor == "red" ? "glow" : "")}></div>
			<div onClick={() => setColor("yellow")} className={"light yellow" + (theColor == "yellow" ? "glow" : "")}></div>
			<div onClick={() => setColor("green")} className={"light green" + (theColor == "green" ? "glow" : "")}></div>
		</div>
	);
};

export default Home;
