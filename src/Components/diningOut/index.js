/** @format */

import React from "react";
import "./diningOut.css";
import Collection from "../common/collections";
import Filters from "../common/filters";
import ExploreSection from "../common/exploreSection";
import { diningOut } from "../../data/diningOut";

const collectionList = [
	{
		id: 1,
		title: "Best in Lucknow",
		cover:
			"https://b.zmtcdn.com/data/collections/39b65e2b452485ad8061491d5bcc7d17_1702545898.png?fit=around|858.4000000000001:256&crop=858.4000000000001:256;*,*",
		places: "28 Places",
	},
	{
		id: 2,
		title: "Best Insta-worthy Places",
		cover:
			"https://b.zmtcdn.com/data/collections/59d229eb19755004aa13769bb9e37002_1675252826.jpg?fit=around|858.4000000000001:256&crop=858.4000000000001:256;*,*",
		places: "7 Places",
	},
	{
		id: 3,
		title: "The Legends of Lucknow",
		cover:
			"https://b.zmtcdn.com/data/collections/1aab6777bf22e82144a7f48e4a75355e_1706256566.png?fit=around|858.4000000000001:256&crop=858.4000000000001:256;*,*",
		places: "12 Places",
	},
	{
		id: 4,
		title: "Serene Rooftop Places",
		cover:
			"https://b.zmtcdn.com/data/collections/e59776b23e81e39789ab280a7915d190_1675239897.jpg?fit=around|858.4000000000001:256&crop=858.4000000000001:256;*,*",
		places: "8 Places",
	},
	{
		id: 5,
		title: "Pizza On My Mind",
		cover:
			"https://b.zmtcdn.com/data/collections/4549e973b0cdef037a96ef4ebd5dfbed_1707387644.png?fit=around|858.4000000000001:256&crop=858.4000000000001:256;*,*",
		places: "6 Places",
	},
	{
		id: 6,
		title: "Places for Smoky Kebabs",
		cover:
			"https://b.zmtcdn.com/data/collections/3b856aa87e09b2e78fa9d09f936b0494_1675239659.jpg?fit=around|858.4000000000001:256&crop=858.4000000000001:256;*,*",
		places: "5 Places",
	},
	{
		id: 7,
		title: "Bingeworthy Desserts",
		cover:
			"https://b.zmtcdn.com/data/collections/ca03a3b5223d8dd4906e5e84277e0d8d_1688043267.png?fit=around|858.4000000000001:256&crop=858.4000000000001:256;*,*",
		places: "6 Places",
	},
	{
		id: 8,
		title: "Premium Coffee Shops",
		cover:
			"https://b.zmtcdn.com/data/collections/ed82b6317a1a702bb576d51c77bbc4bd_1708513175.png?fit=around|858.4000000000001:256&crop=858.4000000000001:256;*,*",
		places: "12 Places",
	},
];
const diningOutFilters = [
	{
		id: 1,
		icon: <i className="fa-solid fa-filter absolute-center"></i>,
		title: "Filters",
	},
	{
		id: 2,
		title: "Rating: 4.0+",
	},
	{
		id: 3,
		title: "Outdoor Seating",
	},
	{
		id: 4,
		title: "Serves Alcohol",
	},
	{
		id: 5,
		title: "Open Now",
	},
	{
		id: 6,
		icon: <i className="fa-solid fa-crown absolute-center"></i>,
		title: "Gold",
	},
];

const diningList = diningOut;

const DiningOut = () => {
	return (
		<div>
			<Collection list={collectionList} />
			<div className="max-width ">
				<Filters filterList={diningOutFilters} />
			</div>
			<ExploreSection
				list={diningList}
				collectionName="Dine-Out Restaurants in Lucknow"
			/>
		</div>
	);
};

export default DiningOut;
