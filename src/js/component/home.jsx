import React from "react";

//include images into your bundle
import { Nav } from "./nav.jsx";


//create your first component
const Home = () => {
	return (
		<>
			<div className="container">
				<Nav/>
			</div>
		</>
	);
};

export default Home;
