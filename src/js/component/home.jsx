import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Carrusel } from "./carrusel.jsx";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Carrusel></Carrusel>
		</div>
	);
};

export default Home;
