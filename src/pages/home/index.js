/** @format */

import React, { useState } from "react";
import Header from "../../Components/common/header";
import TabOptions from "../../Components/common/tabOptions";
import Footer from "../../Components/common/footer";
import Delivery from "../../Components/delivery";
import DiningOut from "../../Components/diningOut";
import NightLife from "../../Components/nightLife";

const Home = () => {
	const [activeTab, setActiveTab] = useState("Delivery");
	return (
		<>
			<div>
				<Header />
				<TabOptions activeTab={activeTab} setActiveTab={setActiveTab} />
				{getCorrectScreen(activeTab)}
				<Footer />
			</div>
		</>
	);
};
const getCorrectScreen = (tab) => {
	switch (tab) {
		case "Delivery":
			return <Delivery />;
		case "Dining Out":
			return <DiningOut />;
		case "Nightlife":
			return <NightLife />;
		default:
			return <Delivery />;
	}
};

export default Home;
