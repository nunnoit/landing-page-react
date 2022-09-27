import React from "react";

// Def. Components
import { Nav } from "./nav.jsx";
import { Card } from "./cards.jsx";


// Home
const Home = () => {
	return (
		<>
			<div className="container-fluid p-0">
				<Nav/>
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
		</>

	);
};

export default Home;
